<script lang="ts" setup>
  let isElementIcon = (params:string = '&&'):boolean=> {
    if(params&&!/^#/.test(params)) return true
    return false
  }
  defineProps({
    icon: String,
    size: Number,
  })
</script>
<template>
  <div :style="{fontSize:size + 'px'}" class="icon-custom">
    <component v-if="isElementIcon(icon)" :is="icon"></component>
    <svg  v-else icon aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
  </div>
</template>
<style lang="scss">
.icon-custom{
  vertical-align: top;
  svg{
    width:1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
    overflow: hidden;
  }
}
</style>