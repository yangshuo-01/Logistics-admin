<script setup lang="ts">
import { reactive,ref } from 'vue';
import logo from '@/assets/admin-logo.png';
import { useRouter } from 'vue-router';

    let router = useRouter()
    let navState = reactive({
        drawer: true,
        rail: true,
        lock: false,
        routes: router.options.routes,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
    })
</script>
<template>
    <header :class="{expend:navState.lock}">
        <!-- <nav></nav> -->
    </header>
    <aside>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="navState.lock"
        >
            <el-sub-menu v-for="(item, index) in $router.options.routes" :key="index" :index="item.path">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>{{ item.meta?.name }}</span>
                </template>
            <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>权限配置</template>
            </el-menu-item>
        </el-menu>
    </aside>
    <article :class="{expend:navState.lock}">
        <router-view/>
    </article>
</template>
<style lang="scss">
article{
    margin-right: 116px;
    margin-top: 100px;
    background-color: lightsalmon;
    &.expand{
        margin-right: 300px;
    }
}

header{
    position: fixed;
    top: 12px;
    height: 100px;
    left: 101px;
    right: 12px;
    transition-duration: 0.2s;
    transition-property: box-shadow, transform, visibility, width, height, left, right, top, bottom;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 12px;
    background-color:#ffffff98;
    &.expend{
        left: 300px;
    }
}
aside{
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
}
</style>