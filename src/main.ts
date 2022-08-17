import { createApp } from 'vue';
import App from './App.vue';
import setupAtnd from '@/lib/ant-design-vue';
// import '@/styles/common/common.less';
// import 'ant-design-vue/dist/antd.less';
// import 'ant-design-vue/dist/antd.variable.less';
import router from '@/router';
import { createPinia } from 'pinia';
import axios from '@/utils/http';
import CIcon from '@/components/CIcon/index.vue';

import './permission';
import initCore from './core';
// devtools.enabled = true;
// import '@/styles/common/common.less';

const app = createApp(App);
app.use(router);
app.component('CIcon', CIcon);
app.use(createPinia());
setupAtnd(app);
initCore(app);
app.config.globalProperties.$axios = axios;
app.mount('#app');
