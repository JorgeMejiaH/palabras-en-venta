<template>
  <div>
    <sign-up-header />
    <div class="link-container">
      <p class="txt-not-account">¿Ya tienes cuenta?</p>
      <router-link to="/login" class="link-login">Ingresa Aquí</router-link>
    </div>
    <div class="register-block">
      <h1 class="txt-welcome-sign-up">¡Bienvenido!</h1>
      <h2 class="txt-register">Crea tu cuenta</h2>
      <user-names-last-names />
      <date-input />
      <place-of-birth />
      <user-direction />
      <user-gender />
      <document-type />
      <document-number />
      <user-email />
      <username-input />
      <password-input />
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
import UsernameInput from "../LoginPage/UsernameInput.vue";
import PasswordInput from "../LoginPage/PasswordInput.vue";
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
    UsernameInput,
    PasswordInput,
    UserEmail,
    UserGender,
  },
};
</script>

<style scoped></style>
