const db = require("./db.js");
module.exports = {
  // 首页数据
  checkUser() {
    return db.query(`CREATE TABLE qyj  
    (  
    EmployeeID int,  
    FirstName varchar(255),  
    LastName varchar(255),  
    Email varchar(255),  
    AddressLine varchar(255),  
    City varchar(255)  
    ); `);
  }
};