// 数据库的配置
var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "mini",
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