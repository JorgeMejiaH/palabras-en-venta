<template>
  <div class="email-container">
    <label for="Email" class="lbl-user-email">Correo electrónico:</label>
    <input
      type="text"
      :value="Email"
      @input="handleChange"
      id="user-email"
      class="in-user-input"
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
      this.$emit("validEmail", this.isValidEmail);
      this.Email = inputText;
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 5px;
}
.email-container{
  margin-top: 3%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
</style>
