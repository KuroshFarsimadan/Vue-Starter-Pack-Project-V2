/* import Vue from 'vue';
import App from './App.vue';
import 'vue-tel-input/dist/vue-tel-input.css';
import VueTelInput from 'vue-tel-input';

Vue.use(VueTelInput);
Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({

  render: h => h(App),
}).$mount('#app') */

import App from './App.vue';
import State1 from "./components/State1.vue";
import State2 from "./components/State2.vue";
import State3 from "./components/State3.vue";
import State4 from "./components/State4.vue";
import Home from "./components/Home.vue";
import Test from "./components/Test.vue";
import 'vue-tel-input/dist/vue-tel-input.css';
import VueTelInput from 'vue-tel-input';

export const bus = new Vue();

Vue.use(VueTelInput);

const router = new VueRouter({
  routes: [
    {
      path: '/', component: App,
      children: [
        {
          path: 'home', component: Home, redirect: 'home/State1',
          children: [
            { path: 'State1', component: State1 },
            { path: 'State2', component: State2 },
            { path: 'State3', component: State3 },
            { path: 'State4', component: State4 },
          ]
        },
        {
          path: 'test', component: Test
        }
      ]
    }
  ]
});

new Vue({
  router
}).$mount('#app');