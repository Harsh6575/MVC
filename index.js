const express = require("express"); // Import express
const app = express(); // Create a new express app
const session = require("express-session"); // Import session

app.use(
  session({
    secret: "oneboy",
    saveUninitialized: true,
    resave: true,
  })
); // Use session

app.set("view engine", "ejs"); // Set the view engine to ejs

app.use(express.urlencoded({ extended: false })); // Use express-urlencoded

app.get("/", function (req, res) {
  return res.redirect("/Employee");
}); // Redirect to EmployeeView

app.post("/Details", function (req, res) {
  let name_data = req.body; //getting data

  res.render("Details", { name_data }); 
  
  return res.redirect("/Details"); 
  //redirect to details
});

app.use("/", require("./routes/Employee")); // Use EmployeeView from EmployeeController
const PORT = process.env.PORT || 5000; // Set the port
app.listen(
  PORT,
  console.log(
    "Server has started at port http://localhost:" + PORT + "/Employee"
  )
); // Start the server