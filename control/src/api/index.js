import { toolsbox } from '../utils/request';
import config from './config';

const url = config.HOST + config.API.PROJECT_INTERFACE_PREFIX;

export const login = query => {
    console.log(query);
    console.log(toolsbox);
    console.log(config);

    return toolsbox({
        url: `${url}/login${query}`,
        method: 'get'
    });
};

export const getToolsInfo = () => {
    return toolsbox({
        url: `${url}/getToolsInfo`,
        method: 'get'
    });
};
export const getToolsTarget = () => {
    return toolsbox({
        url: `${url}/getToolsTarget`,
        method: 'get'
    });
};
