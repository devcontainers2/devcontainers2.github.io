<script setup lang="ts">
const props = defineProps<{ gap?: string }>();
</script>

<template>
  <div class="wrapper" :style="{ columnGap: props.gap || '1.66em' }">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 900px) {
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
