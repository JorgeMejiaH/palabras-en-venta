<template>
    <div>
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
  
  <style></style>