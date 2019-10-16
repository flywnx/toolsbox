const Koa = require("koa");
const router = require("./router");
const app = new Koa();
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());
//router.routes() 启动路由
// allowedMethods处理的业务是当所有路由中间件执行完成之后,
// 若ctx.status为空或者404的时候,丰富response对象的header头
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
