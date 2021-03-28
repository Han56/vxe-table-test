<template>

  <div>
    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">发生次数</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">能量监测</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">破坏类型</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container4'">严重程度</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container5'">台站工况</mt-button>
    </div>

    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>

        <mt-tab-container-item id="tab-container1">
          <!-- 发生次数vxe-table组件 -->
          <vxe-table
              border
              resizable
              show-footer
              ref="xTable"
              height="800"
              align="center"
              :column-config="{width:180}"
              :footer-method="footerMethod"
              :data="tableData">

            <vxe-colgroup title="发生次数统计">
              <vxe-column field="a" title="日期"></vxe-column>
              <vxe-column field="b" title="发生次数"></vxe-column>
            </vxe-colgroup>
          </vxe-table>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container2">
          <!-- 能量检测vxe-table组件 -->
          <vxe-table
              border
              resizable
              show-footer
              ref="xTable"
              height="800"
              align="center"
              :column-config="{width:180}"
              :footer-method="footerMethod"
              :data="tableData">

            <vxe-colgroup title="能量监测">
              <vxe-column field="a" title="日期"></vxe-column>
              <vxe-column field="c" title="能量大小"></vxe-column>
            </vxe-colgroup>

          </vxe-table>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container3">
          <!-- 破坏类型vxe-table组件 -->
          <vxe-table
              border
              resizable
              show-footer
              ref="xTable"
              height="800"
              align="center"
              :column-config="{width:90}"
              :footer-method="footerMethod"
              :data="tableData">
            <vxe-colgroup title="破坏类型">
              <vxe-column field="a" title="日期"></vxe-column>
              <vxe-column field="d" title="剪切"></vxe-column>
              <vxe-column field="e" title="张拉"></vxe-column>
              <vxe-column field="f" title="混合"></vxe-column>
            </vxe-colgroup>
          </vxe-table>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container4">
          <!-- vxe-table严重程度组件 -->
          <vxe-table
              border
              resizable
              show-footer
              ref="xTable"
              height="800"
              align="center"
              :column-config="{width:90}"
              :footer-method="footerMethod"
              :data="tableData">
            <vxe-colgroup title="严重程度">
              <vxe-column field="a" title="日期"></vxe-column>
              <vxe-column field="g" title="严重"></vxe-column>
              <vxe-column field="h" title="一般"></vxe-column>
              <vxe-column field="i" title="轻微"></vxe-column>
            </vxe-colgroup>
          </vxe-table>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container5">
          <!-- 台站工况vxe-table组件 -->
          <vxe-table
              border
              resizable
              show-footer
              ref="xTable"
              height="800"
              align="center"
              :column-config="{width:73}"
              :footer-method="footerMethod"
              :data="tableData">
            <vxe-colgroup title="台站工况">
              <vxe-column field="a" title="日期"></vxe-column>
              <vxe-column field="j" title="盘符"></vxe-column>
<!--              <vxe-column field="k" title="位置"></vxe-column>-->
              <vxe-column field="l" title="状态"></vxe-column>
              <vxe-column field="m" title="存储"></vxe-column>
              <vxe-column field="n" title="网速"></vxe-column>
            </vxe-colgroup>
          </vxe-table>
        </mt-tab-container-item>

      </mt-tab-container>
    </div>
  </div>

</template>

<script>
export default {
name: "MtTabTest",
  data(){
     return{
       active:'tab-container1',
       tableData:[]
     }
  },
  created() {
      this.TabloadList();
  },
  methods:{
     TabloadList(){
       const list=[];
       for (let index=0;index<15;index++){
         list.push({
           a:'a'+index,
           b:index,
           c:'10'+'^'+index+'J',
           d:index,
           e:index,
           f:index,
           g:index,
           h:index,
           i:index,
           j:index,
           // k:index,
           l:index,
           m:index,
           n:index
         });
         this.tableData=list;
       }
     },
    footerMethod ({}) {
      return [
      ]
    }
  }
}
</script>

<style lang="css" scoped>


.nav {
  padding: 10px;
}

</style>