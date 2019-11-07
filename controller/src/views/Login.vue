<template>
  <div class="login">
    <div class="form-box">
      <h2>toolxBox Controller</h2>
      <el-form :model="param"
               :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="param.username"
                    placeholder="username">
            <el-button slot="prepend"
                       icon="ali-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="param.password"
                    placeholder="password"
                    show-password
                    @keyup.enter.native="submitForm()">
            <el-button slot="prepend"
                       icon="ali-icon-unlock"></el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary"
                 @click="submitForm()">登录</el-button>
    </div>
  </div>
</template>

<script>
import { login } from "../api/index";
export default {
  "name": "login",
  "data": () => {
    return {
      "param": {
        "username": "",
        "password": ""
      },
      "rules": {
        "username": [
          { "required": true, "message": "请输入用户名", "trigger": "blur" }
        ],
        "password": [{ "required": true, "message": "请输入密码", "trigger": "blur" }]
      }
    };
  },
  "methods": {
    async submitForm () {
      const loginInfo = await login(
        `?username=${this.param.username}&password=${this.param.password}`
      );
      if (loginInfo.code === 0) {
        this.$message.success("登录成功");
        localStorage.setItem("ms_username", this.param.username);
        this.$router.push("/home");
      } else {
        this.$message.error("请输入账号和密码");
      }
    }
  },
  "components": {}
};
</script>

<style scoped lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-box {
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 20%;
  height: 40%;
  flex-direction: column;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
h2 {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
