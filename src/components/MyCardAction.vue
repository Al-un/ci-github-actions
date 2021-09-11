<template>
  <my-card class="my-card-action">
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-actions">
      <my-button size="medium">Some action button</my-button>
    </div>
  </my-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MyButton from "@/components/MyButton.vue";
import MyCard from "@/components/MyCard.vue";

export default defineComponent({
  name: "MyCardAction",
  components: {
    MyButton,
    MyCard,
  },
});
</script>

<style lang="scss">
.my-card-action {
  .card-body {
    padding: 16px;
  }

  .card-actions {
    border-top: 1px solid #666666;
    display: flex;
    flex-direction: row-reverse;
    padding: 16px;
  }
}
</style>
