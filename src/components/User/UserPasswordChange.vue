<template>
  <div class="user-pass-change-background">
    <Navbar />
    <Options routeOptionsContainer="user-password-change-options-route" />
    <div class="edit-password-container">
      <div Class="change-password-container">
        <div class="personalinfo-edit">
          <router-link to="/user-info" class="txt-personalinfo-password">
            <img src="@/assets/angle-left.png" alt="flecha-izquierda" />
            Informacion personal / Contraseña
          </router-link>
          <img
            src="@/assets/pen-to-square.png"
            alt="edit-symbol"
            class="user-password-edit-edit-symbol"
          />
          <p class="user-password-edit-edit-txt">Edición</p>
        </div>
        <h2 class="txt-Change-Password">Cambiar Contraseña</h2>

        <div class="passwords-inputs-container">
          <div class="actualp-container">
            <div class="actualp-input-container">
              <label for="actual-password" class="lbl-actual-password-in">
                Contraseña actual:
              </label>
              <input
                :type="showActualPassword ? 'text' : 'password'"
                id="password"
                placeholder="******************** "
                :value="actualPassword"
                @input="handleActualPasswordChange"
                class="actual-pass-in"
              />
              <label for="showPassword" class="lbl-user-show">
                Mostrar Contraseña:
                <input
                  id="showActualPassword"
                  type="checkbox"
                  :checked="showActualPassword"
                  @change="toggleShowActualPassword"
                />
              </label>
            </div>
          </div>
          <div class="new-password-inputs">
            <div class="new-password-container">
              <label for="password" class="lbl-new-user-password"
                >Nueva contraseña:</label
              >
              <input
                :type="showNewPassword ? 'text' : 'password'"
                id="password"
                placeholder="******************** "
                :value="newPassword"
                @input="handleNewPasswordChange"
                class="new-user-password-input"
              />

              <label for="showPassword" class="lbl-user-show">
                Mostrar Contraseña:
                <input
                  id="showNewPassword"
                  type="checkbox"
                  :checked="showNewPassword"
                  @change="toggleShowNewPassword"
                />
              </label>
            </div>
            <div class="verify-new-password-container">
              <label for="password" class="lbl-new-user-sign-up"
                >Repetir nueva contraseña:</label
              >
              <input
                :type="verifyPassword ? 'text' : 'password'"
                placeholder="******************** "
                id="password"
                :value="verifiedPassword"
                @input="handleVerifyPasswordChange"
                class="verify-new-user-password-input"
              />

              <label for="showPassword" class="lbl-user-show">
                Mostrar Contraseña:
                <input
                  id="showPassword"
                  type="checkbox"
                  :checked="showVerifiedPassword"
                  @change="toggleVerifiedShowPassword"
                />
              </label>
            </div>
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
import Navbar from "../Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Cookies from 'js-cookie';
import hostMixin from "@/mixins/host.js";
export default {
  mixins: [hostMixin],
  components: {
    Options,
    Navbar,
    Footer,
  },
  data() {
    return {
      actualPassword: "",
      showActualPassword: false,
      newPassword: "",
      showNewPassword: false,
      verifiedPassword: "",
      showVerifiedPassword: false,
    };
  },
  beforeMount() {
    // this.fetchDocumentTypes();
    console.log("Creating");
    this.sessionInfo = JSON.parse(this.getTokenFromCookie());
  },
  getTokenFromCookie() {
      // Retrieve the token from the cookie
      return Cookies.get("loginToken");
    },
  methods: {
    handleActualPasswordChange(event) {
      this.password = event.target.value;
    },
    toggleShowActualPassword() {
      this.showPassword = !this.showPassword;
    },
    handleNewPasswordChange(event) {
      this.password = event.target.value;
    },
    toggleShowNewPassword() {
      this.showPassword = !this.showPassword;
    },
    handleVerifyPasswordChange(event) {
      this.password = event.target.value;
    },
    toggleShowVerifiedPassword() {
      this.showPassword = !this.showPassword;
    },
    updapePassword(){
      const data={
        user: this.sessionInfo.user.uuid,
        new_password: this. verifiedPassword
      }
      console.log(data)
      axios.post(hostMixin.data().host + 'api/password/change_password/', data)
        .then(response => {
          console.log(response.data)
          this.saveAndNavigateToUserInfo()
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
.user-password-edit-edit-symbol {
  widows: 20px;
  height: auto;
}
.user-password-edit-edit-txt {
  color: black;
}
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
.txt-personalinfo-password {
  font-family: Raleway;
  color: black;
  margin-right: auto;
  margin-left: 0;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.txt-personalinfo-password img {
  margin-right: 5px;
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
.verify-new-password-container{
    display: flex;
    flex: 1;
    flex-direction: column;
}

.verify-new-user-password-input{
    margin-top: 2.5%;
    width: 40lvh;
    height: 3.8lvh;
    border-radius: 8px;
}
.lbl-new-user-sign-up{
    font-family: Raleway;
    font-weight: bold;
    font-size: 2lvh;
    display: flex;   
}
.actualp-input-container{
  display: flex;
  flex-direction: column;
}

.actual-pass-in{
  margin-top: 2.5%;
  width: 40lvh;
  height: 3.8lvh;
  border-radius: 8px;
}
.lbl-actual-password-in{
  font-family: Raleway;
  font-weight: bold;
  font-size: 2lvh;
  display: flex;
}
.new-password-container{
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 5%;
}
.new-user-password-input{
    margin-top: 2.5%;
    width: 40lvh;
    height: 3.8lvh;
    border-radius: 8px;
}
.lbl-new-user-password{
    font-family: Raleway;
    font-weight: bold;
    font-size: 2lvh;
    display: flex;
}
</style>
