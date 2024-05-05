<template>
  <sign-up-header/>
  <div class = 'passwordpage-background'>
    <div class = 'passwordchanging-container'>
        <div class = 'passwordchangetxt-container'>
            <h1 class = 'passchange-txt'>Cambiar contraseña</h1>
            <h2 class = 'passchange2-txt'>Ingresa tu nueva contraseña</h2>
        </div>
        <div class = 'passwordchange-inputs-container'>
            <new-password-input/>
        <div class = 'passwordchange-inputs-container2'>
          <verify-password-input/>
        </div>
        </div>
        <div class = 'conditionsforpassword-container'>
            <h4 class = 'password-contidions-txt'>. Su contraseña no debe asemejarse a su informacion personal
            <br>. Su contraseña debe contener 8 Caracteres
            <br>. Su contraseña no puede ser una clave utilizada anteriormente
            <br>. Su contraseña no puede ser completamente numerica</h4>
        </div>
        <div class="btn-changingpass-container">
            <button type="submit" class="btn-save-password-change-page">Guardar cambios</button>
        </div>


    </div>

  </div>
</template>

<script>
import SignUpHeader from "../SignUpPage/SignUpHeader.vue";
import NewPasswordInput from "../User/NewPasswordInput.vue";
import VerifyPasswordInput from "../User/VerifyPasswordInput.vue";
export default {
  components: { NewPasswordInput, VerifyPasswordInput, SignUpHeader },
  methods: {
    safeNewPassword(){
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.passwordpage-background {
  display: flex;
  height: 100vh;
  margin-left: 1.5%;
  margin-top: 8%;
}

.passwordchanging-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 30px;
  border-style: ridge;
}

.passwordchangetxt-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3%;
  margin-left: 2.7%;
}
.passchange-txt {
  font-size: 190%;
  justify-self: flex-start;
  margin-bottom: 0.5%;
}
.passchange2-txt {
  font-size: 100%;
  margin: 0;
}
.passwordchange-inputs-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 25lvh;
}
.passwordchange-inputs-container2 {
  display: flex;
  margin-left: 5%;
}
.password-contidions-txt {
  text-align: left;
  font-size: 130%;
  color: #545353;
}
.conditionsforpassword-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5.5%;
  flex: 1;
}

.btn-changingpass-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 2.7%;
  height: 10lvh;
  align-items: center;
}
.btn-save-password-change-page {
  width: 10%;
  height: 35%;
  font-family: Raleway;
  font-size: 100%;
  background-color: #050835;
  color: white;
  border-radius: 7px;
}
</style>
