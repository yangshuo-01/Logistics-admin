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

    console.log(router);
</script>
<template>
    <header :class="{expend:navState.lock}">
        <!-- <nav></nav> -->
    </header>
    <aside>
        
    </aside>
    <article>
        <router-view/>
    </article>
</template>
<style lang="scss">
article{
    margin-right: 116px;
    margin-top: 100px;
    background-color: lightsalmon;
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