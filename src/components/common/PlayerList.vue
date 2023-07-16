<template lang="HTML">
  <div class="playerList">
    <div class="numberOfPlayers">{{players.length}} / {{maxPlayers}}</div>
    <ul>
      <li v-for="player in players" :key="player" >{{ player.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    maxPlayers: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      players: [
        { name: "Sergey", admin: false },
        { name: "Evgenij", admin: false },
        { name: "Vova", admin: false },
      ],
    };
  },
};
</script>
<style lang="scss">
.playerList {
  border: 3px solid #000;
}
</style>
