
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/DP-Angular-DP/login",
    "route": "/DP-Angular-DP"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/home"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/get-monitors"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/change-password"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/login"
  },
  {
    "renderMode": 2,
    "route": "/DP-Angular-DP/register"
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
['index.csr.html', {size: 26165, hash: '2f9a638a23ffc0320596e994a117804e9fefb125fb2a7e8731a1ff82f8e63332', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 17209, hash: '055fd805e6dfed2449a116e76b1f913dde661eb567a177d9fae6bb889d76a6c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['get-monitors/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/get-monitors_index_html.mjs').then(m => m.default)}], 
['register/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)}], 
['change-password/index.html', {size: 32990, hash: '9e75fa8642a6fa709cf589d888722ff973f147b7abe3c387820e0b251154d736', text: () => import('./assets-chunks/change-password_index_html.mjs').then(m => m.default)}], 
['get-projectors/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/get-projectors_index_html.mjs').then(m => m.default)}], 
['get-televisions/index.html', {size: 35611, hash: 'baae82ff3c25e3567a0e3b11be369b21d3150114c3a9cb703cde31f913b0badb', text: () => import('./assets-chunks/get-televisions_index_html.mjs').then(m => m.default)}], 
['login/index.html', {size: 32640, hash: '583d2785e448072269e8c62bbcbd4fff8a0168f82361c81e3385d674032848fb', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['devices-add/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/devices-add_index_html.mjs').then(m => m.default)}], 
['devices-edit/index.html', {size: 35611, hash: 'baae82ff3c25e3567a0e3b11be369b21d3150114c3a9cb703cde31f913b0badb', text: () => import('./assets-chunks/devices-edit_index_html.mjs').then(m => m.default)}], 
['devices-comp/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/devices-comp_index_html.mjs').then(m => m.default)}], 
['devices-management/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/devices-management_index_html.mjs').then(m => m.default)}], 
['number-of-devices-tech-inf/index.html', {size: 35611, hash: 'baae82ff3c25e3567a0e3b11be369b21d3150114c3a9cb703cde31f913b0badb', text: () => import('./assets-chunks/number-of-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['number-of-devices/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/number-of-devices_index_html.mjs').then(m => m.default)}], 
['sales-logs/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/sales-logs_index_html.mjs').then(m => m.default)}], 
['sales-revenue/index.html', {size: 35607, hash: 'd587fbe8aa73ee892419afe8c4e36cedf8a972e77778bb276b04420d29fd25b4', text: () => import('./assets-chunks/sales-revenue_index_html.mjs').then(m => m.default)}], 
['styles-EJFZ23D6.css', {size: 211182, hash: 'IffW4e9LW7g', text: () => import('./assets-chunks/styles-EJFZ23D6_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
