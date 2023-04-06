<script setup lang="ts">
    import { reactive,ref } from 'vue';
    import logo from '@/assets/admin-logo.png';
    let navState = reactive({
        drawer: true,
        rail: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
    })
</script>
<template>
        <v-layout>
            <v-navigation-drawer
                theme="dark"
                v-model="navState.drawer"
                expand-on-hover
                :rail="navState.rail"
                rail-width="77"
                permanent
            >
                <v-list class="py-4 mx-2 logo" nav>
                    <v-list-item :prepend-avatar="logo" class="mx-2">
                        <v-list-item-title class="title">物流管理</v-list-item-title>
                        <v-list-item-subtitle>vue-material-admin</v-list-item-subtitle>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list class="mx-2" density="comfortable" nav>
                    <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                    <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <header :class="{expend:!navState.rail}">
                <!-- <nav></nav> -->
            </header>
            <article>
                <router-view/>
            </article>
        </v-layout>

</template>
<style lang="scss">
article{
    margin-right: 116px;
    margin-top: 100px;
    background-color: lightsalmon;
}
header{
    position: fixed;
    top: 8px;
    height: 84px;
    left: 108px;
    width: calc(100vw - 116px);
    background-color: #b29a9ad5;
    transition-duration: 0.2s;
    transition-property: box-shadow, transform, visibility, width, height, left, right, top, bottom;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &.expend{
        left: 300px;
        width: calc(100vw - 300px);
    }
}
.v-navigation-drawer{
    border-radius: 12px;
    overflow: hidden;
    top: 12px !important;
    bottom: 12px !important;
    left: 12px !important;
    height: calc(100vh - 24px) !important;
}
</style>