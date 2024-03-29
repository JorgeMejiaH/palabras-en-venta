<template>
  <div>
    <sign-up-header />
    <div class="register-container">
      <div class="first-column">
        <h1 class="txt-welcome-sign-up">¡Bienvenido!</h1>
        <h2 class="txt-register">Crea tu cuenta</h2>
        <user-names-last-names />
        <date-input />
        <place-of-birth />
        <user-direction />
        <user-gender />
      </div>
      <div class="second-column">
        <div class="link-container">
          <p class="txt-not-account">¿Ya tienes cuenta?</p>
          <router-link to="/login" class="link-login">
            Ingresa Aquí
          </router-link>
        </div>
        <document-type />
        <document-number />
        <user-email />
        <username-input-sign-up />
        <password-input-sign-up />
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
  },
};
</script>

<style>
.txt-welcome-sign-up {
  text-align: end;
  margin-right: 32%;
  margin-top: 15%;
  font-size: 220%;
  color: #3b63a8;
  font-weight: bold;
  z-index: 1;
}
.txt-register {
  text-align: end;
  margin-top: 0;
  margin-right: 28%;
  font-size: 201%;
  font-weight: bold;
}
.register-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.second-column {
  margin-top: 10%;
}
</style>
