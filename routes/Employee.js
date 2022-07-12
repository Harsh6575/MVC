const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.get("/register", (req, res) => {
    res.render("Employee.ejs");
})

router.post("/register",
    body('name', 'The name must be 3+ chars long').isLength({ min: 3 }),
    body('phone', 'The number must be 10 digits long').isLength({ min: 10 }),
    body('email', 'Please enter a valid email id.').isEmail(),
    body('password', 'The password must be 5+ chars long').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ errors: 'Sorry a user with this email already exist.' });
            }

            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            user = await User.create({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                password: hashedPassword
            });

            res.redirect("/success")
        } catch (error) {
            res.redirect("/register")
        }
    }
)

router.get("/success", (req, res) => {
    User.find({}, (err, data) => {
        res.render("Details.ejs", {
            list: data
        })
    })
})

module.exports = router;