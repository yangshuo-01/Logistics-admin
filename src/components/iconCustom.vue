<script lang="ts" setup>
  let isElementIcon = (params:string = '&&'):boolean=> {
    if(params&&!/^#/.test(params)) return true
    return false
  }
  defineProps({
    icon: String,
    fontSize: Number,
  })
</script>
<template>
  <div :style="{fontSize:fontSize + 'px'}" class="icon-custom">
    <component v-if="isElementIcon(icon)" :is="icon"></component>
    <svg  v-else icon aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
  </div>
</template>