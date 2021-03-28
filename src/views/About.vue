<template>
  <div class="about">
    <vxe-table
        border
        resizable
        show-footer
        ref="xTable"
        height="800"
        align="center"
        :column-config="{width:90}"
        :footer-method="footerMethod"
        :data="tableData"
    >
          <!--   最顶层栏   -->
      <vxe-colgroup title="近一月数据分析">
        <vxe-column field="a" title="序号"></vxe-column>
        <vxe-column field="b" title="日期"></vxe-column>
        <vxe-column field="c" title="次数"></vxe-column>
        <vxe-colgroup title="能量统计">
          <vxe-column field="d" title="大能量"></vxe-column>
          <vxe-column field="e" title="小能量"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup title="破坏类型">
          <vxe-column field="f" title="剪切"></vxe-column>
          <vxe-column field="g" title="张拉"></vxe-column>
          <vxe-column field="h" title="混合"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup title="严重程度">
          <vxe-column field="i" title="严重"></vxe-column>
          <vxe-column field="j" title="一般"></vxe-column>
          <vxe-column field="k" title="轻微"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup title="台站工况">
          <vxe-column field="l" title="在线"></vxe-column>
          <vxe-column field="m" title="离线"></vxe-column>
          <vxe-column field="n" title="网速"></vxe-column>
          <vxe-column field="o" title="存储"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>

    </vxe-table>
  </div>
</template>

<script>
export default {
  name:"Table",
  data(){
    return {
      tableData:[],
    }
  },

  created() {
    this.loadList();
  },

  methods:{
    loadList(){
      const list=[];
      for (let index=0;index<15;index++){
        list.push({
          a:'a'+index,
          b:'b'+index,
          c:'c'+index,
          d:'d'+index,
          e:'e'+index,
          f:'f'+index,
          g:'g'+index,
          h:'h'+index,
          i:'i'+index,
          j:'j'+index,
          k:'k'+index,
          l:'l'+index,
          m:'m'+index,
          n:'n'+index,
          o:'o'+index,
        })
      }
      this.tableData = list;
    },

    footerMethod ({  }) {
      return [
      ]
    }
  }

}

</script>

