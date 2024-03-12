<template>
  <div>
    <label for="dobPicker">Fecha de Nacimiento (dd-MM-yyyy):</label>
    <datepicker
      id="dobPicker"
      v-model="dob"
      :format="datepickerFormat"
      @input="validateDob"
    ></datepicker>
    <div v-if="dobError" class="error-message">
      Ingresa una fecha de nacimiento válida.
    </div>
  </div>
</template>

<script>
import Datepicker from "vue-datepicker";

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      dob: null,
      dobError: false,
      datepickerFormat: "dd-MM-yyyy", // Ajusta el formato según tus necesidades
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
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 5px;
}
</style>
