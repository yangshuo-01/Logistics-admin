<script setup lang="ts">
import { onMounted,ref } from 'vue';
import { loadAMap } from '../utils/mapLoader';
var map
const container = ref(null)
const loading = ref(true)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
onMounted(()=>{
    loadAMap().then(()=>{        
        map = new window.AMap.Map(container.value,{
            zoom: 10,
            viewMode: '3D',
            mapStyle: 'amap://styles/346f3d8f8cd538663e73786c90def87c',
        })
        console.log(loading.value = false);
    })
})
</script>

<template>
    <Card>
        分拣中心分布
    </Card>
    <div 
        v-loading="loading" 
        element-loading-text="Loading..."
        :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(122, 122, 122, 1)"
        ref="container" 
        class="dashboard">
    </div>
</template>
<style lang="scss">
html[dark]:root{
    --test: #fff
}
</style>
<style lang="scss" scoped>
    .dashboard{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgb(213, 228, 228);
    }
    .card{
        color: #fff;
        z-index: 1;
        position: fixed;
        right:24px;
        bottom: 24px;
        width: 220px;
        height: 400px;
        border-radius: var(--border-radius-1);
        backdrop-filter: var(--blur-1);
        background-color: inherit;
    }
</style>