<template>
  <div>
    <label for="dobPicker">Fecha de Nacimiento:</label>
    <input
      id="dobPicker"
      v-model="dob"
      :config="flatpickrConfig"
      @input="validateDob"
      class="in-user-input"
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
      flatpickrConfig: {
        dateFormat: "d-m-Y",
      },
    };
  },
  methods: {
    validateDob() {
      const selectedDate = new Date(this.dob);
      const currentDate = new Date();
      const eighteenYearsAgo = new Date();
      eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18);
      const hundredYearsAgo = new Date();
      hundredYearsAgo.setFullYear(currentDate.getFullYear() - 100);

      // Validación básica para verificar si la fecha de nacimiento es una fecha válida.
      if (
        isNaN(selectedDate.getTime()) ||
        selectedDate < hundredYearsAgo ||
        selectedDate > eighteenYearsAgo
      ) {
        this.dobError = true;
      } else {
        this.dobError = false;
      }
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
</style>
