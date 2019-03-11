<template>
  <div class="login-container">
    <div class="login-centent">
      <div class="logo-img">
        <div class="logo"></div>
        <p>北京顺山软件有限公司©right 版权所有</p>
      </div>
      <el-form ref="loginForm" :model="loginForm" class="login-form" auto-complete="on" label-position="left">
        <h3 class="title">宁津县河长制管理信息系统</h3>
        <el-form-item prop="username" class="username">
        <span class="svg-container">
          <svg-icon class="login-user" />
        </span>
          <el-input
            v-model="loginForm.username"
            name="username"
            type="text"
            auto-complete="on"
            placeholder="username"
          />
        </el-form-item>
        <el-form-item prop="password" class="password">
        <span class="svg-container">
          <svg-icon class="login-password" />
        </span>
          <el-input
            :type="pwdType"
            v-model="loginForm.password"
            name="password"
            auto-complete="on"
            placeholder="password"
            @keyup.enter.native="handleLogin" />
        </el-form-item>
        <div class="remember">
          <input type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox">记住密码</label>
        </div>
        <el-form-item>
          <el-button :loading="loading" type="primary" style="width:56%;display: block;margin: 0 auto;" @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin',
        param:'1' //设置默认值为1，即设置单选框为选中状态
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined,
      checked: true
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#999999;

/* reset element-ui css */
.login-container {
  .login-centent{
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        font-size: 14px;
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        border-bottom: 1px solid #e0e0e0;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-form-item {
      /*border-bottom: 1px solid #e0e0e0;*/
      background: transparent;
      border-radius: 5px;
      color: #454545;
    }
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#ffffff;
$dark_gray:#889aa4;
$light_gray:#2689fc;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url(~myImg/login_images/bg.png);
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .login-centent{
    width: 805px;
    height: 380px;
    /*background-color: pink;*/
    position: absolute;
    left: 0;
    right: 0;
    margin: 160px auto;
    .el-form-item {
      margin-bottom: 20px;
    }
    .logo-img{
      float: left;
      width: 340px;
      height: 380px;
      background-image: linear-gradient(to bottom, rgba(27, 196, 255, 0.3) 50%, rgba(31, 119, 255, 0.7) 100%);
      box-shadow: 16px 15px 37px -23px #fe0302;
      z-index: 1;
      position: absolute;
      .logo{
        width: 120px;
        height: 120px;
        background-image: url(~myImg/login_images/slzndx.png);
        background-position: 0 0;
        background-size: 120px 120px;
        background-repeat: no-repeat;
        margin: 110px auto;
      }
      p{
        text-align: center;
        font-size: 12px;
        color: #fff;
      }
    }
    .login-form {
      float: left;
      width: 465px;
      max-width: 100%;
      padding: 35px 5px 23px 5px;
      background-color: $bg;
      box-shadow: 3px 18px 83px -19px #fe0302;
      z-index: 0;
      position: absolute;
      right: 0;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      .login-user{
        width: 16px;
        height: 18px;
        background-image: url(~myImg/login_images/user.png);
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 16px 18px;
      }
      .login-password{
        width: 16px;
        height: 18px;
        background-image: url(~myImg/login_images/mima.png);
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 16px 18px;
      }
    }

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 24px auto;
      text-align: center;
      font-weight: 700;
      letter-spacing: 2px;
    }
    .username{
      width: 66%;
      margin: 0 auto 24px;
    }
    .password{
      width: 66%;
      margin: 0 auto 24px;
    }
    .el-button--primary{
      background: $light_gray;
      border-color: $light_gray;
      color: #fff;
    }
    .remember{
      font-size: 14px;
      color: #999999;
      width: 82px;
      margin: 20px 0 40px 105px;
      #checkbox{
        background-color: #2689fc;
      }
    }
  }

}

</style>
