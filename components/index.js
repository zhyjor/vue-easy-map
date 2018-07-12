import BaiduMap from './map/Map.vue'
import BmView from './map/MapView.vue'
import BmMarker from './overlays/Marker.vue'

export default {
    install(Vue, options) {
        const {ak} = options
        Vue.prototype._BMap = () => ({ak})

        Vue.component('baidu-map', BaiduMap)
        Vue.component('bm-view', BmView)
        Vue.component('bm-marker', BmMarker)

    }
}

export {
    BaiduMap, BmView,
    BmMarker
}
