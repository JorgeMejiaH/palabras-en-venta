<template>
    <sign-up-header />
    <div class="passwordpage-background">
      <div class="passwordchanging-container">
        <div class="passwordchangetxt-container">
          <h1 class="passchange-txt">Cambiar contraseña</h1>
          <h2 class="passchange2-txt">Ingresa tu nueva contraseña</h2>
        </div>
        <div class="passwordchange-inputs-container">
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
          <div class="passwordchange-inputs-container2">
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
              <div v-if="showError" class="error-message">
                Ingresa un correo electrónico válido.
              </div>
            </div>
          </div>
        </div>
        <div class="conditionsforpassword-container">
          <h4 class="password-contidions-txt">
            . Su contraseña no debe asemejarse a su informacion personal <br />.
            Su contraseña debe contener 8 Caracteres <br />. Su contraseña no
            puede ser una clave utilizada anteriormente <br />. Su contraseña no
            puede ser completamente numerica
          </h4>
        </div>
        <div class="btn-changingpass-container">
          <button
            type="submit"
            class="btn-save-password-change-page"
            @click="saveNewPassword"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SignUpHeader from "@/components/SignUpPage/SignUpHeader.vue";
  import hostMixin from "@/mixins/host.js";
  import axios from "axios";
  
  export default {
    components: { SignUpHeader },
    mixins: [hostMixin],
    data() {
      return {
        newPassword: "",
        showNewPassword: false,
        verifiedPassword: "",
        showVerifiedPassword: false,
        userUUID: "",
        validationCode: "",
        showError: false,
      };
    },
    methods: {
      handleNewPasswordChange(event) {
        this.password = event.target.value;
      },
      toggleShowNewPassword() {
        this.showPassword = !this.showPassword;
      },
      handleVerifyPasswordChange(event) {
        this.verifiedPassword = event.target.value;
      },
      toggleShowVerifiedPassword() {
        this.showPassword = !this.showPassword;
      },
      saveNewPassword() {
        const data = {
          uuid_user: this.userUUID,
          password: this.verifiedPassword,
          validation_code: this.validationCode,
        };
        axios
          .post(hostMixin.data().host + "api/password/change_password/", data)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/login");
          })
          .catch((error) => {
            console.error("Error fetching password:", error.response.data);
            this.showError = true;
          });
      },
    },
    mounted() {
      this.userUUID = this.$route.query.userUUID;
      this.validationCode = this.$route.query.validationCode;
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