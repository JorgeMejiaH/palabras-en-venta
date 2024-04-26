<template>
  <div class="user-info-edit-background">
    <navbar />
    <div class="user-info-edit-container">
      <div class="user-info-edit-navigator">
        <router-link to="/user-info"
          >Información personal/Contraseña</router-link
        >
        <p>Edición</p>
      </div>
      <h1>Información personal</h1>
      <div class="user-info-edit-input-container">
        <div class="user-info-edit-inputs">
          <user-names-last-names @validNames="validarNombres" />
          <date-input @fechaValida="validarFecha" />
          <place-of-birth @validBirthPlace="validarLugarNacimiento" />
          <user-email @validEmail="validarEmail" />
          <document-type @tipoDocumentoValido="validarTipoDocumento" />
          <document-number @documentoValido="validarDocumento" />
          <spam-checkbox />
        </div>
        <div class="user-info-edit-btn">
          <button class="user-info-btn-save" :disabled="!formularioValido" @click="navigateToUserInfo">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import DateInput from "../SignUpPage/DateInput.vue";
import PlaceOfBirth from "../SignUpPage/PlaceOfBirth.vue";
import UserNamesLastNames from "../SignUpPage/UserNamesLastNames.vue";
import UserEmail from "../SignUpPage/UserEmail.vue";
import DocumentType from "../SignUpPage/DocumentType.vue";
import DocumentNumber from "../SignUpPage/DocumentNumber.vue";
import SpamCheckbox from "../SignUpPage/SpamCheckbox.vue";
export default {
  components: {
    Navbar,
    UserNamesLastNames,
    DateInput,
    PlaceOfBirth,
    UserEmail,
    DocumentType,
    DocumentNumber,
    SpamCheckbox,
  },
  data() {
    return {
      fechaValida: false,
      documentoValido: false,
      tipoDocumentoValido: false,
      validNames: false,
      validBirthPlace: false,
      validEmail: false,
    };
  },
  computed: {
    formularioValido() {
      return (
        this.fechaValida &&
        this.documentoValido &&
        this.tipoDocumentoValido &&
        this.validNames &&
        this.validBirthPlace &&
        this.validEmail
      );
    },
  },
  methods: {
    validarFecha(Valid) {
      this.fechaValida = Valid;
    },
    validarDocumento(Valid) {
      this.documentoValido = Valid;
    },
    validarTipoDocumento(Valid) {
      this.tipoDocumentoValido = Valid;
    },
    validarNombres(Valid) {
      this.validNames = Valid;
    },
    validarLugarNacimiento(Valid) {
      this.validBirthPlace = Valid;
    },
    validarGenero(Valid) {
      this.validGenre = Valid;
    },
    validarEmail(Valid) {
      this.validEmail = Valid;
    },
    navigateToUserInfo() {
      this.$router.push('/user-info');
    },
  },
};
</script>

<style>
.user-info-edit-background {
  background-image: url(/src/assets/UserInfoBackground.jpg);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  width: 100vw; /* Ancho igual al 100% del viewport */
  height: 100vh; /* Altura igual al 100% del viewport */
  overflow-y: auto; /* Evita que el contenido se desborde fuera del contenedor */
  position: relative;
  margin: 0;
  padding: 0;
}
.user-info-edit-container {
  background-color: white;
  width: 60%;
  position: absolute;
  right: 0;
  top: 30%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 3%;
}
.user-info-btn-save {
  margin-right: 5%;
  width: 60%;
  height: 50px;
  border-radius: 8px;
}
.user-info-btn-save:not(:disabled):hover {
  background-color: #050834; /* Cambia el color de fondo cuando pasas el cursor */
  color: white;
  cursor: pointer;
}
.user-info-edit-input-container{
    display: grid;
    grid-template-columns: 60% 1fr;
    border: 1px solid gray;
    border-radius: 50px;
    padding-top: 2%;
    padding-bottom: 2%;
}
</style>
