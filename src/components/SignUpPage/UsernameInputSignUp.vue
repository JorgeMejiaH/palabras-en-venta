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
    <div v-if="error" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      error: false,
      errorMessage: ""
    };
  },
  methods: {
    handleChange(event) {
      const value = event.target.value.trim(); // Elimina los espacios en blanco al principio y al final

      if (value) {
        this.username = value;
        this.error = false; // No hay error si el nombre de usuario no está vacío
        this.errorMessage = "";
      } else {
        this.username = "";
        this.error = true; // Hay un error si el nombre de usuario está vacío
        this.errorMessage = "El nombre de usuario no puede estar vacío";
      }
      this.$emit("validUsername", {
        is_valid: !this.error,
        username: value
      
      });
    }
  }
};
</script>

<style>
.username-container{
  margin-top: 3%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
</style>
