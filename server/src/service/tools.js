const toolsDao = require("../dao/tools");
const util = require("../utilitys");

exports.addTools = async (ctx) => {
  console.log("addTools server", ctx.query);
  let query = ctx.query;
  try {
    // 先添加
    await toolsDao.addTools(ctx, query);
    // 获取新的列表返回
    let result = await toolsDao.getToolsInfo(ctx, {});
    ctx.body = util.resultSuccessJson(undefined, undefined, result);
  } catch (err) {
    console.log(err);
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};

exports.getToolsInfo = async (ctx) => {
  try {
    let result = await toolsDao.getToolsInfo(ctx, {});
    console.log(result);
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
exports.updateToolsInfo = async (ctx) => {
  console.log(ctx.query);
  let query = ctx.query;
  try {
    let result = await toolsDao.updateToolsInfo(ctx, query);
    ctx.body = util.resultSuccessJson(undefined, undefined, result);
  } catch (err) {
    console.log(err);
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};
exports.addTarget = async (ctx) => {
  console.log(ctx.query);
  let query = ctx.query;
  try {
    // 先添加
    await toolsDao.addTarget(ctx, query);
    // 获取新的列表返回
    let result = await toolsDao.getToolsTarget(ctx, {});
    ctx.body = util.resultSuccessJson(undefined, undefined, result);
  } catch (err) {
    console.log(err);
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};

exports.deleteTarget = async (ctx) => {
  console.log(ctx.query);
  let query = ctx.query;
  try {
    // 先添加
    await toolsDao.deleteTarget(ctx, query);
    // 获取新的列表返回
    let result = await toolsDao.getToolsTarget(ctx, {});
    ctx.body = util.resultSuccessJson(undefined, undefined, result);
  } catch (err) {
    console.log(err);
    ctx.body = util.resultErrorJson(undefined, err, {});
  }
};
