const util = require("../utilitys");
const qiniu = require("qiniu");
//验证用户登陆
exports.uploadImg = async (ctx) => {

  qiniu.conf.ACCESS_KEY = 'PLVbNZJZW55mYBoLq4D8boZgO5xrTeBTqTCKHqER';
  qiniu.conf.SECRET_KEY = '7C6I0uWsRqRe1KooSW5pP4iu494Ae_aQ28sBSyXT';

  // var putPolicy = new qiniu.rs.PutPolicy({scope:bucket+":"+key});
  //
  // let token = putPolicy.uploadToken();

   function upload() {
        let bucket = "tools-box";
        let key = '/123456789.PNG';

        var mac = new qiniu.auth.digest.Mac('PLVbNZJZW55mYBoLq4D8boZgO5xrTeBTqTCKHqER', '7C6I0uWsRqRe1KooSW5pP4iu494Ae_aQ28sBSyXT');

        var options = {
            scope: bucket,
        };
        var putPolicy = new qiniu.rs.PutPolicy(options);
        var token = putPolicy.uploadToken(mac);
        const config = new qiniu.conf.Config();
        config.zone = qiniu.zone.Zone_z2;

        const formUploader = new qiniu.form_up.FormUploader(config);

        var extra = new qiniu.form_up.PutExtra();


        return new Promise((resolved, reject) => {
            formUploader.putFile(token, key, '/usr/local/www/toolsbox/server/src/9922720e0cf3d7cae04b09132ede790c6a63a959.jpeg', extra, function (respErr, respBody, respInfo) {
            if (respErr) {
                reject(respErr)
            }
            // if (respInfo.statusCode == 200) {
                resolved(respBody)
            // } else {
            //     resolved(respBody)
            // }
        })
        })

        // formUploader.putFile(token, key, , extra, (err, ret,info) => {
        //
        //     if(!err) {
        //     // 上传成功， 处理返回值
        //     // console.log(ret.hash, ret.key, ret.persistentId);
        //     // ctx.body = util.resultSuccessJson(undefined, undefined,3221);
        //     return ret;
        // } else {
        //     // 上传失败， 处理返回代码
        //     // console.log(err);
        //     // ctx.body = util.resultSuccessJson(undefined, err.toString(), 21321);
        //     return err;
        // }
    // });
    }

  try {

       let res =  await upload();
      ctx.body = util.resultSuccessJson(undefined, undefined,res);

  } catch (err) {

    ctx.body = util.resultErrorJson(undefined, err.toString(), {});

  }
};
