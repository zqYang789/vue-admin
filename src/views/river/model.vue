<template>
  <div style="height: calc(100vh - 75px);margin: 0 20px;">
    <div class="handle-box">
      <el-select clearable filterable remote reserve-keyword placeholder="河流名称" :loading="loading" class="handle-input mr10">
        <el-option></el-option>
      </el-select>
      <el-input v-model="username" placeholder="巡河人" class="handle-input mr10 inputWidth"></el-input>
      <el-date-picker
        type="daterange"
        value-format="yyyy-MM-dd"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        class="inputTimeWidth">
      </el-date-picker>
      <el-row class="xiaLa">
        <el-col :span="24">
          <el-dropdown trigger="click" class="clicks">
            <span class="el-dropdown-link" style="color: #333333;display: block;width: 100%;height: 100%;line-height: 24px;text-align: center;">
              行政区划<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in optList" icon="el-icon-plus">{{ item }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <!--<select v-model="selected" style="font-size: 13px;color: #606266;padding: 6px 10px;border-radius: 4px;border: 1px solid #dcdfe6;">
        <option v-for="item in optList">{{ item }}</option>
      </select>-->

      <el-button type="primary">查询</el-button>
      <el-button>重置</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      center
      v-loading="listLoading"
      style="width: 100%">
      <el-table-column label="序号" width="50" align="center">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="username" align="center" label="用户名称" width="100"/>
      <el-table-column prop="phone" label="电话" width="160" align="center"></el-table-column>
      <el-table-column prop="responser" label="负责河长" align="center"></el-table-column>
      <el-table-column prop="startTime" label="巡河开始时间" width="200" align="center"></el-table-column>
      <el-table-column prop="endTime" label="巡河结束时间" width="200" align="center"></el-table-column>
      <el-table-column prop="after" label="历时（min）" width="140"  align="center"></el-table-column>
      <el-table-column prop="mileage" label="里程（m）" align="center"></el-table-column>
      <el-table-column prop="problem" label="问题数量" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button type="primary">查看</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div></div>
    <div class="pagination">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalRow">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        tableData: [],
        listLoading:true,
        pageNum:1,
        pageSize:10,
        totalRow:0,
        isShowSelect: false,
        selected: '行政区划',
        optList: ['行政区划', '行政区划', '行政区划', '行政区划']
      }
    },

    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
        this.getTableData(this.pageNum,this.pageSize);
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.getTableData(this.pageNum,this.pageSize);
        console.log(val);
      },
      getTableData(pageNum,pageSize){
        var _self = this;
        _self.listLoading=true;
        axios({
          method: 'post',
          url:'/cruise/getRecord',
          params: {
             pageNum:pageNum,
            pageSize:pageSize,
          },
          data:{

          }
        }).then((res) => {
          _self.listLoading = false;
          if(res.status == 200){
            console.info(res);
            _self.tableData = res.data.list;
            _self.totalRow = res.data.totalRow;
          }
        }).catch(function (error){
          _self.listLoading = false;
          console.log(error);
        });

      },

    },
    mounted(){
      this.getTableData();
    }
  }

</script>

<style scoped>
  .handle-box{
    padding: 10px 15px 0 15px;
    height: 70px;
  }
  .inputWidth{
    width: 150px;
  }
  .el-checkbox.is-bordered {
    padding: 11px 20px 9px 10px;
  }
  .pagination{
    height: 70px;
    padding: 10px 0;
    text-align: right;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #dcdfe6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .xiaLa{
    display: inline-block;
    width: 100px;
    height: 32px;
    padding-top: inherit;
  }
  .clicks{
    border: 1px solid #dcdfe6;
    padding: 3px 4px;
    width: 100px;
    height: 32px;
    border-radius: 4px;
  }
</style>

