
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
['index.csr.html', {size: 16934, hash: 'd3aa9f0d76bcc889eada7119d6a093f8d25a7d71eae1b4614ccdac182954b381', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7978, hash: '5dd9f723a70dd34ef847fbca2494bd5bae47cdcbfcd24f614cc491ab4f23b7dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['get-monitors/index.html', {size: 26380, hash: '97d0e07991c0b7af55d837189f5c20fddfebe18f36205bed16b56cb2a324f013', text: () => import('./assets-chunks/get-monitors_index_html.mjs').then(m => m.default)}], 
['change-password/index.html', {size: 23759, hash: 'fea725986c5ff0827c119a810bbd5ad0210a2f4e563ffdb955eda3db3114ae72', text: () => import('./assets-chunks/change-password_index_html.mjs').then(m => m.default)}], 
['login/index.html', {size: 23410, hash: '601e94c9be8667dabd33c79501dfde3359f03a5e81ea5d0024f43d763d49d58f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}], 
['register/index.html', {size: 23275, hash: '1acfd815517c73ca223cef4b45abadd72833bd2c61a74be5b77f80a3a74f9bc6', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 26380, hash: '97d0e07991c0b7af55d837189f5c20fddfebe18f36205bed16b56cb2a324f013', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['devices-add/index.html', {size: 38982, hash: 'f2ab97c38bf2b6065efaf6aa77424766fbb8a81cacde1257144fccf222971ea4', text: () => import('./assets-chunks/devices-add_index_html.mjs').then(m => m.default)}], 
['devices-edit/index.html', {size: 38262, hash: 'e6fc781a27ccf40c59938807f1afde9470424f35edc7dc3d06b724fbf3f352de', text: () => import('./assets-chunks/devices-edit_index_html.mjs').then(m => m.default)}], 
['devices-management/index.html', {size: 32819, hash: 'a99ee3decd4980ce31d76110b27c5d9016eb03adb5173a5028f3d631ca6bb215', text: () => import('./assets-chunks/devices-management_index_html.mjs').then(m => m.default)}], 
['devices-comp/index.html', {size: 30181, hash: 'e7df0fe3fd53100fe018ce5e7b057f32c2d3b0076a2fd222dd1cd1c6ddc8ad01', text: () => import('./assets-chunks/devices-comp_index_html.mjs').then(m => m.default)}], 
['number-of-devices-tech-inf/index.html', {size: 34903, hash: '2218f4f409ddaba0f998199835793e88355ab9c8beebb2beb5e4c2ef698961d2', text: () => import('./assets-chunks/number-of-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['get-televisions/index.html', {size: 56189, hash: '5341eb8be4b33ba129019b12063ef0c6a0b1e395b53999b3917d10e605cd8286', text: () => import('./assets-chunks/get-televisions_index_html.mjs').then(m => m.default)}], 
['get-projectors/index.html', {size: 56106, hash: '1cf479ace73c244b97440b10375a482d8f66b5375ccd580ff447973264383bab', text: () => import('./assets-chunks/get-projectors_index_html.mjs').then(m => m.default)}], 
['number-of-devices/index.html', {size: 38441, hash: '1928a68267a5d0fa959ce130a6027e0f687a644a87187f10f5fd3650bb1ae108', text: () => import('./assets-chunks/number-of-devices_index_html.mjs').then(m => m.default)}], 
['sales-logs/index.html', {size: 47337, hash: 'f102271f9564cf00fd6776566302816e2321e1cd77ed23dd0114e1d6793d452f', text: () => import('./assets-chunks/sales-logs_index_html.mjs').then(m => m.default)}], 
['sales-revenue/index.html', {size: 33481, hash: '008ae1158c89294c8e8e6ea1927a27582a0902506b51ccf0aea3445da588c9bd', text: () => import('./assets-chunks/sales-revenue_index_html.mjs').then(m => m.default)}], 
['styles-EJFZ23D6.css', {size: 211182, hash: 'IffW4e9LW7g', text: () => import('./assets-chunks/styles-EJFZ23D6_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
