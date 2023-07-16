<template lang="">
  <div>
    <form action="" method="post" class="createRoom">
      <label for="roomName">Название комнаты</label>
      <input
        v-model="formData.roomName"
        type="text"
        name="roomName"
        id="roomName"
      />
      <label for="gameList">выберите игру</label>
      <select v-model="formData.selectedOption">
        <option v-for="game in games" :key="game" :value="game.name">
          {{ game.name }}
        </option>
      </select>
      <button @click="sendForm">Create room</button>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        roomName: "",
        selectedOption: null,
      },
    };
  },
  methods: {
    sendForm(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.formData));
    },
  },
};
</script>
<style lang="scss">
.createRoom {
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
