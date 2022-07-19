// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'cesium/Source/Widgets/widgets.css'
// Vue.prototype.widgets = widgets

import * as Cesium from 'cesium/Cesium'
import * as widgets from 'cesium/Widgets/widgets.css'

Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
