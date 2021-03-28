import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VXETable from "vxe-table";
import 'vxe-table/lib/style.css';
import 'mint-ui/lib/style.css';
import 'xe-utils'
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.use(VXETable)
Vue.config.productionTip = false
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
