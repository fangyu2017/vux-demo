<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账号列表</span>
        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
      </div>
      <div class="text item">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="账号ID" width="180"></el-table-column>
          <el-table-column prop="realName" label="真实姓名" width="180"></el-table-column>
          <el-table-column prop="userName" label="账号名"></el-table-column>
          <el-table-column prop="date" label="创建日期"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "2123123123",
          realName: "王小虎",
          userName: "xiaohu",
          date: "2016-05-03"
        },
        {
          id: "324123123",
          realName: "王小豹",
          userName: "xiaobao",
          date: "2016-05-24"
        },
        {
          id: "56234234123",
          realName: "王小狗",
          userName: "xiaogou",
          date: "2016-05-03"
        },
        {
          id: "2123123123",
          realName: "王二哈",
          userName: "erha",
          date: "2016-05-03"
        }
      ]
    };
  },
  methods: {
   handleClick (e) {
     console.log(e)
   }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
