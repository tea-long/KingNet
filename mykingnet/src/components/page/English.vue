<template>
  <el-table
    :data="tableData5"
    style="width: 100%"
     border>
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品描述：">
            <span>
              {{ props.row.desc }}
              </span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
      label="类型"
      prop="type"
      sortable>
    </el-table-column>
    <el-table-column
      label="关键词"
      prop="key"
      sortable>
    </el-table-column>
    <el-table-column
      label="关键词"
      prop="key"
      sortable>
    </el-table-column>
    <el-table-column
      label="点击跳转"
     >
       <template slot-scope="props">
        <el-button
          size="mini">
          <a :href="props.row.url" target="_blank">{{props.row.name}}</a>
        </el-button>
      </template>
    </el-table-column>
  
  </el-table>
</template>

<style scoped>
.el-tabs__content {
    overflow: hidden;
    position: relative;
    box-shadow: -2px -2px 20px 1px black;
}
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin: 0;
    padding: 0;
    width: 90%;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData5: [
          {
          desc: '每个表格应题可省略，表头应重复写，并在右上方写“续表××”',
          type: 'js',
          key: 'chajian',
          name: "你你你你",
          url: 'http://yangjianstudy.com',
        },
         ]
      }
    },
  
  }
</script>