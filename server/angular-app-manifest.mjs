
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/DP-Angular-DP/home",
    "route": "/DP-Angular-DP"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/get-monitors"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/get-projectors"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/get-televisions"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/devices-add"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/devices-edit"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/devices-management"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/devices-comp"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/home"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/number-of-devices"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/number-of-devices-tech-inf"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/sales-logs"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/sales-revenue"
  }
],
  assets: new Map([
['index.csr.html', {size: 16925, hash: '87c32a27c8048c2b819698fa6e863c3ac8e16f16b650081243c629c3a700f70e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7969, hash: 'cfb83417680300cf4b5b26fdd9941417d114ecd2ea54e2935db88cfae5b2c31b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['devices-add/index.html', {size: 38121, hash: 'abd37a89a8782236027a76e64fcbdd82927d71280a7c26a7536d4db89afb8d82', text: () => import('./assets-chunks/devices-add_index_html.mjs').then(m => m.default)}], 
['devices-edit/index.html', {size: 37693, hash: '3570657deca157463a023425c9082fbe7cea222bbbda3ec54027bb6fefea7037', text: () => import('./assets-chunks/devices-edit_index_html.mjs').then(m => m.default)}], 
['devices-management/index.html', {size: 32250, hash: '001da85b0dec2a566a6125c3850d16e810caadd9b5d288578f59989f05e60876', text: () => import('./assets-chunks/devices-management_index_html.mjs').then(m => m.default)}], 
['devices-comp/index.html', {size: 29612, hash: '60ffd4cc8178f219198e846c9212c394adc27d9ccc0095a59e67541d8ff04459', text: () => import('./assets-chunks/devices-comp_index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 32373, hash: 'e779bcfd3bb3fe1db114dc1a96a2f0f01dfd3ef4f8110a6c83b8c8505755c5bb', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['get-monitors/index.html', {size: 26869, hash: 'fbfb8b3b146af6f8352d244f0917efa4caa7ec5c3bbf3cc94215ee6fa55b4537', text: () => import('./assets-chunks/get-monitors_index_html.mjs').then(m => m.default)}], 
['get-projectors/index.html', {size: 26877, hash: '6f810bda9a2bbdd12b777ea47641edd0b62721cec8d45ab7ad7cda1202d1cc0f', text: () => import('./assets-chunks/get-projectors_index_html.mjs').then(m => m.default)}], 
['get-televisions/index.html', {size: 26867, hash: '5f78c08439b4d78b81cc5cd91096148fec9c9ab8cac4c86410003bd1744108ad', text: () => import('./assets-chunks/get-televisions_index_html.mjs').then(m => m.default)}], 
['number-of-devices-tech-inf/index.html', {size: 32640, hash: '656760e712de69b81c9c41137165dc4f354376488894b26442c3659f548ab07f', text: () => import('./assets-chunks/number-of-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['number-of-devices/index.html', {size: 35291, hash: 'f0a8c655f8020cb496ad9144ad3ac8131de5758711b7215558c760f2d1ada4e0', text: () => import('./assets-chunks/number-of-devices_index_html.mjs').then(m => m.default)}], 
['sales-revenue/index.html', {size: 32048, hash: '1fa31476b7f575012bc3630b9e2918aef6749663860ce97f124f7752425bfde3', text: () => import('./assets-chunks/sales-revenue_index_html.mjs').then(m => m.default)}], 
['sales-logs/index.html', {size: 30684, hash: '423181cc599f469a225a9eb0de94dfd9405594b37af1f9defc69e7463cac6afe', text: () => import('./assets-chunks/sales-logs_index_html.mjs').then(m => m.default)}], 
['styles-BC5HL5UE.css', {size: 209896, hash: 'C064tZG+Rck', text: () => import('./assets-chunks/styles-BC5HL5UE_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
