const route = require("express").Router();
const {
  insertdata,
  getalluserdata,
  getsalaryabove30000,
  getexprienceabove2,
  getgraduatedata,
  getsalary,
  deleteEmp,
} = require("../controller/usercontroller");
route.get("/query1", insertdata);

route.get("/query2", getalluserdata);

route.get("/query3", getsalaryabove30000);

route.get("/query4", getexprienceabove2);

route.get("/query5", getgraduatedata);

route.get("/query6", getsalary);

route.get("/query7", deleteEmp);
module.exports = route;
