<template>
  <div class="user-pass-change-background">
    <Navbar />
    <Options routeOptionsContainer="user-password-change-options-route" />
    <div class="edit-password-container">
      <div Class="change-password-container">
        <div class="personalinfo-edit">
          <router-link to="/user-info">
            <h1 class="txt-personalinfo-password">
              Informacion personal / Contraseña
            </h1>
          </router-link>
          <h1 class="txt-edicion">Edicion</h1>
        </div>
        <h2 class="txt-Change-Password">Cambiar Contraseña</h2>

        <div class="passwords-inputs-container">
          <div class="actualp-container">
            <actual-password-input />
          </div>
          <div class="new-password-inputs">
            <new-password-input />
            <verify-password-input />
          </div>
          <div class="btn-save-password-change-container">
            <button type="submit" class="btn-save-password-change">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer containerClass="footer-container-user-change-password" />
  </div>
</template>

<script>
import Options from "./Options.vue";
import ActualPasswordInput from "./ActualPasswordInput.vue";
import NewPasswordInput from "./NewPasswordInput.vue";
import VerifyPasswordInput from "./VerifyPasswordInput.vue";
import Navbar from "../Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    ActualPasswordInput,
    NewPasswordInput,
    VerifyPasswordInput,
    Options,
    Navbar,
    Footer,
  },
};
</script>

<style>
.user-password-change-options-route {
  position: absolute;
  background-color: rgba(34, 33, 33, 0.6);
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 35%;
  left: 2.5%;
}
.footer-container-user-change-password {
  position: relative;
  top: 75%;
}
.user-pass-change-background {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: url(/src/assets/UserInfoBackground.jpg);
  background-position: center;
  background-color: #050835;
  margin: 0;
  padding: 0;
  position: relative;
}

.edit-password-container {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 25%;
}

.change-password-container {
  background-color: white;
  width: 151lvh;
  height: 62.5lvh;
  display: flex;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  flex-direction: column;
  border-left: 3px ridge;
  border-top: 3px ridge;
  border-bottom: 3px ridge;
}

.passwords-inputs-container {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;
  height: 65%;
  border-style: ridge;
  background-color: white;
  border-radius: 30px;
}

.personalinfo-edit {
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
  justify-content: space-between;
  border-bottom: 2px ridge;
}

.actualp-container {
  display: flex;
  margin-left: 5%;
  align-items: center;
  width: 45%;
  flex: 1;
}

.txt-Change-Password {
  display: flex;
  margin-left: 4%;
}

.new-password-inputs {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  flex: 1;
}

.btn-save-password-change-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 95%;
  flex: 0.7;
}

.txt-personalinfo-password {
  font-size: 100%;
  font-family: Raleway;
}
.txt-edicion {
  font-size: 100%;
  font-family: Raleway;
}
.btn-save-password-change {
  width: 20%;
  height: 45%;
  font-family: Raleway;
  font-size: 110%;
  background-color: #050835;
  color: white;
  border-radius: 7px;
}
</style>
