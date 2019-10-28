const loginDao = require("../dao/login");
const util = require("../utilitys");
//验证用户登陆
exports.adminLogin = async (ctx) => {
  // console.log("adminLogin", ctx.query);
  let username = ctx.query.username || "";
  let password = ctx.query.password || "";
  if (!username || !password) {
    ctx.body = util.resultErrorJson(undefined, "用户名或密码不能为空", {});
    return false;
  }
  try {
    let result = await loginDao.adminLogin(ctx, { username, password });

    let user = result[0];
    console.log("service", user.password, password);
    if (result.length > 0 && user.password == password) {
      ctx.body = util.resultSuccessJson(undefined, undefined, {});
    } else {
      ctx.body = util.resultErrorJson(undefined, "账号或密码错误", {});
    }
  } catch (err) {
    console.log("报错了");
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};
