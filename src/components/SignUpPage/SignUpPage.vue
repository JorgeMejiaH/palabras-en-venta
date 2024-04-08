<template>
  <div class="background-container">
    <sign-up-header />
    <div>
      <div class="register-container">
        <div class="first-column">
          <h1 class="txt-welcome-sign-up">¡Bienvenido!</h1>
          <h2 class="txt-register">Crea tu cuenta</h2>
          <user-names-last-names />
          <date-input @fechaValida="validarFecha" />
          <place-of-birth />
          <user-direction />
          <user-gender />
          <spam-checkbox />
        </div>
        <div class="second-column">
          <div class="link-container">
            <p class="txt-not-account">¿Ya tienes cuenta?</p>
            <router-link to="/login" class="link-login">
              Ingresa Aquí
            </router-link>
          </div>
          <document-type @tipoDocumentoValido="validarTipoDocumento"/>
          <document-number @documentoValido="validarDocumento" />
          <user-email />
          <username-input-sign-up />
          <password-input-sign-up />
          <button class="btn-continue" :disabled="!formularioValido">
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
    };
  },
  computed: {
    formularioValido() {
      return this.fechaValida && this.documentoValido && this.tipoDocumentoValido;
    },
  },
  methods: {
    validarFecha(Valid) {
      this.fechaValida = Valid;
    },
    validarDocumento(Valid){
      this.documentoValido = Valid;
    },
    validarTipoDocumento(Valid){
      this.tipoDocumentoValido = Valid;
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
  height: 92vh;
}
.register-container {
  display: flex;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  border-radius: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 1%;
  width: 105%;
  height: 110%;
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
