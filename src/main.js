import i18n from './locales'
import Vue from 'vue'
import App from './App.vue'
import './common.scss'
Vue.config.productionTip = false


// console.log(i18n);

const app = new Vue({
  components: {
    App
  },
  i18n,
  render: h => h(App),
});

window.mountApp = () => {
  app.$mount('#app');
};

if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    window.mountApp();
  }
} else {
  window.mountApp();
}
