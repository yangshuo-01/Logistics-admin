<script setup lang="ts">
import { ref } from 'vue';

    let tableData = ref([
        {
            name: 'name',
            date: 'date',
            address: 'address',
        }
    ])
</script>
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="分拣中心" width="180" />
    <el-table-column prop="name" label="地址" width="180" />
    <el-table-column prop="address" label="坐标" />
    <el-table-column prop="address" label="" />
    <el-table-column prop="address" label="操作" />
  </el-table>
</template>
