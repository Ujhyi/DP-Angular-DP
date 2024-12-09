
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
['index.csr.html', {size: 16925, hash: '12a0698a2d5c75aa8b62db07de68cf83438ec3845b37543e41d3d9350fdd06fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7969, hash: 'bda73e2ea288d77b9d57be59d8c3fc2dac55fde1a150871eb4d5551257debe28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['devices-add/index.html', {size: 34021, hash: 'a45e69b1a07ff74fc70576b24c1ab59215c238f04f228d1829ce72a9418cee9c', text: () => import('./assets-chunks/devices-add_index_html.mjs').then(m => m.default)}], 
['devices-edit/index.html', {size: 33609, hash: '725e576e321aff6102a68a0f352daa0fbd7cdac83ff8a3f195db81f8d1c54255', text: () => import('./assets-chunks/devices-edit_index_html.mjs').then(m => m.default)}], 
['devices-management/index.html', {size: 27722, hash: '0641a26fa36dc30b07b1e2c4e91cf391f0821ba4c6ffc091fd5d0420a318d2d9', text: () => import('./assets-chunks/devices-management_index_html.mjs').then(m => m.default)}], 
['devices-comp/index.html', {size: 26808, hash: '3ca2cf49bb8e5f305221305ede80b0b9e59b4edeaf94f88f0deedfff0b7723bf', text: () => import('./assets-chunks/devices-comp_index_html.mjs').then(m => m.default)}], 
['get-projectors/index.html', {size: 24903, hash: '36aae1ece2d69c568aaeb344f54da223533740a8a9477103f651ff6abadac481', text: () => import('./assets-chunks/get-projectors_index_html.mjs').then(m => m.default)}], 
['get-monitors/index.html', {size: 24895, hash: '8c57b1fb990f114b5438ea681798984879f44b0f3d049f1984bac390a0038bcf', text: () => import('./assets-chunks/get-monitors_index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 28906, hash: '80ef380763da7bc969c95ee05db4da1135420f24af23526284c89d87f3da7cf8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['number-of-devices-tech-inf/index.html', {size: 27903, hash: '524a31026cada78dd108078aab2eff02471369cf18eb71c5a36ad35c69363703', text: () => import('./assets-chunks/number-of-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['get-televisions/index.html', {size: 24893, hash: '799a3f13ac659db6f894189b6856582f0444fda1f709ed0a5a04443dbe240ae3', text: () => import('./assets-chunks/get-televisions_index_html.mjs').then(m => m.default)}], 
['sales-logs/index.html', {size: 27261, hash: '03bac1f8042e608ac2c46de71a946f57c004b09aecf1c7c60bbd2673e63ca19d', text: () => import('./assets-chunks/sales-logs_index_html.mjs').then(m => m.default)}], 
['number-of-devices/index.html', {size: 30138, hash: 'ab6f4160ec74933ef5d9cbb607e06b76f062364f2cb4e83f8a3a478f7763e73b', text: () => import('./assets-chunks/number-of-devices_index_html.mjs').then(m => m.default)}], 
['sales-revenue/index.html', {size: 28080, hash: '9ada9459e5f9984d20c56c3a9eb107c453bf12407dbbe6461137af2795cd246e', text: () => import('./assets-chunks/sales-revenue_index_html.mjs').then(m => m.default)}], 
['styles-GVNZVFFJ.css', {size: 199397, hash: 'hIsJvN9QlDs', text: () => import('./assets-chunks/styles-GVNZVFFJ_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
