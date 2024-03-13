<template>
  <div>
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
    <div v-if="!isValidDocumentNumber" class="error-message">
      Ingresa un numero de documento valido.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DocumentNumber: "",
      isValidDocumentNumber: true,
    };
  },
  methods: {
    handleChange(event) {
      const inputText = event.target.value;
      const isValid = /^\d+$/.test(inputText);

      this.isValidDocumentNumber = isValid;

      if (isValid) {
        this.DocumentNumber = inputText;
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
