<template>
  <div class="top-container">

      <div class="topleft"></div>
      <div class="topright">
        <div style="float: right;line-height: 70px;padding-right: 20px;">
          <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <span style="color: #fff">张三</span>
            <i class="el-icon-caret-bottom" style="color: #fff"/>
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown" style="margin-top: -2px;">

            <el-dropdown-item>
              帮助
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </div>
        <el-menu
          :default-active="activeIndex"
          :onrouter="headerOnRoutes"
          class="top_menu"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="1" :route="{path:'/'}"><i class="icon iconfont icon-guanli"></i>工作台</el-menu-item>
          <el-menu-item index="2" :route="{path:'/aPicture/index'}"><i class="icon iconfont icon-map"></i>一张图</el-menu-item>
          <el-menu-item index="3" :route="{path:'/river'}"><i class="icon iconfont icon-heliu"></i>巡河监督</el-menu-item>
          <el-menu-item index="4" :route="{path:'/info/riverChief'}"><i class="icon iconfont icon-xinxiguanli"></i>基础信息</el-menu-item>
          <el-menu-item index="5" :route="{path:'/anylize/length'}"><i class="icon iconfont icon-shujufenxi"></i>统计分析</el-menu-item>
          <el-menu-item index="6" :route="{path:'/system/prevent'}"><i class="icon iconfont icon-xitongjicheng"></i>绩效考核</el-menu-item>
          <el-menu-item index="7" :route="{path:'/manage/user'}"><i class="icon iconfont icon-xitongguanli"></i>数据上报</el-menu-item>
          <el-menu-item index="8" :route="{path:'/manage/user'}"><i class="icon iconfont icon-xitongguanli"></i>数据上报</el-menu-item>
          <el-menu-item index="9" :route="{path:'/manage/user'}"><i class="icon iconfont icon-xitongguanli"></i>系统管理</el-menu-item>
        </el-menu>
      </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      activeIndex:"1"
    }
  },
  computed:{
    headerOnRoutes(){
      if(this.$route.meta && this.$route.meta.belongs){ this.activeIndex = this.$route.meta.belongs }
    }
  },
  methods: {
    logout() {
      this.$router.push({path:'/login'});
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .top-container{
    width: 100%;
    height: 70px;
    background: -webkit-linear-gradient(left, #1bc3ff , #1f77ff);
    //background-image: url(~myImg/top_bg.png);
  }
  .topleft{
      height:70px;
      float:left;
      width:30%;
      font-size: 25px;
      color: #fff;
      background-image: url(~myImg/logo_wz.png);
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
      background-size: 75%;
  }
  .topright{
    float:right;
    height:70px;
    width:70%;
  }

  .top_menu{
    height: 70px;
    margin-right: 80px;
    background: -webkit-linear-gradient(left, #1cb0ff, #1e7cff);
  }
  .top_menu  li{
    height: 70px;
    line-height: 70px;
  }
  .top_menu  li:hover{
    background-color: #64c8fd!important;
  }
  .is-active{
    background-color: #64c8fd!important;
    border-bottom-width:4px!important;
  }


</style>

