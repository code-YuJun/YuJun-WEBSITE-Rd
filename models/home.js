const db = require("./db.js");
module.exports = {
  // 首页数据
  checkUser(username) {
    return db.query(`select * from t_user where user_name = '${username}'`);
  }
};