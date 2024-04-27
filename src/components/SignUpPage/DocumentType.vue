<template>
  <div class="document-type-container">
    <label for="DocumentType" class="lbl-document-type"
      >Tipo de documento:</label
    >
    <input
      type="text"
      :value="DocumentType"
      @input="handleChange"
      id="document-type"
      class="in-user-input"
    />
    <div v-if="docTypeError" class="error-message">
      Ingresa un tipo de documento valido.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DocumentType: "",
      docTypeError: false,
      isValidDocumentType: false,
    };
  },
  methods: {
    handleChange(event) {
      const inputText = event.target.value;
      const isValid = /^[a-zA-Z\s]+$/.test(inputText);

      this.isValidDocumentType = isValid;
      this.DocumentType = inputText;

      if (isValid) {
        this.docTypeError = false;
        this.$emit("tipoDocumentoValido", true)
      } else {
        this.docTypeError=true;
        this.$emit("tipoDocumentoValido", false)
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
.document-type-container{
  margin-top: 10%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
</style>
