// tools.js
module.exports = {
  getToolsInfo: (ctx) => {
    return ctx.execSql(`SELECT * FROM tool_info`);
  },
  getToolsTarget: (ctx) => {
    return ctx.execSql(`SELECT * FROM tool_type`);
  }
};
