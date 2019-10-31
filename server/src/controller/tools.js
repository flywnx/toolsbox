// tools.js
/*路由*/
const router = require("koa-router")();
/*接口服务*/
const toolsService = require("../service/tools.js");

router.get(`/getToolsInfo`, toolsService.getToolsInfo);
router.get(`/getToolsTarget`, toolsService.getToolsTarget);

module.exports = router;
