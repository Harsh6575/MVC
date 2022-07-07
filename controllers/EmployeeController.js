const EmployeeView = (req, res) => {
  res.render("Employee", {});
};

const DetailsView = (req, res) => {
  res.render("Details", {});
};
module.exports = {
  EmployeeView,
  DetailsView,
  // EmployeeUser
};

// const EmployeeUser = (req, res) => {
//     const { name, email, location, password, confirm } = req.body;
//     if (!name || !email || !password || !confirm) {
//       console.log("Fill empty fields");
//     };
// };
