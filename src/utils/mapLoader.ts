import AMapLoader from '@amap/amap-jsapi-loader';

export function loadAMap() {
    window._AMapSecurityConfig = {
        securityJsCode:'f1d5ab04afbe6fedf3faa8fc5ead2963',
    }
    return AMapLoader.load({
            "key": "f9cf8a34333ee1a7b5f9b6a6014f0236",   // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "2.0",  // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
            "plugins": [],  // 需要使用的的插件列表，如比例尺'AMap.Scale'等
          })
}
