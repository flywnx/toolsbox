import { toolsbox } from "../utils/request";
import config from "./config";
import { getUrlParams } from "../utils/json";
const url = config.HOST + config.API.PROJECT_INTERFACE_PREFIX;

export const getToolsInfo = () => {
  return toolsbox({
    "url": `${url}/getToolsInfo`,
    "method": "get"
  });
};
