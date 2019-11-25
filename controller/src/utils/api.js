// import { qiniu } from "qiniu";
// const ACCESS_KEY = "PLVbNZJZW55mYBoLq4D8boZgO5xrTeBTqTCKHqER";
// const SECRET_KEY = "7C6I0uWsRqRe1KooSW5pP4iu494Ae_aQ28sBSyXT";

// exports.uploadImg = async imgUrl => {
//     console.log("upload", imgUrl);
//     //     //     let bucket = "tools-box";
//     //     //     let key = "/123456789001.PNG";
//     //     //     var mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);
//     //     //     var options = {
//     //     //         "scope": bucket
//     //     //     };
//     //     //     var putPolicy = new qiniu.rs.PutPolicy(options);
//     //     //     var token = putPolicy.uploadToken(mac);
//     //     //     const config = new qiniu.conf.Config();
//     //     //     config.zone = qiniu.zone.Zone_z2;
//     //     //     const formUploader = new qiniu.form_up.FormUploader(config);
//     //     //     var extra = new qiniu.form_up.PutExtra();
//     //     return new Promise((resolved, reject) => {
//     //         formUploader.putFile(token, key, imgUrl, extra, function(
//     //             respErr,
//     //             respBody
//     //         ) {
//     //             if (respErr) {
//     //                 reject(respErr);
//     //             }
//     //             resolved(respBody);
//     //         });
//     //     });
// };
