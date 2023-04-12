<script setup lang="ts">
import { reactive,ref } from 'vue';
import { RouteRecordRaw, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { isElement } from 'lodash';
    let router = useRouter()
    // 过滤hidden的路由
    let filterHiddenRoutes =  (routes:readonly RouteRecordRaw[]):RouteRecordRaw[] =>{
        return routes.filter(route=>!route.meta?.hidden)
    }
    let isElementIcon = (meta:any): boolean => {
        // 排除没有meta情况
        if(!meta) return false
        if(meta&&meta.icon){
            return !!!/^#/.test(meta.icon)
        }
        return false
    }
    onMounted(()=>{
        console.log(filterHiddenRoutes(router.options.routes))
    })
    let navState = reactive({
        drawer: true,
        rail: true,
        collapse: false,
        routes: router.options.routes,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
    })
</script>
<template>
    <header :class="{expend:!navState.collapse}">
        <div class="toolbar-item-group">
            <svg pointer icon @click="navState.collapse = !navState.collapse" aria-hidden="true">
                <use :xlink:href="navState.collapse?'#icon-icon-develop':'#icon-a-icon-packup'"></use>
            </svg>
        </div>            
        <div class="toolbar-item-group">
            <div pointer class="toolbar-item">
                <Bell icon />
            </div>
            <div pointer class="toolbar-item">
                <UserFilled icon />
            </div>
        </div>
    </header>
    <aside>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"

            :collapse="navState.collapse"
        >
            <template v-for="(item, index) in filterHiddenRoutes($router.options.routes)" :key="item.path" >
                <el-sub-menu v-if="item.children" :index="item.path">
                    <template #title>
                        <el-icon>
                            <svg  v-if="isElementIcon(item.meta)" icon aria-hidden="true">
                                <use :xlink:href="item.meta?.icon"></use>
                            </svg>
                            <component v-else :is=""></component>
                        </el-icon>
                        <span>{{ item.meta?.name }}</span>
                    </template>
                    <el-menu-item-group >
                        <el-menu-item v-for="(items, index) in item.children" :key="index" :index="items.path">
                            <el-icon>
                                <svg icon aria-hidden="true">
                                    <use :xlink:href="item.meta?.icon"></use>
                                </svg>
                            </el-icon>
                            <template #title>{{ items.meta?.name }}</template>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item v-else :index="item.path">
                    <el-icon>
                        <svg icon aria-hidden="true">
                            <use :xlink:href="item.meta?.icon"></use>
                        </svg>
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
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 100%;
}
.el-menu.el-menu-vertical-demo{
    height: 100%;
    border-radius: 12px;
    border-right: 0px;
    
}
div[class$="toolbar"]{
        
    }
</style>
<style lang="scss">
article{
    margin-left: 116px;
    margin-top: 124px;
    &.expend{
        margin-left: 264px;
    }
}

header{
    position: fixed;
    top: 12px;
    height: 100px;
    left: 88px;
    right: 12px;
    transition-duration: 0.3s;
    transition-property: box-shadow, transform, visibility, width, height, left, right, top, bottom;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 12px;
    background-color:#ffffffd6;
    padding: 0 24px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    &.expend{
        left: 264px;
    }
    .icon{
        width: 24px;
        height: 24px;
    }
    .toolbar-item-group{
        svg{
            font-size: 24px;
        }
        .toolbar-item{
            display: inline-block;
            padding: 0 12px;
        }
    }
}
aside{
    position: fixed;
    top: 12px;
    bottom: 12px;
    left: 12px;
}
</style>