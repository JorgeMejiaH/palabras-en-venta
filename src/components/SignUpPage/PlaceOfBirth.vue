<template>
  <div>
    <label for="PlaceOfBirth" class="lbl-birth-place"
      >Lugar de nacimiento:</label
    >
    <input
      type="text"
      :value="PlaceOfBirth"
      @input="handleChange"
      id="birth-place"
      class="in-user-input"
    />
    <div v-if="!isValidPlaceOfBirth" class="error-message">
      Ingresa un lugar de nacimiento válido.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PlaceOfBirth: "",
      isValidPlaceOfBirth: true,
    };
  },
  methods: {
    handleChange(event) {
      const inputText = event.target.value;
      const isValid = /^[a-zA-Z\s]+$/.test(inputText);

      this.isValidPlaceOfBirth = isValid;

      if (isValid) {
        this.PlaceOfBirth = inputText;
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
