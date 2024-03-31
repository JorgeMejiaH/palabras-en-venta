<template>
  <div class="username-container">
    <label for="username" class="lbl-user-sign-up">Nombre de usuario:</label>
    <input
      type="text"
      :value="username"
      @input="handleChange"
      class="in-user-input"
      id="username"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    handleChange(event) {
      this.username = event.target.value;
    },
  },
};
</script>

<style>
.username-container{
  margin-top: 3%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
</style>
