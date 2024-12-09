
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
['get-projectors/index.html', {size: 42574, hash: '53494637632c91107c018727120402ebfce647a7a59c51ca627feaf4208d1dfd', text: () => import('./assets-chunks/get-projectors_index_html.mjs').then(m => m.default)}], 
['get-televisions/index.html', {size: 45087, hash: 'ba529515ff44d4366a4b3dfb2f707bacd6e056adaed6b4b5f065b64eee372a9d', text: () => import('./assets-chunks/get-televisions_index_html.mjs').then(m => m.default)}], 
['devices-edit/index.html', {size: 37184, hash: '1e2c1ce19c38617ce76b5dbd381a1bb663db30b78918b08b5660b4f780adf68b', text: () => import('./assets-chunks/devices-edit_index_html.mjs').then(m => m.default)}], 
['devices-add/index.html', {size: 37612, hash: 'a41017e7a16e9230d7e0bd3d75179229ae05221f61035d2b17bf4fc06a6cfd4b', text: () => import('./assets-chunks/devices-add_index_html.mjs').then(m => m.default)}], 
['get-monitors/index.html', {size: 65000, hash: '6d1a0d420260b5d8e2f08db21328890a47828beb44bbe387383b7cea30277b47', text: () => import('./assets-chunks/get-monitors_index_html.mjs').then(m => m.default)}], 
['devices-management/index.html', {size: 31741, hash: 'ea854b0cd7e30b47e2783bf2999fb80f583cd52b68eadb8340090d819743fe5a', text: () => import('./assets-chunks/devices-management_index_html.mjs').then(m => m.default)}], 
['devices-comp/index.html', {size: 29103, hash: '726f4c02642f3fa0ef12ce97ec4cade8218db8a48f8ff565974277162439ea31', text: () => import('./assets-chunks/devices-comp_index_html.mjs').then(m => m.default)}], 
['number-of-devices-tech-inf/index.html', {size: 32131, hash: '843665fe55297bc34553ad4ba3264cf25e1ae221e864cc9c61a2a193b88ba8ab', text: () => import('./assets-chunks/number-of-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['number-of-devices/index.html', {size: 36277, hash: 'f24083092ef3fb09e8767563278d45e5ec83db361a6bd08b7fcbedb129ffae69', text: () => import('./assets-chunks/number-of-devices_index_html.mjs').then(m => m.default)}], 
['sales-logs/index.html', {size: 32848, hash: '71e6488fd41b1ebbb3683698661c5a0c0be5dc838e39dc32d0d6c2dc4eebc6a7', text: () => import('./assets-chunks/sales-logs_index_html.mjs').then(m => m.default)}], 
['sales-revenue/index.html', {size: 32528, hash: '1d547d327be1870b7951195425de08142a03f0d16c9eedf5e6fbaef457be879f', text: () => import('./assets-chunks/sales-revenue_index_html.mjs').then(m => m.default)}], 
['styles-QZQZD5UG.css', {size: 209135, hash: 'vMeooU3gqpk', text: () => import('./assets-chunks/styles-QZQZD5UG_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
