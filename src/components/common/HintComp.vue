<template lang="">
  <div>
    <div class="name">{{ hintName }}</div>
    <div class="name">{{ hintText }}</div>
  </div>
</template>
<script>
export default {
  props: {
    hintName: {
      type: String,
      required: true,
    },
    hintText: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
