const EmployeeView = (req, res) => {
  res.render("Employee", {});
}; 
// employee ejs

const DetailsView = (req, res) => {
  res.render("Details", {});
};
// details ejs

module.exports = {
  EmployeeView,
  DetailsView,
};