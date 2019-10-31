const toolsDao = require("../dao/tools");
const util = require("../utilitys");

exports.getToolsInfo = async (ctx) => {
  try {
    let result = await toolsDao.getToolsInfo(ctx, {});
    ctx.body = util.resultSuccessJson(undefined, undefined, result);
  } catch (err) {
    console.log("报错了");
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};
exports.getToolsTarget = async (ctx) => {
  try {
    let result = await toolsDao.getToolsTarget(ctx, {});
    ctx.body = util.resultSuccessJson(undefined, undefined, result);
  } catch (err) {
    console.log("报错了");
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};
