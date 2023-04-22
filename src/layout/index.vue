<script setup lang="ts">
import { reactive,ref } from 'vue';
import breadcrumbs from '../components/breadcrumbs.vue'
import { RouteRecordRaw, useRouter } from 'vue-router';
import { onMounted } from 'vue';

    let router = useRouter()
    console.log(router.currentRoute.value.path);
    
    // 过滤hidden的路由
    let filterHiddenRoutes =  (routes:readonly RouteRecordRaw[]):RouteRecordRaw[] =>{
        return routes.filter(route=>!route.meta?.hidden)
    }
    onMounted(()=>{

    })
    let activeIndex = reactive({path : router.currentRoute.value.path}) 
    let navState = reactive({
        drawer: true,
        rail: true,
        collapse: false,
        routes: router.options.routes,
    })
    
</script>
<template>
    <header :class="{expend:!navState.collapse}">
        <div class="toolbar-item-group">
            <svg pointer icon @click="navState.collapse = !navState.collapse" aria-hidden="true">
                <use :xlink:href="navState.collapse?'#icon-icon-develop':'#icon-a-icon-packup'"></use>
            </svg>
        </div>
        <breadcrumbs/>     
        <div class="flex-grow-1"></div>       
        <div class="toolbar-item-group">
            <div pointer class="toolbar-item">
                <Icon-custom :size="28" icon="#icon-github-fill"></Icon-custom>
            </div>
            <div pointer class="toolbar-item">
                <Icon-custom :size="28" icon="Bell"></Icon-custom>
            </div>
            <div pointer class="toolbar-item">
                <Icon-custom :size="28" icon="#icon-user__easyico"></Icon-custom>
            </div>
        </div>
    </header>
    <aside>
        <el-menu
            router
            :default-active="activeIndex.path"
            class="el-menu-vertical-demo"
            :collapse="navState.collapse"
        >
            <div logo class="menuLogo">
                <Icon-custom :size="40" icon="#icon-wuliu2"></Icon-custom>
                <div v-show="!navState.collapse" style="margin-left: 8px;">物流平台</div>
            </div>
            <template v-for="(item, index) in filterHiddenRoutes($router.options.routes)" :key="item.path" >
                <el-sub-menu v-if="item.children" :index="item.path">
                    <template #title>
                        <el-icon>
                            <Icon-custom :size="20" :icon="item.meta?.icon"></Icon-custom>
                        </el-icon>
                        <span>{{ item.meta?.name }}</span>
                    </template>
                    <el-menu-item v-for="(items, index) in item.children" :key="index" :index="item.path+'/'+items.path">
                        <el-icon>
                            <Icon-custom :size="20" :icon="items.meta?.icon"></Icon-custom>
                        </el-icon>
                        <template #title>{{ items.meta?.name }}</template>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else :index="item.path">
                    <el-icon>
                        <Icon-custom :size="20" :icon="item.meta?.icon"></Icon-custom>
                    </el-icon>
                    <template #title>{{ item.meta?.name }}</template>
                </el-menu-item>
            </template>
        </el-menu>
    </aside>
    <article :class="{expend:!navState.collapse}">
        <router-view/>
    </article>
</template>
<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 100%;
}
.el-menu.el-menu-vertical-demo{
    height: 100%;
    border-radius: 12px;
    border-right: 0px;
    backdrop-filter: var(--blur-1);
}
html:root{
    --el-menu-active-color: #fff;
    --el-menu-bg-color: #2e2e2eed;
    --el-menu-text-color: #ffffff;
    --active-color: #fff;
    --el-menu-hover-bg-color: #787878;
}

</style>
<style lang="scss">
.flex-grow-1 {
    flex: 1;
}
.menuLogo{
    text-align: center;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 20px 0;
    justify-content: center;
    div{
        white-space: nowrap; 
    }
}
article{
    margin-left: 90px;
    margin-top: 104px;
    margin-right: 12px;
    transition-duration: 0.3s;
    transition-property: margin;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    &.expend{
        margin-left: 264px;
    }
}

header{
    overflow: hidden;
    z-index: 2012;
    position: fixed;
    top: 12px;
    height: 80px;
    left: 90px;
    right: 12px;
    transition-duration: 0.3s;
    transition-property: width, height, left, right;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 12px;
    padding: 0 24px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    &.expend{
        left: 264px;
    }
    &::after{
        content: '';
        z-index: -1;
        backdrop-filter: saturate(50%) blur(4px);
        background-size: 4px 4px;
        background-image: radial-gradient(transparent 2px,var(--bg-color) 1px);
        background-color: #ffffff92;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
    .toolbar-item-group{
        .toolbar-item{
            display: inline-block;
            vertical-align: middle;
            padding: 0 12px;
            vertical-align: middle;
        }
    }
}
aside{
    z-index: 2012;
    position: fixed;
    top: 12px;
    bottom: 12px;
    left: 12px;
}
</style>