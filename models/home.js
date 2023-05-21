const db = require("./db.js");
module.exports = {
  // 首页数据
  checkUser() {
    return db.query(`select * from qyj`);
  }
};