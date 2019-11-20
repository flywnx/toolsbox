// login.js
/*路由*/
const router = require("koa-router")();
/*接口服务*/
const apiService = require("../service/api.js");
// 获取七牛token
router.get(`/getQiniuToken`, apiService.getQiniuToken);

module.exports = router;
