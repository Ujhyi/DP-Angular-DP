
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
['index.csr.html', {size: 16924, hash: '28d7d3b48a53bc2044c6f6c0a2ae103781adebe0ac50fc436a8199b12c78a560', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7968, hash: '28f8181d39d4bfb121b2b4b9bc602fce5a63e5ed01f7f649018e15f727f98be6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['P/devices-add/index.html', {size: 37611, hash: '4f2fd5edaf0946b5285dbaa45393dd376cfe0b6c5ed6d590af2354039149fd2f', text: () => import('./assets-chunks/P_devices-add_index_html.mjs').then(m => m.default)}], 
['P/devices-edit/index.html', {size: 37183, hash: 'cd55cc53b912b4c522c842f8d3aa6ff3428365b0509da61638c0224dfd469020', text: () => import('./assets-chunks/P_devices-edit_index_html.mjs').then(m => m.default)}], 
['P/devices-management/index.html', {size: 31740, hash: '6ff589771ed6d84aa50a3fcd74e2ac79ea32f6345dac827b48ea6923dad7993d', text: () => import('./assets-chunks/P_devices-management_index_html.mjs').then(m => m.default)}], 
['P/get-projectors/index.html', {size: 42573, hash: 'ba0a1e2ddd18b8159ba9bf3f11f06249d457f58450bdbdb66b2cc41cd15fb843', text: () => import('./assets-chunks/P_get-projectors_index_html.mjs').then(m => m.default)}], 
['P/get-televisions/index.html', {size: 45086, hash: '3f9aef887832b532fd760f6480d4fa01e7d3fbc9d27d7d774f2ff973f6217ea0', text: () => import('./assets-chunks/P_get-televisions_index_html.mjs').then(m => m.default)}], 
['P/devices-comp/index.html', {size: 29102, hash: 'dd0735b11bd26af4f6f637fae0099f4d9eadc0077d160758b3d6b94ccea17217', text: () => import('./assets-chunks/P_devices-comp_index_html.mjs').then(m => m.default)}], 
['P/number-of-devices-tech-inf/index.html', {size: 32130, hash: '1a0b2366b5b473b08090f3c297e9d56bb996247eac1c6a5a79e36044747c76b0', text: () => import('./assets-chunks/P_number-of-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['P/get-monitors/index.html', {size: 64999, hash: '316a2c9fe83a7b4c5d969a86a2dc2d6237d3a21e60b35491c0fc18b9f29e236c', text: () => import('./assets-chunks/P_get-monitors_index_html.mjs').then(m => m.default)}], 
['P/number-of-devices/index.html', {size: 36276, hash: '633a6e85333600769052354499e923436de7ce7ed1ea880770322d820adb9b3d', text: () => import('./assets-chunks/P_number-of-devices_index_html.mjs').then(m => m.default)}], 
['P/sales-logs/index.html', {size: 32847, hash: '9bd15113df246e0c29c0f6d67b1043b613231541499797b55ec6ed903050c80b', text: () => import('./assets-chunks/P_sales-logs_index_html.mjs').then(m => m.default)}], 
['P/sales-revenue/index.html', {size: 32527, hash: '02a0f683ef406d05bdcac1aaf7020677307ab3ebf2a56fd8005698de0683de9b', text: () => import('./assets-chunks/P_sales-revenue_index_html.mjs').then(m => m.default)}], 
['styles-QZQZD5UG.css', {size: 209135, hash: 'vMeooU3gqpk', text: () => import('./assets-chunks/styles-QZQZD5UG_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
