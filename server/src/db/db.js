const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "47.104.64.45",
  user: "jlb123456",
  password: "123456",
  database: "toolsbox"
});

connection.connect();

module.exports = {
  get_user: (ctx, next) => {
    connection.query("SELECT * FROM user", (err, res) => {
      if (err) {
        console.error(err);
      }
      console.log("sql 查询完成");
      console.log(res);
      let data = JSON.stringify(res);
      console.log(data);

      ctx.type = "json";
      ctx.body = data;
      console.log(ctx.body);
      // setTimeout(() => {
      //   next();
      // }, 2000);
      next();
    });
  }
};
