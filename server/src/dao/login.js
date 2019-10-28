// login.js
module.exports = {
  adminLogin: (ctx, postData) => {
    console.log("dao", postData);

    return ctx.execSql(
      `SELECT * FROM user WHERE name=${JSON.stringify(postData.username)}`,
      [postData.username, postData.password]
    );
  }
};
