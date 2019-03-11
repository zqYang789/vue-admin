<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="sideBarOnRoutes"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
      unique-opened router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
              {{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>

  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  data(){
    return {
        navlist: {
        '1': [
          {
            icon: 'icon iconfont icon-gongzuotai',
            title: '工作台',
            index: '/index',
            perm:['management_view','super_admin'],

          }

        ],
        '2': [
          {
            index: '/maps/river',
            title: '巡河记录',
          },
          {
            index: '/maps/info',
            title: '专题信息',
          },
          {
            index: '/maps/data',
            title: '实时数据',
            perm: ['map_realtime_data_view','super_admin'],
          },
          {
            index: '/maps/video',
            title: '视频监控',
            perm: ['video_monitoring_view','super_admin'],
          }

        ],
        '3': [
          {
            index: '/river/record',
            title: '巡河记录',
          },
          {
            index: '/river/processing',
            title: '事件处理',
          },
          {
            index: '/river/complaints',
            title: '公众投诉',
          }

        ],
        '4': [
          {
            icon: 'el-icon-location',
            index: '/message/web',
            title: '网站信息发布',
            perm:['personnel_list_view','super_admin'],
          },
          {
            icon: 'el-icon-location',
            index: '/message/wechat',
            title: '微信信息发布'
          },
          {
            icon: 'el-icon-location',
            index: '/message/app',
            title: 'APP信息发布'
          }
        ],
        '5': [
          {
            icon: 'el-icon-location',
            index: '/system/prevent',
            title: '防汛抗旱指挥系统',
            perm:['system_flood_control_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-jishitongxun',
            index: '/system/subsystem',
            title: '综合展示子系统',
            perm:['system_subsystem','super_admin'],
          },
          {
            icon: 'icon iconfont icon-jishitongxun',
            index: '/system/communicate',
            title: '即时通讯',
            perm:['system_im_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-jishitongxun',
            index: '/system/plan',
            title: '建设项目管理',
            perm:['system_project_view','super_admin'],
            subs: [
              {
                icon: 'icon iconfont icon-jishitongxun',
                index: '/system/info',
                title: '信息管理',
                perm:['system_project_view','super_admin'],
              },
              {
                icon: 'icon iconfont icon-jishitongxun',
                index: '/system/planning',
                title: '规划信息',
                perm:['system_project_view','super_admin'],
              },
              {
                icon: 'icon iconfont icon-jishitongxun',
                index: '/system/planProject',
                title: '计划信息',
                perm:['system_project_view','super_admin'],
              },
              {
                icon: 'icon iconfont icon-jishitongxun',
                index: '/system/financial',
                title: '财务信息',
                perm:['system_project_view','super_admin'],
              },
              {
                icon: 'icon iconfont icon-jishitongxun',
                index: '/system/construction',
                title: '建设信息',
                perm:['system_project_view','super_admin'],
              },
              {
                icon: 'icon iconfont icon-jishitongxun',
                index: '/system/project',
                title: '项目模块',
                perm:['system_project_view','super_admin'],
              }
            ]
          },

          {
            icon: 'icon iconfont icon-shipinjiankong',
            index: '/system/video',
            title: '视频监控',
            perm:['system_video_view','super_admin']
          },
          {
            icon: 'icon iconfont icon-wurenjiquanjing',
            index: '/system/uav',
            title: '无人机数据',
            perm:['system_plane_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-zaixianjiance',
            index: '/system/online',
            title: '监测信息',
            perm:['system_regimen_view','super_admin'],
            subs: [
              {
                icon: 'icon iconfont icon-zaixianjiance',
                index: '/system/online',
                title: '水情信息',
                perm:['system_regimen_view','super_admin'],
              },
              {
                icon: 'icon iconfont icon-jichuxinxi',
                index: '/info/waterQuality',
                title: '水质信息',
                perm:['system_regimen_view','super_admin'],
              }
            ]
          },
          // {
          //     icon: 'icon iconfont icon-yingjiyuan',
          //     index: '/system/emergency',
          //     title: '应急管理',
          //     perm:['system_emergency_view','super_admin'],
          // },
          // {
          //     icon: 'icon iconfont icon-yingjiyuan',
          //     index: '/system/waterSystem',
          //     title: '水资源系统',
          //     perm:['system_water_resources_view','super_admin'],
          // },
          /*{
              icon: 'icon iconfont icon-yingjiyuan',
              index: '/system/shengduijie',
              title: '省平台对接',
              perm:['system_water_resources_view','super_admin'],
          },*/
          {
            icon: 'icon iconfont icon-yingjiyuan',
            index: '/news/hzzMetNews',
            title: '新闻管理',
            perm:['new_management','super_admin'],
            subs: [
              {
                index: '/news/hzzMetColumn',
                title: '栏目信息管理',
                perm:['column_management','super_admin'],
              },
              {
                index: '/news/hzzMetNews',
                title: '公告信息管理',
                perm:['announcement _management','super_admin'],
              },
              {
                index: '/news/hzzMetImg',
                title: '河湖信息管理',
                perm:['lake_management','super_admin'],
              },
            ]
          },
          {
            icon: 'icon iconfont icon-yingjiyuan',
            index: '/system/yuliujieru',
            title: '预留接入模块',
            perm:['system_water_resources_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-yingjiyuan',
            index: '/system/message',
            title: '短信群发',
            perm:['system_water_resources_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-yingjiyuan',
            index: '/system/dataImport',
            title: '数据实时导入',
            perm:['system_dataImport','super_admin'],
          },
          {
            icon: 'icon iconfont icon-yingjiyuan',
            index: '/system/webadmin',
            title: '门户网站后台',
            perm:['system_webAdmin','super_admin'],
          }

        ],
        '6': [
          {
            icon: 'icon iconfont icon-yonghuguanli',
            index: '/manage/user',
            title: '用户管理',
            perm:['user_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-jiaoseguanli',
            index: '/manage/role',
            title: '角色管理',
            perm:['role_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-quanxianguanli',
            index: '/manage/permiss',
            title: '权限管理',
            perm:['permission_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-rizhiguanli',
            index: '/manage/log',
            title: '日志管理',
            perm:['log_views','super_admin'],
          }
        ],
        '7': [
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/anylize/complaint',
            title: '数据统计',
            perm:['data_statistics_view','super_admin'],
            subs: [
              {
                icon: 'el-icon-location',
                index: '/anylize/length',
                title: '河长统计',
                perm:['data_river_chief_view','super_admin'],
              },
              {
                icon: 'el-icon-location',
                index: '/anylize/cruise',
                title: '巡河统计',
                perm:['data_cruise_view','super_admin'],
              },
              {
                icon: 'el-icon-location',
                index: '/anylize/complaint',
                title: '公众投诉统计',
                perm:['data_complaints_view','super_admin'],
              },

              /*{
                  icon: 'el-icon-location',
                  index: '/anylize/pollution',
                  title: '巡河问题统计',
                  perm:['data_problem_view','super_admin'],
              },*/
              {
                icon: 'el-icon-location',
                index: '/anylize/blackodor',
                title: '黑臭水体统计',
                perm:['data_black_water_view','super_admin'],
              },

            ]},
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/informationReport',
            title: '数据上报',
            perm:['data_report_view','super_admin'],
            subs:[
              {
                icon: 'el-icon-location',
                index: '/info/informationReport',
                title: '信息填报',
                perm:['data_provided','super_admin'],
              },
            ],
          }],
        '8': [
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/riverChief',
            title: '人员名录',
            perm:['personnel_list','super_admin'],
            subs: [
              {
                index: '/info/riverChief',
                title: '河长信息',
                perm:['river_chief_view','super_admin']
              },
              {
                index: '/info/riverPolice',
                title: '河道警长信息',
                perm:['river_sheriff_view','super_admin'],
              },
              {
                index: '/info/obligations',
                title: '义务河长信息',
                perm:['river_duty_view','super_admin'],
              },
              {
                index: '/info/riverXiaoqing',
                title: '河小青信息',
                perm:['river_small_view','super_admin'],
              },
              {
                index: '/info/riverQiye',
                title: '企业河长信息',
                perm:['river_company_view','super_admin'],
              },
              {
                index: '/info/riverZhiyuanzhe',
                title: '志愿者信息',
                perm:['river_company_view','super_admin'],
              },
              {
                index: '/info/keeper',
                title: '河管员信息',
                perm:['river_manager_view','super_admin'],
              },
              {
                index: '/info/contactDepartment',
                title: '成员单位',
                perm:['river_unit_view','super_admin'],
              }
            ]
          },
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/basis1',
            title: '河湖档案',
            perm:['river_archives_view','super_admin'],
            subs: [
              {
                index: '/info/basis1',
                title: '河流信息',
                perm:['river_info_view','super_admin'],
              },
              {
                index: '/info/basis2',
                title: '河段信息',
                perm:['river_segement_view','super_admin'],
              },
              {
                index: '/info/riverspolicy',
                title: '一河一策',
                perm:['river_policy_view','super_admin'],
              },
              {
                index: '/info/basis9',
                title: '一河一档',
                perm:['river_file_view','super_admin'],
              },
              /*
              {
                  index: '/info/basis14',
                  title: '黑臭水'
              },
              */
              //新增加
              {
                index: '/info/basis10',
                title: '公示牌',
                perm:['river_billboard_view','super_admin'],
              },
              // {
              //     index: '/info/coastlinePlan',
              //     title: '岸线规划',
              //     perm:['river_coastline_view','super_admin'],
              // },

            ]
          },
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/basis3',
            title: '工程信息',
            perm:['engineering_info_view','super_admin'],
            subs: [
              {
                index: '/info/basis3',
                title: '水库工程',
                perm:['reservoir_info_view','super_admin'],
              },
              {
                index: '/info/dikefang1',
                title: '堤防工程',
                perm:['levee_info_view','super_admin'],
              },
              {
                index: '/info/basis15',
                title: '闸坝工程',
                perm:['sluice_info_view','super_admin'],
              },
              {
                index: '/info/pumping',
                title: '泵站工程',
                perm:['pump_info_view','super_admin'],
              },
              /*
              {
                  index: 'k7',
                  title: '水电站工程'
              },

             {
                 index: '/info/basis17',
                 title: '饮水水源地工程'
             },
             {
                 index: '/info/waterintake',
                 title: '取水户工程'
             },
             */
              {
                index: '/info/basis16',
                title: '涉河项目',
                perm:['relation_project_view','super_admin'],
              },
              /*
              {
                  index: '/info/waterZone',
                  title: '水功能区'
              }
              */
            ]
          },
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/emergencyplan',
            title: '应急管理',
            perm:['emergency_management_view','super_admin'],
            subs: [
              {
                index: '/info/emergencyplan',
                title: '应急预案',
                perm:['emergency_plan_view','super_admin'],
              },
              {
                index: '/info/emergencyduty',
                title: '应急值守',
                perm:['emergency_duty_view','super_admin'],
              }

            ]
          },
          {
            icon: 'icon iconfont icon-zhuanti',
            index: '/info/project1',
            title: '专题信息',
            perm:['project_info_view','super_admin'],
            subs: [
              {
                index: '/specialSubject/waterRsources',
                title: '水资源保护',
                perm:['water_resources_view','super_admin'],
              },
              {
                index: '/specialSubject/shoreline',
                title: '水域岸线保护',
                perm:['water_shoreline_view','super_admin'],
              },
              {
                index: '/specialSubject/environmental',
                title: '水环境治理',
                perm:['water_environment_view','super_admin'],
              },
              {
                index: '/specialSubject/pollution',
                title: '水污染防治',
                perm:['water_pollution_view','super_admin'],
              },
              {
                index: '/specialSubject/conservation',
                title: '水生态修复',
                perm:['water_ecological_view','super_admin'],
              },
              {
                index: '/specialSubject/supervision',
                title: '执法监督',
                perm:['water_law_view','super_admin'],
              },
              // {
              //     index: '/specialSubject/floodcontrol',
              //     title: '防汛抗旱体系',
              //     perm:['flood_control_view','super_admin'],
              // },
            ]
          },

          {
            icon: 'icon iconfont icon-zhuanti',
            index: '/info/selfEvaluation',
            title: '考核评价',
            perm:['project_info_view','super_admin'],
            subs: [
              {
                index: '/info/assessmentScore',
                title: '考核分值表',
                perm:['water_resources_view','super_admin'],
              },
              {
                index: '/info/assessmentScale',
                title: '考核评分表',
                perm:['water_resources_view','super_admin'],
              },
              {
                index: '/info/selfEvaluation',
                title: '河长考核',
                perm:['water_resources_view','super_admin'],
              },
              // {
              //     index: '/info/hezhangdafen',
              //     title: '河长打分',
              //     perm:['water_resources_view','super_admin'],
              // },
              {
                index: '/info/hezhangpaiming',
                title: '河长排名',
                perm:['water_resources_view','super_admin'],
              },
            ]
          },
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/advice',
            title: '建言献策',
            perm:['offer_advice_view','super_admin']
          },
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/daily6',
            title: '美景分享',
            perm:['beauty_share_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/SpecialOperation',
            title: '专项行动',
            perm:['specific_project_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/experience',
            title: '河长论坛',
            perm:['experience_view','super_admin'],
          },
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/learningWorld',
            title: '学习园地',
            perm:['learning_garden_view','super_admin'],
          },
          // {
          //     icon: 'icon iconfont icon-jichuxinxi',
          //     index: '/info/tongzhigonggao',
          //     title: '通知公告',
          //     perm:['experience_view','super_admin'],
          // },
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/comprehensiveRegulation',
            title: '综合整治',
            perm:['comprehensive_improvement_view','super_admin'],
          },



          // {
          //     icon: 'icon iconfont icon-jichuxinxi',
          //     index: '/info/informationReport',
          //     title: '信息填报',
          //     perm:['experience_view','super_admin'],
          // },
        ],
        "9":[
          {
            icon: 'icon iconfont icon-jichuxinxi',
            index: '/info/basis1',
            title: '建设项目管理',
            subs: [

            ]
          },
        ]
      },
        items:''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    sideBarOnRoutes(){
      if(this.$route.meta && this.$route.meta.belongs){ this.items = this.navlist[this.$route.meta.belongs]; }
      return this.$route.path;
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
