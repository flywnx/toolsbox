import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    "state": {
        "toolsInfo": []
    },
    "mutations": {},
    "actions": {
        "getServeTools": async (state) => {
            const toolsInfo = await getToolsInfo();
            if (toolsInfo.code === 0) {
                state.toolsInfo = toolsInfo.data;
                console.log(state.toolsInfo);
            } else {
                console.error("获取标签错误");
            }
        }
    },
    "modules": {},
    "getters": {
        "getTools": (context) => {
            console.log(context);
            // if (!state.toolsInfo.length) {
            //     actions.getServeTools();
            // }
            return context;
        }
    }
});
