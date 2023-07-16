<template>
  <create-room :games="games"></create-room>
</template>

<script>
import adminform from "../components/admin/CreateRoomform.vue";

export default {
  components: {
    "create-room": adminform,
  },
  data() {
    return {
      games: [{ name: "firstGame" }, { name: "secondGame" }],
    };
  },
};
</script>

<style lang=""></style>
