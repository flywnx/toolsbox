var config = require("../config");
// import { config } from "../config";

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = config.AK;
qiniu.conf.SECRET_KEY = config.SK;
// 要上传的空间;
bucket = "Bucket_Name";
// //上传到七牛后保存的文件名
key = "IMG_2714.PNG";
//构建上传策略函数
exports.uptoken = (bucket, key) => {
  var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
  return {
    token: putPolicy.token(),
    AK: config.AK,
    SK: SK
  };
};
//生成上传 Token
// token = uptoken(bucket, key);
