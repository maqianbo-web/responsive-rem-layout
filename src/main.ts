import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入rem动态计算font-size
import './utils/rem';
import './style/index.less';
import 'vant/lib/index.less';
import Vant from 'vant';

Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
