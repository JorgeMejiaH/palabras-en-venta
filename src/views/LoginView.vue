<template>
  <div>
    <div class="logo-img" @click="navigateToHome">
      <img src="@/assets/logo.png" alt="Logo de la pagina" class="img-logo" />
    </div>
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
      <UsernameInput @SendUsername="setUsername" />
      <PasswordInput @SendPassword="setPassword" />
      <router-link to="/recovery-email" class="forgot-password-router">¿Olvidaste tu contraseña?</router-link>
      <button type="submit" class="btn-login" :disabled="!validUser" @click="makeLogin">Iniciar Sesión</button>
    </form>

    <div v-if="message" class="alert alert-danger alert-dismissible fade show" role="alert">
      {{ message }}
      <button type="button" class="close" @click="closeMessage">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import PasswordInput from "@/components/LoginPage/PasswordInputLogin.vue";
import UsernameInput from "@/components/LoginPage/UsernameInputLogin.vue";
import hostMixin from "@/mixins/host.js";
import axios from 'axios';
import Cookies from 'js-cookie';


export default {
  components: { UsernameInput, PasswordInput },
  mixins: [hostMixin],
  data(){
    return {
      validUser: true,
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    saveTokenToCookie(token) {
      Cookies.set('loginToken', token, { expires: 1 });
    },
    navigateToUserInfo() {
      this.$router.push('/user-info');
    },
    setUsername(username) {
      this.username = username;
    },
    setPassword(password) {
      this.password = password;
    },
    closeMessage() {
      // Close the message pop-up box
      this.message = null;
    },
    makeLogin(){
     const data = {
          username: this.username,
          password: this.password
      }

      axios.post(hostMixin.data().host + 'api/token/', data)
        .then(response => {
          console.log(response.data)
          this.saveTokenToCookie(JSON.stringify(response.data))
          this.navigateToUserInfo()
        })
        .catch(error => {
          console.error('Error fetching data:', error.response.data);
          this.message = error.response.data.detail;
        });
    },
    navigateToHome(){
      this.$router.push("/")
    },
  },
};
</script>

<style>
.forgot-password-router{
  margin-top: 3%;
  color: black;
  text-decoration: none;
  display: block;
}
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
  margin-top: 3%;
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