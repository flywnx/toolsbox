const util = require("../utilitys");
const qiniu = require("qiniu");
//验证用户登陆
exports.getQiniuToken = async (ctx) => {
  try {
    let bucket = "tools-box";
    const ACCESS_KEY = "PLVbNZJZW55mYBoLq4D8boZgO5xrTeBTqTCKHqER";
    const SECRET_KEY = "7C6I0uWsRqRe1KooSW5pP4iu494Ae_aQ28sBSyXT";
    var mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);
    var options = {
      scope: bucket
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var token = putPolicy.uploadToken(mac);

    ctx.body = util.resultSuccessJson(undefined, undefined, { token: token });
  } catch (err) {
    ctx.body = util.resultErrorJson(undefined, err.toString(), {});
  }
};
