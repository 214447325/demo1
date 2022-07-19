<template>
  <div class="hello">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
// import * as Cesium from 'cesium/Cesium'
// import  'cesium/Widgets/widgets.css'
// import Cesium from 'cesium/Source/Cesium.js'
// import buildModuleUrl from 'cesium/Source/Core/buildModuleUrl'
// import 'cesium/Source/Widgets/widgets.css'

import * as Cesium from 'cesium/Cesium'
import 'cesium/Widgets/widgets.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$nextTick(() => {
      const viewer = new Cesium.Viewer('cesiumContainer', {
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        baseLayerPicker: true,
        navigationHelpButton: false,
        animation: false,
        creditContainer: 'cesiumContainer',
        timeline: false,
        fullscreenButton: false,
        vrButton: false,
      })

      // viewer._cesiumWidget._creditContainer.style.display = 'none'
      console.log('viewer: ', viewer)
    })
  }
}
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0 !important;
}

#app, #cesiumContainer {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>
