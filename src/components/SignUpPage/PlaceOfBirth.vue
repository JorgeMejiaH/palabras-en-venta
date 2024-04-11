<template>
  <div class="place-of-birth-container">
    <label for="PlaceOfBirth" class="lbl-birth-place"
      >Ciudad de nacimiento:</label
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
      this.$emit("validBirthPlace", isValid);

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
.place-of-birth-container{
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 4%;
}

</style>
