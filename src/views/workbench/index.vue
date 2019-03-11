<!--html代码块-->
<template>
  <div class="app-container">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <h3 class="statistics">当日统计</h3>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content stat-l touying">
                  <span>当月已巡河</span>
                  <div class="word-cen">
                    <span class="bag">285</span><span class="small">次</span>
                  </div>
                  <span class="stat-bg"></span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content stat-c touying">
                  <span>本月发现问题</span>
                  <div class="word-cen">
                    <span class="bag">2</span><span class="small">条</span>
                  </div>
                  <span class="stat-bg"></span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content stat-r touying">
                  <span>本月已解决问题</span>
                  <div class="word-cen">
                    <span class="bag">2</span><span class="small">次</span>
                  </div>
                  <span class="stat-bg"></span>
                </div>
              </el-col>
            </el-row>
            <h3 class="to-do">我的待办</h3>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content to-do-l touying">
                    <div slot="header" class="patrol">
                      <i></i>
                      <span>巡河事件</span>
                    </div>
                    <div class="text item">
                        <div class="shijian" style="height: 50px;line-height: 50px">
                          <div class="text">内容</div>
                          <div class="time" style="text-align: center;">时间</div>
                        </div>
                        <div class="shijian">
                          <div class="text">河长司红玉在产河德州市禹城市段308路口北100米工厂门口发现河道内倾倒垃圾</div>
                          <div class="time">2019年2月14日</div>
                        </div>
                        <div class="shijian">
                          <div class="text">河长司红玉在丰产河德州市禹城市段308北200米发现有拦河渔具</div>
                          <div class="time">2019年2月15日</div>
                        </div>
                        <div class="shijian">
                          <div class="text">河长司红玉在丰产河德州市禹城市段发现南北庄苗圃桥北侧有拦河渔具</div>
                          <div class="time">2019年2月16日</div>
                        </div>
                        <div class="shijian">
                          <div class="text">河长刘洪贵在引黄总干渠德州市禹城市段发现安仁镇黄庄村赵牛新河垃圾需清理</div>
                          <div class="time">2019年2月17日</div>
                        </div>
                        <div class="shijian">
                          <div class="text">河长李勇在丰产河德州市禹城市段发现王子付社区南龙王李村附近河道中有拦河渔具</div>
                          <div class="time">2019年2月18日</div>
                        </div>
                        <div class="shijian">
                          <div class="text">河长李壮志在西普天河德州市禹城市段发现河道淤积，有芦苇杂草垃圾</div>
                          <div class="time">2019年2月19日</div>
                        </div>
                    </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content to-do-r touying">
                  <div slot="header" class="patrol">
                    <i></i>
                    <span>公众投诉</span>
                  </div>
                  <div class="text item">
                    <div class="shijian" style="height: 50px;line-height: 50px">
                      <div class="text">内容</div>
                      <div class="time" style="text-align: center;">时间</div>
                    </div>
                    <div class="shijian">
                      <div class="text">魏先生在德州市临邑县于齐河县文界引黄灌区处发现河道水体-水体异味</div>
                      <div class="time">2019年2月17日</div>
                    </div>
                    <div class="shijian">
                      <div class="text">张先生在在引黄总干渠德州市禹城市段发现安仁镇黄庄村赵牛新河垃圾</div>
                      <div class="time">2019年2月18日</div>
                    </div>
                    <div class="shijian">
                      <div class="text">韩女士在西普天河德州市禹城市段发现河道淤积，有芦苇杂草垃圾 </div>
                      <div class="time">2019年2月19日</div>
                    </div>
                    <div class="shijian">
                      <div class="text">赵先生在西普天河德州市禹城市段发现河道淤积垃圾</div>
                      <div class="time">2019年2月20日</div>
                    </div>
                    <div class="shijian">
                      <div class="text">王先生在德州市临邑县于齐河县文界引黄灌区处发现河道水体-水体异味</div>
                      <div class="time">2019年2月21日</div>
                    </div>
                    <div class="shijian">
                      <div class="text">李先生在德州市临邑县于齐河县文界引黄灌区处发现河道水体-水体异味</div>
                      <div class="time">2019年2月22日</div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <h3 class="information">重要信息</h3>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content infor-l touying">
                  <div slot="header" class="patrol">
                    <i></i>
                    <span>领导巡河</span>
                  </div>
                  <div class="text item">
                    <div class="shijian" style="height: 50px;line-height: 50px">
                      <div class="text">河长</div>
                      <div class="time">职位</div>
                      <div class="text">时间</div>
                      <div class="text">状态</div>
                    </div>
                    <div class="shijian">
                      <div class="text">司红玉</div>
                      <div class="text">省政府副省长</div>
                      <div class="time">01：13</div>
                      <div class="text blue">正在巡河</div>
                    </div>
                    <div class="shijian">
                      <div class="text">李勇</div>
                      <div class="text">省委副书记</div>
                      <div class="time">10：13</div>
                      <div class="text blue">正在巡河</div>
                    </div>
                    <div class="shijian">
                      <div class="text">李壮志</div>
                      <div class="text">省委副书记</div>
                      <div class="time">10：13</div>
                      <div class="text blue">正在巡河</div>
                    </div>
                    <div class="shijian">
                      <div class="text">刘洪贵</div>
                      <div class="text">省委副书记</div>
                      <div class="time">11：13</div>
                      <div class="text blue">正在巡河</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content infor-c touying">
                  <div slot="header" class="patrol">
                    <i></i>
                    <span>紧急事件</span>
                  </div>
                  <div class="text item">
                    <div class="shijian" style="height: 50px;line-height: 50px">
                      <div class="text">内容</div>
                      <div class="time" style="text-align: center;">时间</div>
                    </div>
                    <div class="shijian">
                      <div class="text">禹城市段308路口北工厂门口河道内垃圾</div>
                      <div class="time">2019年2月14日</div>
                    </div>
                    <div class="shijian">
                      <div class="text">丰产河德州市禹城市段308北拦河渔具</div>
                      <div class="time">2019年2月15日</div>
                    </div>
                    <div class="shijian">
                      <div class="text">禹城市段河道淤积，有芦苇杂草垃圾</div>
                      <div class="time">2019年2月19日</div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content infor-r touying">
                  <div slot="header" class="patrol">
                    <i></i>
                    <span>严重投诉</span>
                  </div>
                  <div class="text item">
                    <div class="shijian" style="height: 50px;line-height: 50px">
                      <div class="text">内容</div>
                      <div class="time" style="text-align: center;">时间</div>
                    </div>
                    <div class="shijian">
                      <div class="text">西普天河德州市禹城市段有芦苇杂草垃圾</div>
                      <div class="time">2019年2月16日</div>
                    </div>
                    <div class="shijian">
                      <div class="text">西普天河德州市禹城市段河道淤积垃圾</div>
                      <div class="time">2019年2月16日</div>
                    </div>
                    <div class="shijian">
                      <div class="text">临邑县于齐河县文界引黄灌区处河道水体异味</div>
                      <div class="time">2019年2月16日</div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <h3 class="same-month">当月巡河统计</h3>
            <el-row>
              <el-col :span="24">
                <div id="echarts" class="echartl touying"></div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<!--js-->
<script>
var echarts = require('echarts/lib/echarts');
// 引入柱状图组件
require('echarts/lib/chart/bar');
// 引入提示框和title组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {

  data() {    //声明的对象
    return {
      x_data:['保店镇','津城街道办事处','刘营伍乡','大柳镇','柴胡店镇','大曹镇','相衙镇','时集镇','长官镇','宁城街道办事处','杜集镇','张大庄镇'],
      y_data:[180,269,200,300,178,210,160,222,177,198,240,214],
    }
  },
  methods: {   //执行的函数
    charts(){

      var date=new Date;
      var month=date.getMonth()+1;
      var _self = this;
      var option = {
        title:{
          left:'center',
          top:10,
          text:'宁津县'+month+'月份巡河情况统计',
          textStyle:{
            fontStyle:'normal',
            fontWeight:'bold',
            fontFamily:'sans-serif',
            fontSize:20
          }
        },
        tooltip: {},
        xAxis: {
          type : 'category',
          data: _self.x_data,
          axisLabel: {
            interval: 0,
            fontSize: 14
          }
        },
        yAxis: [
          {
            name:"巡河次数",
          }
        ],
        series: [
          {
            name: '巡河次数',
            type: 'bar',
            data: _self.y_data,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#3fa7dc'
                }, {
                  offset: 1,
                  color: '#99d9ea'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20,
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color: 'black',
                    fontSize: 12
                  }
                }
              }
            },
          }
        ]
      };
      //设置参数
      var charts1 = echarts.init(document.getElementById('echarts'));
      charts1.setOption(option);
    }
  },
  mounted(){
    this.charts();
  }
}
</script>

<!--css样式-->
<style rel="stylesheet/scss" lang="scss" scoped>
  #app .hideSidebar .main-container {
    margin-left: 0px !important;
  }
  .app-container {
    padding: 0px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
       margin-bottom: 0;
     }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #f0f0f0;
      height: 100%;
      padding: 20px 40px;
      border-radius: 0;
    }
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
<style rel="stylesheet/scss" lang="scss">
  $blue:#1f7eff;
  $touying:#d0d9ff;
  .touying{
    box-shadow:6px 5px 7px -3px $touying;
  }
  .echartl{
    width: 100%;
    height: 350px;
    background : #fff;
    border-radius: 12px;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .statistics,
  .to-do,
  .information,
  .same-month{
    font-size: 24px;
    color: #333333;
    margin-top: 0;
  }

  .grid-content{
    padding: 20px;
    border-radius: 12px;
    height: 300px;
    span{
      color: #ffffff;
      font-size: 18px;
    }
    .word-cen{
      line-height: 198px;
      text-align: center;
      .bag{
        font-size: 98px;
        color: #ffffff;
      }
    }

  }
  .stat-l{
    position: relative;
    background-image: linear-gradient(90deg, #26dfc1 0%, #1dc4fe 100%);
    .stat-bg{
      width: 100%;
      height: 300px;
      padding: 20px;
      position: absolute;
      top: 0;
      right: 0;
      background-image: url(~myImg/home-page/xunhe.png);
      background-position: 231px 68px;
      background-repeat: no-repeat;
      background-size: 230px 210px;
    }
  }
  .stat-c{
    position: relative;
    background-image: linear-gradient(90deg, #f6caac 0%, #ffa3d9 100%);
    .stat-bg{
      width: 100%;
      height: 300px;
      padding: 20px;
      position: absolute;
      top: 0;
      right: 0;
      background-image: url(~myImg/home-page/fxwt.png);
      background-position: 238px 58px;
      background-repeat: no-repeat;
      background-size: 220px 220px;
    }
  }
  .stat-r{
    position: relative;
    background-image: linear-gradient(90deg, #4fc5fa 0%, #9c93ef 100%);
    .stat-bg{
      width: 100%;
      height: 300px;
      padding: 20px;
      position: absolute;
      top: 0;
      right: 0;
      background-image: url(~myImg/home-page/jjwt.png);
      background-position: 250px 60px;
      background-repeat: no-repeat;
      background-size: 210px 220px;
    }
  }
  .to-do-l,
  .to-do-r{
    border-radius: 16px;
    padding: 0px;
    height: 470px;
    background: #ffffff;
    .text {
      font-size: 14px;
    }

    .item {
      margin-top: 18px;
      .shijian{
        margin: 0 30px;
        height: 40px;
        line-height: 40px;
        color: #333333;
        font-size: 13px;
        margin-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
        .text{
          width: 75%;
          float: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .time{
          width: 25%;
          float: left;
          text-align: center;
        }
      }
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 480px;
    }
  }
  .to-do-l{
    .patrol{
      height: 40px;
      background: #f7f7f7;
      border-radius: 16px 16px 0 0;
      box-shadow:1px 4px 2px -3px #d0d9ff;
      span{
        color: #333333;
        font-size: 18px;
        line-height: 40px;
      }
      i{
        width: 26px;
        height: 26px;
        display: block;
        float: left;
        margin: 10px 7px 0 30px;
        background-image: url(~myImg/home-page/icon-xunhe.png);
        background-position: 0px 0px;
        background-repeat: no-repeat;
        background-size: 26px 26px;
      }
    }
  }
  .to-do-r{
    .patrol{
      height: 40px;
      background: #f7f7f7;
      border-radius: 16px 16px 0 0;
      box-shadow:1px 4px 2px -3px #d0d9ff;
      span{
        color: #333333;
        font-size: 18px;
        line-height: 40px;
      }
      i{
        width: 26px;
        height: 26px;
        display: block;
        float: left;
        margin: 10px 7px 0 30px;
        background-image: url(~myImg/home-page/icon-gzts.png);
        background-position: 0px 0px;
        background-repeat: no-repeat;
        background-size: 26px 26px;
      }
    }
  }

  .infor-c,
  .infor-r{
    border-radius: 16px;
    padding: 0px;
    height: 360px;
    background: #ffffff;
    .text {
      font-size: 14px;
    }

    .item {
      margin-top: 18px;
      .shijian{
        margin: 0 30px;
        height: 40px;
        line-height: 40px;
        color: #333333;
        font-size: 13px;
        margin-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
        .text{
          width: 65%;
          float: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .time{
          width: 35%;
          float: left;
          text-align: center;
        }
      }
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 480px;
    }
  }

  .infor-l{
    border-radius: 16px;
    padding: 0px;
    height: 360px;
    background: #ffffff;
    .text {
      font-size: 14px;
      text-align: center;
    }

    .item {
      margin-top: 18px;
      .shijian{
        margin: 0 30px;
        height: 40px;
        line-height: 40px;
        color: #333333;
        font-size: 13px;
        margin-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
        .text,
        .time{
          width: 25%;
          float: left;
          text-align: center;
        }
        .blue{
          color: $blue;
        }
      }
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 480px;
    }
    .patrol{
      height: 40px;
      background: #f7f7f7;
      border-radius: 16px 16px 0 0;
      box-shadow:1px 4px 2px -3px #d0d9ff;
      span{
        color: #333333;
        font-size: 18px;
        line-height: 40px;
      }
      i{
        width: 26px;
        height: 26px;
        display: block;
        float: left;
        margin: 10px 7px 0 30px;
        background-image: url(~myImg/home-page/ldxh.png);
        background-position: 0px 0px;
        background-repeat: no-repeat;
        background-size: 26px 26px;
      }
    }
  }
  .infor-c{
    .patrol{
      height: 40px;
      background: #f7f7f7;
      border-radius: 16px 16px 0 0;
      box-shadow:1px 4px 2px -3px #d0d9ff;
      span{
        color: #333333;
        font-size: 18px;
        line-height: 40px;
      }
      i{
        width: 26px;
        height: 26px;
        display: block;
        float: left;
        margin: 10px 7px 0 30px;
        background-image: url(~myImg/home-page/jjsj.png);
        background-position: 0px 0px;
        background-repeat: no-repeat;
        background-size: 26px 26px;
      }
    }
  }
  .infor-r{
    .patrol{
      height: 40px;
      background: #f7f7f7;
      border-radius: 16px 16px 0 0;
      box-shadow:1px 4px 2px -3px #d0d9ff;
      span{
        color: #333333;
        font-size: 18px;
        line-height: 40px;
      }
      i{
        width: 26px;
        height: 26px;
        display: block;
        float: left;
        margin: 10px 7px 0 30px;
        background-image: url(~myImg/home-page/yzts.png);
        background-position: 0px 0px;
        background-repeat: no-repeat;
        background-size: 26px 26px;
      }
    }
  }

</style>

