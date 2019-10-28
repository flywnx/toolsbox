const Koa = require("koa");
const app = new Koa();
const config = require("./config");
const router = require("./routers");
const utils = require("./utilitys");
const koaJson = require("koa-json"); // get提交数据的中间件
const bodyParser = require("koa-bodyparser"); // post提交数据中间件
const cors = require("koa-cors");
app.use(bodyParser());
app.use(koaJson());
app.use(cors());
app.use(async (ctx, next) => {
  ctx.execSql = utils.query;
  await next();
});

app.use(router.routes());
app.listen(config.SERVICE.PORT);
console.log(`\nserver is start at port ${config.SERVICE.PORT}...\n`);
