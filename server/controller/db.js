const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "47.104.64.45",
  user: "jlb123456",
  password: "123456",
  database: "toolsbox"
});

connection.connect();

connection.query("SELECT * FROM tool_type", (err, res, fields) => {
  // console.log(err);
  console.log(res, res[1], res[1].id);
  // console.log(fields);
});
