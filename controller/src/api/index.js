import { toolsbox } from "../utils/request";
import config from "./config";
import { getUrlParams } from "../utils/json";
const url = config.HOST + config.API.PROJECT_INTERFACE_PREFIX;

export const login = query => {
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
export const addTools = query => {
    return toolsbox({
        "url": `${url}/addTools?${getUrlParams(query)}`,
        "method": "get"
    });
};

export const getToolsTarget = () => {
    return toolsbox({
        "url": `${url}/getToolsTarget`,
        "method": "get"
    });
};

export const addTarget = query => {
    console.log("addTarget");
    return toolsbox({
        "url": `${url}/addTarget${query}`,
        "method": "get"
    });
};
export const deleteTarget = query => {
    console.log("deleteTarget");
    return toolsbox({
        "url": `${url}/deleteTarget${query}`,
        "method": "get"
    });
};

// updateToolsInfo
export const updateToolsInfo = query => {
    return toolsbox({
        "url": `${url}/updateToolsInfo?${getUrlParams(query)}`,
        "method": "get"
    });
};

export const getQiniuToken = () => {
    return toolsbox({
        "url": `${url}/getQiniuToken`,
        "method": "get"
    });
};
