module.exports = {
  SERVICE: {
    HOST: "localhost",
    PORT: "3000"
  },
  DATABASE: {
    HOST: "47.104.64.45",
    USER: "jlb123456",
    PASSWORD: "123456",
    DATABASE: "toolsbox",
    CONNECTION_LIMIT: 10
  },
  // 接口地址配置
  API: {
    // 项目接口前缀
    PROJECT_INTERFACE_PREFIX: "/testApi"
  },
  // 路径配置
  PATH: {
    UPLOAD_PATH: "public/upload"
  },
  // 限制条件配置
  LIMIT: {
    UPLOAD_IMG_SIZE: 200 * 1024 * 1024
  }
};
