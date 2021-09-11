<template>
  <button class="my-button" :class="`${size}`" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyCard",
  props: {
    disabled: { type: Boolean, default: false },
    size: { type: String, required: true },
  },
});
</script>

<style lang="scss">
.my-button {
  display: flex;
  align-items: center;
  background-color: rebeccapurple;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  color: white;
  justify-content: center;

  &.small {
    font-size: 12px;
    height: 24px;
    padding: 0 8px;
  }

  &.medium {
    font-size: 14px;
    height: 36px;
    padding: 0 12px;
  }

  &.large {
    font-size: 16px;
    height: 48px;
    padding: 0 16px;
  }
}
</style>
