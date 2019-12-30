<template>
  <div id="home">
    <div id="TopHeader">
      <div class="right">
        <img class="logo" src="../assets/img/logo2.svg" alt="logo" />
      </div>
      <div class="left">
        <ul class="nav">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/find">发现</router-link></li>
          <li class="menu">
            <i class="ali-icon-caidandianji"></i>
            <div id="menuPopup">
              <ul>
                <li><i class="ali-icon-erweima"></i> 扫码访问</li>
                <li><i class="ali-icon-youjian"></i> 问题反馈</li>
              </ul>
              <div class="arrow"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="title">玩，兴趣之然</div>
      <div class="tips">这是一个因兴趣而生的网站，不定期更新有意思的东西</div>
      <div class="searchBox">
        <form action="" class="searchForm">
          <input type="text" class="search" placeholder="寻找你感兴趣的东西" />
          <a href=""><i class="ali-icon-fangdajing"></i></a>
        </form>
      </div>
      <div class="menuTable">
        <ul class="tipList">
          <li v-for="(tool, index) in showTools" :key="index">{{ tool.name }}</li>
        </ul>
        <div class="changeTip" @click="showTools = getRandomTools(4)">
          <i class="ali-icon-suijisenlin"></i>换一下
        </div>
      </div>
    </div>
    <div id="FootBox">
      <p>
        © 2019-2020 playtheone.com 版权所有
        <a href="http://www.beian.miit.gov.cn/">浙ICP备19050095号</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { getToolsInfo } from "../api/index";
export default {
  "name": "home",
  "data": () => {
    return {
      "toolsInfo": [],
      "showTools": []
    };
  },
  "computed": {
    ...mapState(["menuPopup"])
  },
  async created() {
    const toolsInfo = await getToolsInfo();
    if (toolsInfo.code === 0) {
      this.toolsInfo = toolsInfo.data;
      this.showTools = this.getRandomTools(4);
      this.setToolsInfo(toolsInfo.data);
      console.log(this.toolsInfo);
    } else {
      alert.error("获取标签错误");
    }
  },
  "methods": {
    ...mapMutations(["setToolsInfo", "setMenuPopup"]),
    getRandomTools(count = 1) {
      let ret = [],
        indexArr = [],
        i = 0;
      if (count > this.toolsInfo.length) {
        count = this.toolsInfo.length;
      }

      while (i < count) {
        let rd = Math.floor(Math.random() * this.toolsInfo.length);
        let item = this.toolsInfo[rd];
        if (indexArr.indexOf(rd) < 0) {
          ret.push(item);
          indexArr.push(rd);
          i++;
        }
      }

      return ret;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_config.scss";
#home {
  height: 100vh;
  background-image: url(../assets/img/home_bg.jpg);
  background-position: 0px -64px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  #TopHeader {
    height: $fontSize * 5;
    margin: 0 auto;

    width: $windowWidth;
    z-index: 10;
    color: rgba(255, 255, 255, 0.85);
    display: flex;
    justify-content: space-between;
    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 $fontSize * 2;
      .logo {
        width: $fontSize * 2.5;
        height: $fontSize * 2.5;
        padding: 0 $fontSize;
        opacity: 0.85;
      }
      h2 {
        font-size: $fontSize * 2;
      }
    }
    .left {
      .nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: $fontSize * 5;
        padding: 0 $fontSize * 2;
        li {
          padding: 0 0.5 * $fontSize;
          font-size: $fontSize * 1;
          position: relative;
          a {
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        }

        #menuPopup {
          display: none;
          position: absolute;
          top: 18px;
          right: 6px;
          width: 106px;

          color: #222;
          font-size: $fontSize;
          ul {
            width: 86px;
            margin-top: 6px;
            background: #fff;
            padding: 5px 10px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
            li {
              line-height: $fontSize * 2;
              height: $fontSize * 2;
              text-align: center;
            }
            li:hover {
              margin: 1px 1px;
              border: 1px solid #d3d3d3;
              border-radius: 2px;
            }
          }
          .arrow {
            z-index: 1;
            position: absolute;
            background-color: #fff;
            width: $fontSize;
            height: $fontSize;
            transform: rotate(45deg);
            top: 0px;
            right: 3px;
          }
        }
        .menu:hover #menuPopup {
          display: block;
        }
        #menuPopup:hover {
          display: block;
        }
      }
    }
  }
  .content {
    width: 100vw;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      font-size: $fontSize * 6;
      margin-bottom: $fontSize * 3;
    }
    .tips {
      font-size: $fontSize * 2;
      margin-bottom: $fontSize * 3;
    }
    .searchBox {
      margin-bottom: $fontSize * 3;
      .searchForm {
        position: relative;
        a {
          position: absolute;
          top: 0;
          right: 0;
          color: #222;
          margin: $fontSize * 0.75;
          i {
            font-size: $fontSize * 2;
          }
        }
        .search {
          width: $fontSize * 40;
          height: $fontSize * 3.5;
          margin: 0 auto;
          padding: 0 $fontSize;
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 2px;
          background-color: rgba(255, 255, 255, 0.95);
          color: #444444;
          box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.07), 0 1px 3px 0 rgba(0, 0, 0, 0.02),
            0 0 0 1px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
        }
      }
    }
    .menuTable {
      width: $fontSize * 48;
      .tipList {
        display: flex;
        justify-content: space-between;
        font-size: $fontSize * 2;
        cursor: pointer;
      }
      .tipList li:hover {
        text-decoration: underline;
      }
      .changeTip {
        margin-top: $fontSize;
        display: block;
        font-size: $fontSize * 1;
        line-height: $fontSize * 1;
        width: $fontSize * 48;
        text-align: center;
        cursor: pointer;
        i {
          font-size: $fontSize * 1;
          line-height: $fontSize * 1;
          margin: 0 $fontSize * 0.5;
        }
      }
    }
  }
  #FootBox {
    color: #ffffff;
    height: $fontSize * 4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    a {
      color: #ffffff;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
