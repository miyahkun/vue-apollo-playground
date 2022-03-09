import Vue from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import { apolloClient } from '@/lib/apollo-client';
import VueCompositionAPI, { provide } from '@vue/composition-api';

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: (h) => h(App),
}).$mount('#app');
