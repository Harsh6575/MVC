const express = require('express');
const {EmployeeView,DetailsView } = require('../controllers/EmployeeController');
const router = express.Router();
router.get('/Employee', EmployeeView);
router.get('/Details', DetailsView);
module.exports = router;