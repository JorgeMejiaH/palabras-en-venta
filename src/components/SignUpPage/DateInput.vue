<template>
  <div class="date-input-container">
    <label for="dobPicker">Fecha de Nacimiento:</label>
    <input
      id="dobPicker"
      v-model="dob"
      :config="flatpickrConfig"
      @input="validateDob"
      class="date-input"
    />
    <div v-if="dobError" class="error-message">
      Ingresa una fecha de nacimiento válida.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dob: null,
      dobError: false,
      validDate: false,
      flatpickrConfig: {
        dateFormat: "d-m-Y",
        defaultDate: this.getEighteenYearsAgo(),
      },
    };
  },
  methods: {
    validateDob() {
      const dobParts = this.dob.split("-");
      const selectedDate = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const eighteenYearsAgo = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      eighteenYearsAgo.setHours(0, 0, 0, 0);
      const hundredYearsAgo = new Date(
        currentDate.getFullYear() - 100,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      hundredYearsAgo.setHours(0, 0, 0, 0);

      // Validación básica para verificar si la fecha de nacimiento es una fecha válida.
      if (
        isNaN(selectedDate.getTime()) ||
        selectedDate < hundredYearsAgo ||
        selectedDate > eighteenYearsAgo
      ) {
        this.dobError = true;
        this.validDate = false;
        this.$emit("fechaValida", this.validDate);
      } else {
        this.dobError = false;
        this.validDate = true;
        this.$emit("fechaValida", this.validDate);
      }
    },
    getEighteenYearsAgo() {
      const today = new Date();
      return new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );
    },
  },
  mounted() {
    flatpickr("#dobPicker", this.flatpickrConfig);
  },
};
</script>

<style>
.error-message {
  color: red;
  margin-top: 5px;
}
.date-input-container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 4%;
}
.date-input {
  width: 90%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  justify-self: center;
}
</style>
