const login = (res) => {
  console.log(res);
};
module.exports = {
  login
  // login(ctx) {
  //   ctx.body = {
  //     username: ctx.request.body.username
  //   };
  // },
  // async profile(ctx) {
  //   await sleep(1000);
  //   ctx.body = {
  //     username: "相学长",
  //     sex: "man",
  //     age: "999"
  //   };
  // }
};
// res要包含{user：xxx,password:xxx}
