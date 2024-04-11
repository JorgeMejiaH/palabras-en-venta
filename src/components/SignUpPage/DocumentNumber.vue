<template>
  <div class="document-number-container">
    <label for="DocumentNumber" class="lbl-document-number"
      >Numero de documento:</label
    >
    <input
      type="text"
      :value="DocumentNumber"
      @input="handleChange"
      id="document-number"
      class="in-user-input"
    />
    <div v-if="docNumberError" class="error-message">
      Ingresa un numero de documento valido.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DocumentNumber: "",
      docNumberError: false,
      isValidDocumentNumber: false,
    };
  },
  methods: {
    handleChange(event) {
      const inputText = event.target.value;
      const isValid = /^\d+$/.test(inputText);

      this.isValidDocumentNumber = isValid;
      this.DocumentNumber = inputText;

      if (isValid) {
        this.docNumberError=false;
        this.$emit("documentoValido", true);
      } else {
        this.docNumberError=true;
        this.$emit("documentoValido", false);
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
.document-number-container{
  margin-top: 3%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
</style>
