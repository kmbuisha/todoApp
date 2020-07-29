import Vue from 'vue'
import App from './App.vue'
import uuid from 'vue-uuid'
import axios from 'axios'
import VueAxios from 'vue-axios' 

Vue.use(VueAxios, axios);
Vue.use(uuid);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
