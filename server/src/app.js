const Koa = require("koa");
const router = require("koa-router")(); // 注意 router 的引入方式
const app = new Koa();
const utils = require("./utilitys");
const port = 3000;

router.get("/api/about", async (ctx, next) => {
  console.log("get in /about router");
  console.log("1", new Date().getTime());
  await utils.query("SELECT * FROM user", "").then((res) => {
    console.log(res);
    let data = JSON.stringify(res);
    console.log(data);

    ctx.type = "json";
    ctx.body = data;
    console.log(ctx.body);
  });
  next();
});

app.use(router.routes()); // 注意 router 使用方式
app.listen(3000);
console.log(`\nserver is start at port ${port}...\n`);
