<template>
  <div class="login">
    <div class="form-box">
      <h2>toolxBox Controller</h2>
      <el-form :model="param" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="username">
            <el-button slot="prepend" icon="ali-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="param.password" placeholder="password">
            <el-button slot="prepend" icon="ali-icon-unlock" @keyup.enter.native="submitForm()"></el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="submitForm()">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "login",
  data: () => {
    return {
      param: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  components: {}
};
</script>

<style scoped lang="scss">

.login {
  position: relative;
  width: 100vw;
  height: 100vh;
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

