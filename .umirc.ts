import { defineConfig } from 'umi';

export default defineConfig({
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
  },
  lessLoader: { javascriptEnabled: true },
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    navTheme: 'light',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
