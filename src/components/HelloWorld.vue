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

      // let viewer = new Cesium.Viewer('cesiumContainer', {
      //   baseLayerPicker: false,
      //   fullscreenButton: false,
      //   geocoder: false,
      //   homeButton: false,
      //   animation: false,
      //   infoBox: false,
      //   sceneModePicker: false,
      //   selectionIndicator: false,
      //   // creditContainer: "creditBar",
      //   skyBox: false,
      //   skyAtmosphere: false,
      //   timeline: false,
      //   navigationHelpButton: false,
      //   scene3DOnly: true,
      //   allowDataSourcesToSuspendAnimation: false
      // })
      // window.viewer = viewer

      const viewer = new Cesium.Viewer('cesiumContainer')
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
