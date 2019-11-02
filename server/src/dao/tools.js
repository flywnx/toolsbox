// tools.js
module.exports = {
    getToolsInfo: (ctx) => {
        return ctx.execSql(
            `SELECT * FROM tool_info  `);
    },
    getToolsTarget: (ctx) => {
        return ctx.execSql(`SELECT * FROM tool_type `);
    },
    saveToolsInfo: (ctx, query) => {
        console.log('SQL', query.query)
        return ctx.execSql(`
        UPDATE tool_info 
        SET 
            name = ?,
            icon = ?,
            url = ?,
            target = ?
            WHERE
            id = ?
        `, [query.name, query.icon, query.url,
            query.target, query.id
        ]);
    }
};