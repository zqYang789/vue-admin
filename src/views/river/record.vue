<template>
  <div style="height: calc(100vh - 75px);margin: 0 20px;">
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
          <el-button type="primary" @click="dialogVisible = true">查看</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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

    <el-dialog
      title="查看"
      :visible.sync="dialogVisible"
      width="80%"
      >
      <div class="dialog-body">
        <table border="1px solid #eee" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td class="odds bg-extra-light-gray" width="20%" align="right">河段名称：</td>
            <td class="evens white" width="30%">马颊河德州市段</td>
            <td class="odds bg-extra-light-gray" width="20%" align="right">行政区划：</td>
            <td class="evens white" width="30%">德州市</td>
          </tr>
          <tr>
            <td class="bg-extra-light-gray" align="right">巡河人：</td>
            <td class="white">董绍辉</td>
            <td class="bg-extra-light-gray" align="right">负责河长：</td>
            <td class="white">董绍辉</td>
          </tr>
          <tr>
            <td class="bg-extra-light-gray" align="right">巡河开始时间：</td>
            <td class="white">2018-12-13 16:12:39</td>
            <td class="bg-extra-light-gray" align="right">巡河结束时间：</td>
            <td class="white">2018-12-13 16:44:57</td>
          </tr>
          <tr>
            <td class="bg-extra-light-gray" align="right">巡河时长：</td>
            <td class="white">17分钟</td>
            <td class="bg-extra-light-gray" align="right">里程：</td>
            <td class="white">8209.2米</td>
          </tr>
          <tr>
            <td class="bg-extra-light-gray" align="right">天气：</td>
            <td class="white">晴</td>
            <td class="bg-extra-light-gray" align="right">温度：</td>
            <td class="white">高温 3℃</td>
          </tr>
          <tr>
            <td class="odd-l bg-extra-light-gray" width="20%" align="right">发现问题数量：</td>
            <td class="even-r white" width="80%" colspan="3">0 个</td>
          </tr>
          <tr>
            <td class="odd-l bg-extra-light-gray" width="20%" align="right">河段名称：</td>
            <td class="even-r white" width="80%" colspan="3">
              <div class="map-image"><img src="" alt=""></div>
            </td>
          </tr>
        </table>
        <div class="el-dialog__footer">
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">关 闭</el-button>
        </span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        dialogFormVisible: false,
        tableData: [],
        listLoading:true,
        pageNum:1,
        pageSize:10,
        totalRow:0,
        isShowSelect: false,
        selected: '行政区划',
        optList: ['行政区划', '行政区划', '行政区划', '行政区划'],
        dialogVisible: false,
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
            _self.tableData = res.data.list;
            _self.totalRow = res.data.totalRow;
          }
        }).catch(function (error){
          _self.listLoading = false;
        });

      },
    },
    mounted(){
      this.getTableData();
    }
  }

</script>

<style scoped>
  .bg-extra-light-gray{
    background-color: rgb(239, 242, 247)
  }
  .white{
    background: white;
  }
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

  .dialog-body{
    height: 460px;
    width: 100%;
    max-height: 65vh;
    overflow-y: auto;
  }
  .dialog-body table{

  }
  .dialog-body table tr{
    width: 100%;
  }
  .dialog-body table td{
    padding: 15px 10px;
  }
  .dialog-body table .odds{
    width: 20% !important;
  }
  .dialog-body table .evens{
    width: 30% !important;
  }
  .dialog-body table .map-image{
    height:300px;
    background-image: url(~myImg/map.png);
    background-size: 900px 300px;
    background-position: 0 0;
    background-repeat: no-repeat;
  }
  .el-dialog__footer{
    text-align: center;
  }
</style>

