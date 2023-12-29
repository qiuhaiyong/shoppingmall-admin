<template>
  <!-- svg标签为外层容器 配合use标签使用 -->
  <!-- 属性为xlink:href 值为#-icon开头加上icons文件下的svg图片名 -->
  <svg style="width: 30px; height: 30px">
    <use
      :xlink:href="prefix + name"
      :fill="color"
      :width="width + 'px'"
      :height="height + 'px'"
    ></use>
  </svg>
</template>

<script setup lang="ts">
import type { SvgIconProps } from './type'
withDefaults(defineProps<SvgIconProps>(), {
  prefix: '#icon-',
  color: '',
  width: '16',
  height: '16'
})
</script>

<style></style>
