<template>
  <div class="document-type-container">
    <label for="DocumentType" class="lbl-document-type"
      >Tipo de documento:</label
    >
    <select v-model="DocumentType" @change="handleChange" id="birth-place" class="in-user-input">
      <option value="null" disabled >Selecciona una tipo de documento</option>
      <option v-for="DocumentType in DocumentTypes" :key="DocumentType.value" :value="DocumentType.value">{{ DocumentType.description }}</option>
    </select>
    <div v-if="docTypeError" class="error-message">
      Ingresa un tipo de documento valido.
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import hostMixin from "@/mixins/host.js";

export default {
  mixins: [hostMixin],
  beforeMount(){
    this.fetchDocumentTypes();
  },
  data() {
    return {
      DocumentTypes: [],
      DocumentType: "",
      docTypeError: false,
      isValidDocumentType: false,
    };
  },
  methods: {
    fetchDocumentTypes(){
      axios.get(hostMixin.data().host + '/api/choices/users/user/document_type')
        .then(response => {
          // Update the cities array with the fetched data
          this.DocumentTypes = response.data;
        })
        .catch(error => {
          console.error('Error fetching cities:', error);
        });
    },
    handleChange(event) {
      const typeValue = event.target.value;
      console.log(typeValue)

      if(typeValue == 'null'){
        this.docTypeError = true;
      }else{
        this.docTypeError = false;
      }

      this.$emit("tipoDocumentoValido", {
        type_value: typeValue,
        is_valid: typeValue != 'null' ? true : false
      });
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
