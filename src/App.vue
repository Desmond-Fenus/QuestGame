<template>
  <div>
    <header-comp :player="player" />
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/common/HeaderComponent.vue";

export default {
  components: {
    "header-comp": header,
  },

  data() {
    return {
      player: "Egor",
    };
  },
};
</script>

<style lang="scss"></style>
