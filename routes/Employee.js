const express = require('express'); // Import express
const {EmployeeView,DetailsView } = require('../controllers/EmployeeController'); // Import EmployeeView and DetailsView from EmployeeController
const router = express.Router(); // Create a new router 
router.get('/Employee', EmployeeView); // Create a new route for EmployeeView
router.get('/Details', DetailsView); // Create a new route for DetailsView
module.exports = router; // Export the router