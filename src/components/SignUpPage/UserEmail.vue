<template>
  <div>
    <label for="Email" class="lbl-user-email">Correo electrónico:</label>
    <input
      type="text"
      :value="Email"
      @input="handleChange"
      id="user-email"
      class="in-user-email"
    />
    <div v-if="!isValidEmail" class="error-message">
      Ingresa un correo electrónico válido.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Email: "",
      isValidEmail: true,
    };
  },
  methods: {
    handleChange(event) {
      const inputText = event.target.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      this.isValidEmail = emailRegex.test(inputText);

      if (this.isValidEmail) {
        this.Email = inputText;
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 5px;
}
</style>
