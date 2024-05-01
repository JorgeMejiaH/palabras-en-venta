<template>
  <div class="background-container">
    <sign-up-header />
    <div>
      <div class="register-container">
        <div class="first-column">
          <h1 class="txt-welcome-sign-up">¡Bienvenido!</h1>
          <h2 class="txt-register">Crea tu cuenta</h2>
          <user-names-last-names @validNames="validarNombres"/>
          <date-input @fechaValida="validarFecha" />
          <place-of-birth @validBirthPlace="validarLugarNacimiento"/>
          <user-direction @validDirection="validarDireccion"/>
          <user-gender @validGenre="validarGenero"/>
          <spam-checkbox />
        </div>
        <div class="second-column">
          <div class="link-container">
            <p class="txt-not-account">¿Ya tienes cuenta?</p>
            <router-link to="/login" class="link-login">
              Ingresa Aquí
            </router-link>
          </div>
          <document-type @tipoDocumentoValido="validarTipoDocumento" />
          <document-number @documentoValido="validarDocumento" />
          <user-email @validEmail="validarEmail"/>
          <username-input-sign-up @validUsername="validarUsername"/>
          <password-input-sign-up @contraseñaValida="validarContraseña" />
          <button class="btn-continue" :disabled="!formularioValido" @click="navigateToGenreSelection">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpHeader from "@/components/SignUpPage/SignUpHeader.vue";
import UserNamesLastNames from "./UserNamesLastNames.vue";
import DateInput from "./DateInput.vue";
import PlaceOfBirth from "./PlaceOfBirth.vue";
import UserDirection from "./UserDirection.vue";
import DocumentType from "./DocumentType.vue";
import DocumentNumber from "./DocumentNumber.vue";
import UsernameInputSignUp from "./UsernameInputSignUp.vue";
import PasswordInputSignUp from "./PasswordInputSignUp.vue";
import UserEmail from "./UserEmail.vue";
import UserGender from "./UserGender.vue";
import SpamCheckbox from "./SpamCheckbox.vue";
export default {
  components: {
    SignUpHeader,
    UserNamesLastNames,
    DateInput,
    PlaceOfBirth,
    UserDirection,
    DocumentType,
    DocumentNumber,
    UsernameInputSignUp,
    PasswordInputSignUp,
    UserEmail,
    UserGender,
    SpamCheckbox,
  },
  data() {
    return {
      fechaValida: false,
      documentoValido: false,
      tipoDocumentoValido: false,
      validPassword: false,
      validNames: false,
      validBirthPlace:false,
      validDirection: false,
      validGenre: false,
      validEmail: false,
      validUsername: false,
    };
  },
  computed: {
    formularioValido() {
      return (
        this.fechaValida &&
        this.documentoValido &&
        this.tipoDocumentoValido &&
        this.validPassword &&
        this.validNames &&
        this.validBirthPlace &&
        this.validDirection &&
        this.validGenre &&
        this.validEmail &&
        this.validUsername
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
    validarContraseña(Valid) {
      this.validPassword = Valid;
    },
    validarNombres(Valid){
      this.validNames = Valid;
    },
    validarLugarNacimiento(Valid){
      this.validBirthPlace = Valid;
    },
    validarDireccion(Valid){
      this.validDirection = Valid;
    },
    validarGenero(Valid){
      this.validGenre = Valid;
    },
    validarEmail(Valid){
      this.validEmail = Valid;
    },
    validarUsername(Valid){
      this.validUsername = Valid;
    },
    navigateToGenreSelection() {
      this.$router.push('/genre-select');
    },
  },
};
</script>

<style>
.background-container {
  background-image: url(/src/assets/registerBackground.png);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.register-container {
  display: flex;
  background-color: white;
  border-radius: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 1%;
}
.first-column,
.second-column{
  flex: 1;
}
.txt-welcome-sign-up {
  font-size: 220%;
  color: #3b63a8;
  font-weight: bold;
  margin-top: 5%;
  margin-right: 30%;
}
.txt-register {
  margin-top: -5%;
  margin-right: 30%;
  font-size: 185%;
  font-weight: bold;
}
.second-column {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.in-user-input {
  width: 90%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  justify-self: center;
}
.link-container {
  margin-right: 5%;
}
.btn-continue {
  margin-top: 5%;
  width: 40%;
  height: 5%;
  border-radius: 8px;
  font-weight: bold;
}
</style>
