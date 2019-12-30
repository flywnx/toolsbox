import Vue from "vue";
import Vuex from "vuex";
import { mapState, mapMutations, mapGetters } from "vuex";
import { getToolsInfo } from "../api/index";
Vue.use(Vuex);

export default new Vuex.Store({
  "state": {
    "toolsInfo": [],
    "menuPopup": false
  },
  "mutations": {
    "setToolsInfo": (state, data) => {
      state.toolsInfo = data;
    },
    "setMenuPopup": (state, data) => {
      console.log("setMenuPopup", data);
      state.menuPopup = data;
    }
  },
  "actions": {},
  "modules": {},
  "getters": {
    "toolsInfo": async state => {
      if (!state.toolsInfo.length) {
        const toolsInfo = await getToolsInfo();
        if (toolsInfo.code === 0) {
          state.toolsInfo = toolsInfo.data;
          return state.toolsInfo;
        } else {
          alert.error("获取标签错误");
          return [];
        }
      } else {
        return state.toolsInfo;
      }
    }
  }
});
