<template>
    <div class="container">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in paths" :to="{ path: '/' }">{{}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import { ref, } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
let pathArr = router.currentRoute.value.path.split('/')
pathArr.shift()
console.log(pathArr);
let paths = ref(pathArr)
// let routeItems = ref(arr)
</script>
<style scoped>
.container {
    margin-left: 10px;
}
</style>