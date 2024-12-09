
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
['index.csr.html', {size: 16925, hash: 'a660ef4d0f6f76641fe6046012ce4cb77355ac0d91eeb937110ff75856ef9e83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7969, hash: 'f6bd7181263b4fde15ba8dcba656cf407231c7cc2679df60d111c92351dc156e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['devices-add/index.html', {size: 38066, hash: '13ce42ac67e969c0a3da2e462af8fb7979ea1437b950387933ea2b9610e2243c', text: () => import('./assets-chunks/devices-add_index_html.mjs').then(m => m.default)}], 
['devices-edit/index.html', {size: 37638, hash: 'ca3cb210524987175c1279d33c2550ac38628424fe8ee2fefc2b8dc4509f21af', text: () => import('./assets-chunks/devices-edit_index_html.mjs').then(m => m.default)}], 
['devices-management/index.html', {size: 32195, hash: 'f8aa2aabc00ac186276624c63ac64951e71dca11c79827dc092bd059630e6d5d', text: () => import('./assets-chunks/devices-management_index_html.mjs').then(m => m.default)}], 
['devices-comp/index.html', {size: 29557, hash: 'd1041deaef08bd605e9b738258aebfea8cdbd443e1fec742a14a0e2b22981ab2', text: () => import('./assets-chunks/devices-comp_index_html.mjs').then(m => m.default)}], 
['get-televisions/index.html', {size: 26812, hash: '3b300f6fb336cbd72766a6d828cbbc628f190902d88bee544aad2a87b0962592', text: () => import('./assets-chunks/get-televisions_index_html.mjs').then(m => m.default)}], 
['get-monitors/index.html', {size: 26814, hash: 'fe0b5e03f342139ba5af152a14ec9a54f04b0eb642645222332695dae23548e1', text: () => import('./assets-chunks/get-monitors_index_html.mjs').then(m => m.default)}], 
['get-projectors/index.html', {size: 26822, hash: '0243e1a34cb6b95d656013cf149c3ce72eac73dd1ee05ab7d543623d1dcc7cc7', text: () => import('./assets-chunks/get-projectors_index_html.mjs').then(m => m.default)}], 
['number-of-devices-tech-inf/index.html', {size: 32585, hash: '1c09b23e830eb3e6f540cb80a937b84b72732e64cf28ff49a8b8f5513cb62d61', text: () => import('./assets-chunks/number-of-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['number-of-devices/index.html', {size: 35236, hash: 'b1b59dc257a793ad1ed9e8765c3fff1602a068d2eb8071b12d44c80795aefc19', text: () => import('./assets-chunks/number-of-devices_index_html.mjs').then(m => m.default)}], 
['sales-logs/index.html', {size: 30629, hash: '68ea06b71edfa335c72021141f2272b620ee066110c344d404f6abb9542b439a', text: () => import('./assets-chunks/sales-logs_index_html.mjs').then(m => m.default)}], 
['sales-revenue/index.html', {size: 31993, hash: 'c5537aa5e94ae0896085c7acec3608fcaad3e436860745699b7e2ea372d321b4', text: () => import('./assets-chunks/sales-revenue_index_html.mjs').then(m => m.default)}], 
['styles-C72H2TUB.css', {size: 209863, hash: 'fN6k40EdRXg', text: () => import('./assets-chunks/styles-C72H2TUB_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
