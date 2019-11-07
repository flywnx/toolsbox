import { toolsbox } from "../utils/request";
import config from "./config";
import { getUrlParams } from "../utils/json";
const url = config.HOST + config.API.PROJECT_INTERFACE_PREFIX;

export const login = (query) => {
    return toolsbox({
        "url": `${url}/login${query}`,
        "method": "get"
    });
};

export const getToolsInfo = () => {
    return toolsbox({
        "url": `${url}/getToolsInfo`,
        "method": "get"
    });
};
export const getToolsTarget = () => {
    return toolsbox({
        "url": `${url}/getToolsTarget`,
        "method": "get"
    });
};
// saveToolsInfo
export const saveToolsInfo = (query) => {
    return toolsbox({
        "url": `${url}/saveToolsInfo?${getUrlParams(query)}`,
        "method": "get"
    });
};
