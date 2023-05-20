// 数据库的配置
var mysql = require("mysql");
var pool = mysql.createPool({
  host: "sqlpub.com",
  user: "blog_fe",
  password: "ce546a2dc437f341",
  database: "blog_fe",
});

// 数据库的操作函数（被封装）
module.exports = {
  //sql语句 ，参数
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          // not connected!
          reject(err);
        } else {
          connection.query(sql, values, function (error, results) {
            connection.release(); //释放连接，放回pool中
            if (error) {
              console.log("数据库操作出现问题")
              reject(err);
            } else {
              resolve(results);
            }
          });
        }
      });
    });
  },
};