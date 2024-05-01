<template>
  <div>
    <img src="@/assets/logo.png" alt="Logo de la pagina" class="img-logo" />
    <img
      src="@/assets/LoginBackground.png"
      alt="Fondo de la pagina"
      class="login-background"
    />
    <img
      src="@/assets/WhiteBackground.png"
      alt="fondo blanco"
      class="white-background"
    /> 
    <div class="link-container">
      <p class="txt-not-account">¿Aún no tienes cuenta?</p>
      <router-link to="/sign-up" class="link-sign-up">Regístrate</router-link>
    </div>
    <p></p>
    <h1 class="txt-welcome">¡Bienvenido!</h1>
    <h2 class="txt-login">Ingresa a tu cuenta</h2>
    <form @submit.prevent="handleSubmit" class="block-inputs" name="login-form">
      <UsernameInput />
      <PasswordInput />
      <button type="submit" class="btn-login" :disabled="!validUser" @click="navigateToUserInfo">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import PasswordInput from "@/components/LoginPage/PasswordInputLogin.vue";
import UsernameInput from "@/components/LoginPage/UsernameInputLogin.vue";
export default {
  components: { UsernameInput, PasswordInput },
  data(){
    return {
      validUser: true,
    };
  },
  methods: {
    navigateToUserInfo() {
      this.$router.push('/user-info');
    },
  },
};
</script>

<style>
.in-user-login {
  width: 30%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
}

.lbl-user-login {
  display: block;
  margin-bottom: 0;
  font-size: 100%;
}
.img-logo {
  position: absolute;
  top: 0.5%;
  left: 1%;
  width: 15%;
  height: auto;
}

.link-container {
  text-align: end;
  margin-top: 1%;
}

.txt-not-account,
.link-sign-up {
  display: inline;
  margin-right: 0.5%;
}
.link-sign-up {
  font-weight: bold;
  color: #2c3e50;
}
.login-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 55%;
  height: 100%;
  z-index: -2;
  background: #050835;
}

.white-background {
  position: absolute;
  top: 0;
  left: 50%;
  width: 55%;
  height: 100%;
  z-index: -1;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}
.txt-welcome {
  text-align: end;
  margin-right: 32%;
  margin-top: 15%;
  font-size: 220%;
  color: #3b63a8;
  font-weight: bold;
  z-index: 1;
}

.txt-login {
  text-align: end;
  margin-top: 0;
  margin-right: 28%;
  font-size: 201%;
  font-weight: bold;
}
.block-inputs {
  margin-left: 30%;
}

.btn-login {
  margin-top: 5%;
  width: 30%;
  height: 15%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #050835;
  color: white;
  cursor: pointer;
}
</style>
