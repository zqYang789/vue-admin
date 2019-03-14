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
      top="10vh"
      :visible.sync="dialogVisible"
      width="80%"
      >
      <div style="height:70vh">

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

  .pagination{
    height: 70px;
    padding: 10px 0;
    text-align: right;
  }


</style>

