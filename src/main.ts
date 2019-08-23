import Vue from 'vue';

import 'babel-polyfill';
import '@/plugins/registerServiceWorker';

import router from '@/plugins/router';
import store from '@/plugins/store';
import vuetify from '@/plugins/vuetify';

import App from '@/app/app.component';

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
