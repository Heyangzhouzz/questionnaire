import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'; // svg组件

// 注册到全局
Vue.component('icon', SvgIcon);

const requireAll = (requireContext:any) => requireContext.keys().map(requireContext);
const req:any = require.context('./svg', false, /\.svg$/);
requireAll(req);
