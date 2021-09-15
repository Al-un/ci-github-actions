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
  background-color: transparent;
  border: 1px solid rebeccapurple;
  box-sizing: border-box;
  color: rebeccapurple;
  justify-content: center;

  &.small {
    border-radius: 12px;
    font-size: 10px;
    height: 24px;
    padding: 0 8px;
  }

  &.medium {
    border-radius: 18px;
    font-size: 14px;
    height: 36px;
    padding: 0 12px;
  }

  &.large {
    border-radius: 24px;
    font-size: 16px;
    height: 48px;
    padding: 0 16px;
  }
}
</style>
