<template>
  <div class="login-container">
    <div class="login-background-container">
      <img src="@/assets/logo.png" alt="Logo de la pagina" class="login-img-logo" />
    </div>
    <div class="login-white-background-container">
      <div class="link-container">
        <p class="txt-not-account">¿Aún no tienes cuenta?</p>
        <router-link to="/sign-up" class="link-sign-up">Regístrate</router-link>
      </div>
      <p></p>
      <h1 class="txt-welcome">¡Bienvenido!</h1>
      <h2 class="txt-login">Ingresa a tu cuenta</h2>
      <form
        @submit.prevent="handleSubmit"
        class="block-inputs"
        name="login-form"
      >
        <UsernameInput />
        <PasswordInput />
        <button
          type="submit"
          class="btn-login"
          :disabled="!validUser"
          @click="navigateToUserInfo"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import PasswordInput from "@/components/LoginPage/PasswordInputLogin.vue";
import UsernameInput from "@/components/LoginPage/UsernameInputLogin.vue";
export default {
  components: { UsernameInput, PasswordInput },
  data() {
    return {
      validUser: true,
    };
  },
  methods: {
    navigateToUserInfo() {
      this.$router.push("/user-info");
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-background-container {
  background-image: url(/src/assets/LoginBackground.png);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  width: 60vw;
  height: 100vh;
  position: relative;
  margin: 0;
  padding: 0;
  justify-content: center;
}
.login-white-background-container {
  flex-basis: 60%;
  background-color: white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.login-img-logo {
  position: absolute;
  top: 2%;
  left: 1%;
  width: 25%;
  height: auto;
}
</style>
