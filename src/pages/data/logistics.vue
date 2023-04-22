<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
    let { $http }:any = inject('global')
    let tableData = ref([
        {
            name: 'name',
            date: 'date',
            address: 'address',
        }
    ])
    onMounted(()=>{
        $http.get('http://mock.js/Logistics/get').then((res: any)=>{
            console.log(res);
            tableData.value = res.data.datas
        })
    })
</script>
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="code" label="物流单号" />
    <el-table-column prop="position" label="坐标" />
    <el-table-column prop="origination" label="始发地" />
    <el-table-column prop="destination" label="目的地" />
    <el-table-column prop="address" label="状态" />
    <el-table-column prop="name" label="详情"/>
    <el-table-column prop="name" label="操作"/>
  </el-table>
</template>
