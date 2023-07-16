<template lang="">
  <header class="header">
    <div>{{ player }}</div>
  </header>
</template>
<script>
export default {
  props: {
    player: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.header {
  height: 50px;
  border: 3px solid #000;
}
</style>
