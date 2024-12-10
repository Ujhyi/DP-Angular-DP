
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
['index.csr.html', {size: 16925, hash: '6958476ce4f78b114b50ca93ecbd164baec9e326a4b0610e538b1f7e521bd936', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7969, hash: 'efa250cd7211ba47a115b5fd1d089143434d00eef0d0d53d5ad0f9a8fe4daa3e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['devices-add/index.html', {size: 38121, hash: '13ca926ec9cb1ca48da7ec09682fff8fde70c731594a368fe2e050e6ae6ad6cf', text: () => import('./assets-chunks/devices-add_index_html.mjs').then(m => m.default)}], 
['devices-edit/index.html', {size: 37693, hash: '0288c708878de699bab1072628768b2da9e4c0c5767cad911542f409e7270595', text: () => import('./assets-chunks/devices-edit_index_html.mjs').then(m => m.default)}], 
['devices-management/index.html', {size: 32250, hash: '6bb21abb579d12497893bb0eb080b37eb19e2a23abef3e3bdacec93ffffbc0ec', text: () => import('./assets-chunks/devices-management_index_html.mjs').then(m => m.default)}], 
['devices-comp/index.html', {size: 29612, hash: '2d869f153d68d6e5257498a0971121330759288e5e084e0cb5d3593561a5bc5a', text: () => import('./assets-chunks/devices-comp_index_html.mjs').then(m => m.default)}], 
['get-projectors/index.html', {size: 26877, hash: '6466dbbf52ad6483ff0cd1941ffaa6a7180f4a6d03b3af8b47231b6cd65a6c2e', text: () => import('./assets-chunks/get-projectors_index_html.mjs').then(m => m.default)}], 
['get-televisions/index.html', {size: 26867, hash: 'c40bb3723f95d9ea08314d7d4217556362c91e2aef63508ffec46c387429db36', text: () => import('./assets-chunks/get-televisions_index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 32373, hash: '19aad78855c4679033fdf9fa71e4bf40a0f7d9275a63352fd91ce25f91be20b0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['number-of-devices-tech-inf/index.html', {size: 32640, hash: '3a732e8c0c70b6aa378e74687fc847c8d2eca33595476857ee1372d37c4c2d38', text: () => import('./assets-chunks/number-of-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['get-monitors/index.html', {size: 26869, hash: '8b9bee905b854e7a890d5fbb301a317e5177e2f5e25237228887f78a16677aae', text: () => import('./assets-chunks/get-monitors_index_html.mjs').then(m => m.default)}], 
['number-of-devices/index.html', {size: 35291, hash: '4bf9d821c74539be4fac4795decb30db23ab28f25219534aa89bb861cd1e7c8f', text: () => import('./assets-chunks/number-of-devices_index_html.mjs').then(m => m.default)}], 
['sales-logs/index.html', {size: 30684, hash: '323d40b1211a1affb8abc4ab5a1a6fe314e5d6ceecf9dd44e6f558edd45bbfbc', text: () => import('./assets-chunks/sales-logs_index_html.mjs').then(m => m.default)}], 
['sales-revenue/index.html', {size: 32048, hash: 'cec7b79de5bda7de74fb001b6556f7c332c818b53d168030aca52ab306263df6', text: () => import('./assets-chunks/sales-revenue_index_html.mjs').then(m => m.default)}], 
['styles-BC5HL5UE.css', {size: 209896, hash: 'C064tZG+Rck', text: () => import('./assets-chunks/styles-BC5HL5UE_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
