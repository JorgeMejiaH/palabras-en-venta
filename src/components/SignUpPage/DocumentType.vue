<template>
  <div>
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
    <div v-if="!isValidDocumentType" class="error-message">
      Ingresa un tipo de documento valido.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DocumentType: "",
      isValidDocumentType: true,
    };
  },
  methods: {
    handleChange(event) {
      const inputText = event.target.value;
      const isValid = /^[a-zA-Z\s]+$/.test(inputText);

      this.isValidDocumentType = isValid;

      if (isValid) {
        this.DocumentType = inputText;
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
