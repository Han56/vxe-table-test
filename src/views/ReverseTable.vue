<template>
<div class="reverseTable">
  <vxe-grid
      border
      highlight-hover-row
      class="reverse-table"
      :show-header="false"
      :columns="tableColumn"
      :data="tableData">
  </vxe-grid>

</div>
</template>

<script>
export default {
name: "ReverseTable",
  data(){
    return {
    tableColumn: [],
    tableData: []
    }
  },
  created() {
    const myColumns = [
      { field: 'name', title: 'Name' },
      { field: 'role', title: 'Role' },
      { field: 'sex', title: 'Sex' },
      { field: 'age', title: 'Age' },
      { field: 'address', title: 'Address' }
    ]
    const myData = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women ', age: 23, address: 'Shenzhen' },
      { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women ', age: 21, address: 'Shenzhen' },
      { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man ', age: 29, address: 'Shenzhen' },
      { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man ', age: 35, address: 'Shenzhen' }
    ]
    this.reverseTable(myColumns, myData)
  },
  methods:{
    // 反转函数
    reverseTable (columns, list) {
      const buildData = columns.map(column => {
        const item = { col0: column.title }
        list.forEach((row, index) => {
          item[`col${index + 1}`] = row[column.field]
        })
        return item
      })
      const buildColumns = [{
        field: 'col0',
        fixed: 'left',
        width: 80
      }]
      list.forEach((item, index) => {
        buildColumns.push({
          field: `col${index + 1}`,
          minWidth: 120
        })
      })
      this.tableData = buildData
      this.tableColumn = buildColumns
    }
  }
}
</script>

<style scoped>
.reverse-table .vxe-body--row .vxe-body--column:first-child{
  background-color: #f8f8f9;
}
</style>