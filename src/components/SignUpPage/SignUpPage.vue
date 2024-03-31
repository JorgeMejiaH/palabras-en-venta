<template>
  <sign-up-header />
  <div class="background-container">
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
.background-container {
  background-image: url(/src/assets/registerBackground.png);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  border-radius: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
}
.txt-welcome-sign-up {
  font-size: 220%;
  color: #3b63a8;
  font-weight: bold;
  margin-top: 5%;
  margin-right: 45%;
}
.txt-register {
  margin-top: -5%;
  margin-right: 45%;
  font-size: 201%;
  font-weight: bold;
}
.second-column {
  margin-top: 10%;
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
</style>
