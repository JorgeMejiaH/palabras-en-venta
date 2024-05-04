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
          <spam-checkbox  @checkbox_value="checkboxValue"/>
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
          <button class="btn-continue" :disabled="!formularioValido" @click="registerProcess">
            Crear
          </button>
        </div>
        
      </div>
    </div>
    <div v-if="message" id="message-container" class="alert alert-danger alert-dismissible fade show" role="alert">
          {{ message }}
          <button type="button" class="close" @click="closeMessage">
            <span aria-hidden="true">&times;</span>
          </button>
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
import axios from 'axios';
import hostMixin from "@/mixins/host.js";

export default {
  mixins: [hostMixin],
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

      message: "",

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

      fecha: false,
      documento: false,
      tipoDocumento: false,
      Password: false,
      Names: false,
      BirthPlace:false,
      Direction: false,
      Genre: false,
      Email: false,
      Username: false,
      spam: false,
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
    closeMessage() {
      this.message = null;
    },
    checkboxValue(Valid) {
      console.log(Valid)
      this.spam = Valid;
    },
    validarFecha(Valid) {
      console.log(Valid)
      this.fechaValida = Valid.is_valid;
      this.fecha = Valid.select_date;
    },
    validarDocumento(Valid) {
      console.log(Valid)
      this.documentoValido = Valid.is_valid;
      this.documento = Valid.document;
    },
    validarTipoDocumento(Valid) {
      console.log(Valid)
      this.tipoDocumentoValido = Valid.is_valid;
      this.tipoDocumento = Valid.type_value;
    },
    validarContraseña(Valid) {
      console.log(Valid)
      this.validPassword = Valid.is_valid;
      this.password = Valid.password;
    },
    validarNombres(Valid){
      console.log(Valid)
      this.validNames = Valid.is_valid;
      this.Names = {
        name: Valid.name,
        last_name: Valid.last_name
      }
    },
    validarLugarNacimiento(Valid){
      console.log(Valid)
      this.validBirthPlace = Valid.is_valid;
      this.BirthPlace = Valid.city_id;
    },
    validarDireccion(Valid){
      console.log(Valid)
      this.validDirection = Valid.is_valid;
      this.Direction = Valid.direction;
    },
    validarGenero(Valid){
      console.log(Valid)
      this.validGenre = Valid.is_valid;
      this.Genre = Valid.gender;
    },
    validarEmail(Valid){
      console.log(Valid)
      this.validEmail = Valid.is_valid;
      this.Email = Valid.email;
    },
    validarUsername(Valid){
      console.log(Valid)
      this.validUsername = Valid.is_valid;
      this.Username = Valid.username;
    },
    navigateToLogin() {
      this.$router.push('/');
    },
    registerProcess() {
      const data = {
        first_name: this.Names.name,
        last_name: this.Names.last_name,
        birth_date: this.fecha,
        place_birth: this.BirthPlace,
        document_type: this.tipoDocumento,
        document_number: this.documento,
        username: this.Username,
        email: this.Email,
        password: this.password,
        want_spam: this.spam,
        gender: this.Genre,
        notice_selection: false,
        literary_genres: []
      }

      console.log(data)
      axios.post(hostMixin.data().host + 'api/register/', data)
        .then(response => {
          console.log(response.data)
          this.navigateToLogin()
        })
        .catch(error => {
          console.error('Error fetching data:', error.response.data);
          this.message = error.response.data;
        });
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
  flex-direction: column;
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
