import AMapLoader from '@amap/amap-jsapi-loader';


window._AMapSecurityConfig = {
    securityJsCode:'cff391566d12db88ac234841eb772ef1',
}
export async function loadAMap() {
    return AMapLoader.load({
            "key": "58b1aaf4fb48eda2cb8ecd388e6f0d42",   // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "2.0",  // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
            "plugins": [],  // 需要使用的的插件列表，如比例尺'AMap.Scale'等
          })
}
