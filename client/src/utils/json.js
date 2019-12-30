export const isJson = str => {
  try {
    str = JSON.parse(str);
  } catch (error) {
    console.log(error);
  }
  return str;
};

export const getUrlParams = params => {
  let havetick = false;
  let keys = [];
  for (let key in params) {
    if (typeof params[key] !== "string" && typeof params[key] !== "number") {
      if (Object.prototype.toString.call(params[key]) == "[object Array]") {
        params[key] = params[key].join(",");
      } else if (typeof params[key] === "boolean") {
        params[key] = !!params[key] ? 1 : 0;
      } else {
        continue;
      }
    }

    if (key == "tick") havetick = true;

    let aa = key.toLocaleLowerCase();
    params[aa] = params[key];
    keys.push(aa);
  }
  if (havetick == false) {
    var date = new Date();
    params["tick"] = date.getTime();
    keys.push("tick");
  }

  // 组合
  let str = "";
  for (var index = 0; index < keys.length; index++) {
    str = str + keys[index] + "=" + params[keys[index]] + "&";
  }
  str.slice(0, str.length - 1);
  console.log(str);
  return str;
};
