const express = require("express");
const app = express();
const session = require('express-session');

app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.get('/', function(req,res) {
    return res.redirect('/Employee');
} );

app.post('/Details', function(req,res) {
    
    let name_data = req.body;
    console.log(name_data);

    res.render('Details', {name_data});
    
    return res.redirect('/Details');
});

app.use('/', require('./routes/Employee'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server has started at port http://localhost:" + PORT +"/Employee"));