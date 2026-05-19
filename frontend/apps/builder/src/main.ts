import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import { createApp } from 'vue';

import './styles.css';
import App from './App.vue';
import { echarts } from './plugins/echarts';
import { router } from './router';
import { pinia } from './stores';

const app = createApp(App);

app.provide('echarts', echarts);
app.use(pinia);
app.use(router);
app.use(ArcoVue);
app.mount('#app');
