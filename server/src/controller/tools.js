// tools.js
/*路由*/
const router = require("koa-router")();
/*接口服务*/
const toolsService = require("../service/tools.js");
router.get(`/addTools`, toolsService.addTools);
router.get(`/getToolsInfo`, toolsService.getToolsInfo);
router.get(`/getToolsTarget`, toolsService.getToolsTarget);
router.get(`/updateToolsInfo`, toolsService.updateToolsInfo);
router.get(`/addTarget`, toolsService.addTarget);
router.get(`/deleteTarget`, toolsService.deleteTarget);

module.exports = router;
