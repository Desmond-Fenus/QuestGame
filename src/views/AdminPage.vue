<template lang="">
  <player-list :maxPlayers="15" />
</template>
<script>
import playerList from "../components/common/PlayerList.vue";

export default {
  components: {
    "player-list": playerList,
  },
};
</script>
<style lang=""></style>
