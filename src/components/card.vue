
<script lang="ts" setup>


</script>
<template>
    <div self class="card">
        <slot>card</slot>
    </div>
</template>
<style scoped>
.card{
    /* margin: 12px; */
    border-radius: 8px;
    background-color: #fff;
    /* box-shadow: var(--self-shodow-1); */
    /* color: var(--primary-color); */
    /* background-image: var(--primary-background-image); */
    border-radius: 12px;
}
</style>