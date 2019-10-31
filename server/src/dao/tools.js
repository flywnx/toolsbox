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
        console.log('SQL', query)
        return ctx.execSql(`
        UPDATE tool_info 
        SET 
            name =${query.name},
            icon =${query.icon},
            url =${query.url},
            target =${JSON.stringify(query.target)},
            WHERE
            id = ${query.id}

        
        `, query);
    }
};