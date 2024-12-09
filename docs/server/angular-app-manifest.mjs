
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/DP-Angular-DP/get-monitors",
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
['index.csr.html', {size: 16925, hash: '63e0e32f3098453bb4a01f6c208c21fa3a9d682e4f89f68d3104aa47a5e5e380', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7969, hash: '8921b8032f783a40805ea94bcb311df7236f05f61a2fa1d0e76c2e7ebf9494cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['devices-add/index.html', {size: 37612, hash: 'a41017e7a16e9230d7e0bd3d75179229ae05221f61035d2b17bf4fc06a6cfd4b', text: () => import('./assets-chunks/devices-add_index_html.mjs').then(m => m.default)}], 
['devices-edit/index.html', {size: 37184, hash: '8d4b1f0b2e2e80ed2e5fae6b4bedcbeaadb505eacac863020a4f7d9799fdf5e4', text: () => import('./assets-chunks/devices-edit_index_html.mjs').then(m => m.default)}], 
['get-projectors/index.html', {size: 42574, hash: '53494637632c91107c018727120402ebfce647a7a59c51ca627feaf4208d1dfd', text: () => import('./assets-chunks/get-projectors_index_html.mjs').then(m => m.default)}], 
['devices-management/index.html', {size: 31741, hash: '91a56ff7000196ddf982c01a66c7c31c9de7aa37771c4b67d4938e5ca64ac6b1', text: () => import('./assets-chunks/devices-management_index_html.mjs').then(m => m.default)}], 
['devices-comp/index.html', {size: 29103, hash: '90cb8e47928b93306292246c6326c724dddbce4c8072780ab3ff7da5a9f1e3d5', text: () => import('./assets-chunks/devices-comp_index_html.mjs').then(m => m.default)}], 
['get-televisions/index.html', {size: 45087, hash: 'ba529515ff44d4366a4b3dfb2f707bacd6e056adaed6b4b5f065b64eee372a9d', text: () => import('./assets-chunks/get-televisions_index_html.mjs').then(m => m.default)}], 
['number-of-devices-tech-inf/index.html', {size: 32131, hash: '2550208a2256ed4a79fe0e1d16718b5837e8d5671475ea677ee635e947d0ae3c', text: () => import('./assets-chunks/number-of-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['get-monitors/index.html', {size: 65000, hash: '6d1a0d420260b5d8e2f08db21328890a47828beb44bbe387383b7cea30277b47', text: () => import('./assets-chunks/get-monitors_index_html.mjs').then(m => m.default)}], 
['number-of-devices/index.html', {size: 36277, hash: 'e6ee4b92d29171e17b3b57e013214f7e8c6fdbbc2c0f5fa51a25447c5d829251', text: () => import('./assets-chunks/number-of-devices_index_html.mjs').then(m => m.default)}], 
['sales-logs/index.html', {size: 32848, hash: '910acd954112251663551297a807247962c76e74a9c7fb44921394340afbf7b1', text: () => import('./assets-chunks/sales-logs_index_html.mjs').then(m => m.default)}], 
['sales-revenue/index.html', {size: 32528, hash: '2fb99d2b2adc432045a35e1ba3ae703b25e09764e6dfa8228e01d51d9dbb0619', text: () => import('./assets-chunks/sales-revenue_index_html.mjs').then(m => m.default)}], 
['styles-QZQZD5UG.css', {size: 209135, hash: 'vMeooU3gqpk', text: () => import('./assets-chunks/styles-QZQZD5UG_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
