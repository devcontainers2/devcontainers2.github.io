<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.66em;
}
@media (max-width: 900px) {
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
