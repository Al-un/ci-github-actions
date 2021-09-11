<template>
  <my-card-action> This is some card with some action </my-card-action>

  <my-card padded>
    <img alt="Vue logo" src="../assets/logo.png" />
  </my-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MyCard from "@/components/MyCard.vue";
import MyCardAction from "@/components/MyCardAction.vue";

export default defineComponent({
  name: "Home",
  components: {
    MyCard,
    MyCardAction,
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  margin: auto;
  max-width: 500px;
  width: 90%;

  & + .my-card {
    margin-top: 16px;
  }
}
</style>
