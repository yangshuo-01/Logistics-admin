<script setup lang="ts">
import { onMounted,ref } from 'vue';
import { loadAMap } from '../utils/mapLoader';
var map
const container = ref(null)
onMounted(()=>{
    loadAMap().then(()=>{        
        map = new window.AMap.Map(container.value,{
            zoom: 10,
            viewMode: '3D',
            mapStyle: 'amap://styles/346f3d8f8cd538663e73786c90def87c',
        })
    })
})
</script>

<template>
    <Card>
        分拣中心分布
    </Card>
    <div ref="container" class="dashboard">
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