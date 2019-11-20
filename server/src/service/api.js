const util = require("../utilitys");
const qiniu = require("../api/qiniu");
//验证用户登陆
exports.getQiniuToken = async (ctx) => {
  let bucket = ctx.query.bucket;
  let key = ctx.query.key;
  try {
    console.log(qiniu);
    let token = qiniu.uptoken(bucket, key);
    ctx.body = util.resultErrorJson(undefined, undefined, token);
  } catch (err) {
    console.log("报错了", err);
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};
