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
    </div>
  </div>
</template>

<script>
import SignUpHeader from "@/components/SignUpPage/SignUpHeader.vue";
import UserNamesLastNames from "./UserNamesLastNames.vue";
import DateInput from "./DateInput.vue";
export default {
  components: { SignUpHeader, UserNamesLastNames, DateInput },
};
</script>

<style></style>
