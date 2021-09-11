<template>
  <div class="my-card" :class="{ padded }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyCard",
  props: {
    padded: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss">
.my-card {
  background-color: white;
  border-radius: 4px;
  // https://codepen.io/sdthornton/pen/wBZdXq
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-sizing: border-box;

  &.padded {
    padding: 8px;
  }
}
</style>
