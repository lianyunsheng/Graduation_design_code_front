import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import i18n from './locale';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueBus from 'vue-bus';
import animated from 'animate.css';

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(VueAxios, axios);
Vue.use(VueBus);
Vue.use(animated);

new Vue({
  el:'#app',
  router,
  store,
  i18n,
  render: h => h(App)
});
