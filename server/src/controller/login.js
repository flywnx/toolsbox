// login.js
/*路由*/
const router = require("koa-router")();
/*接口服务*/
const loginService = require("../service/login.js");
// 后台-使用登录控制器实现登录接口
router.get(`/login`, loginService.adminLogin);

module.exports = router;
