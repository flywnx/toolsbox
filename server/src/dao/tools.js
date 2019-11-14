// tools.js
module.exports = {
  getToolsInfo: (ctx) => {
    return ctx.execSql(`SELECT * FROM tool_info  `);
  },
  saveToolsInfo: (ctx, query) => {
    console.log("SQL", query.query);
    return ctx.execSql(
      `
        UPDATE tool_info 
        SET 
            name = ?,
            icon = ?,
            url = ?,
            target = ?
            WHERE
            id = ?
        `,
      [query.name, query.icon, query.url, query.target, query.id]
    );
  },
  getToolsTarget: (ctx) => {
    return ctx.execSql(`SELECT * FROM tool_type `);
  },

  addTarget: (ctx, query) => {
    console.log("addTarget", query);
    return ctx.execSql(`INSERT INTO tool_type(name) VALUES(?)`, [
      query.tagName
    ]);
  },
  deleteTarget: (ctx, query) => {
    console.log("addTarget", query);
    return ctx.execSql(`DELETE FROM tool_type WHERE id = ?`, [query.id]);
  }
};
