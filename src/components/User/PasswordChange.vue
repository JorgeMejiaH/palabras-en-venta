.
<template>
  <div class="user-pass-change-background">
    <Options />
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
            <div class="actualp-input-container">
              <label for="actual-password" class="lbl-actual-password-in">
                Contraseña actual:
              </label>
              <input
                :type="showPassword ? 'text' : 'password'"
                id="actual-password"
                placeholder="******************** "
                :v-model="password"
                @input="handlePasswordChange"
                class="actual-pass-in"
              />
            </div>
          </div>
          <div class="new-password-inputs">
            <div class="new-password-container">
              <label for="password" class="lbl-new-user-password"
                >Nueva contraseña:</label
              >
              <input
                :type="showPassword ? 'text' : 'password'"
                id="new-password"
                placeholder="******************** "
                v-model="newPassword"
                @input="emitPassword"
                class="new-user-password-input"
              />

              <label for="showPassword" class="lbl-user-show">
                Mostrar Contraseña:
                <input
                  id="showPassword"
                  type="checkbox"
                  :checked="showPassword"
                  @change="toggleShowPassword"
                />
              </label>
            </div>
            <div class="verify-new-password-container">
              <label for="password" class="lbl-new-user-sign-up"
                >Repetir nueva contraseña:</label
              >
              <input
                :type="showPassword ? 'text' : 'password'"
                placeholder="******************** "
                id="repeatPassword"
                v-model="repeatPassword"
                @input="checkPasswordMatch"
                class="verify-new-user-password-input"
              />

              <label for="showPassword" class="lbl-user-show">
                Mostrar Contraseña:
                <input
                  id="showPassword"
                  type="checkbox"
                  :checked="showPassword"
                  @change="toggleShowPassword"
                />
              </label>
              <div
                v-if="!passwordsMatch && repeatPassword !== ''"
                class="error-message"
              >
                Las contraseñas no coinciden
              </div>
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
  </div>

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
</template>

<script>
import Options from "../Options.vue";
export default {
  components: { Options },
  data() {
    return {
      password: "",
      newPassword: "",
      repeatPassword: "",
      showPassword: false,
      passwordsMatch: true,
    };
  },
  methods: {
    handlePasswordChange(event) {
      this.password = event.target.value;
    },
    emitPassword() {
      this.newPassword = event.target.value;
      this.checkPasswordMatch();
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    checkPasswordMatch() {
      this.passwordsMatch = this.newPassword === this.repeatPassword;
    },
  },
};
</script>

<style>
.user-pass-change-background {
  display: flex;
  height: 90lvh;
  width: 100%;
  background-image: url(/src/assets/UserInfoBackground.jpg);
}

.edit-password-container {
  display: flex;
  justify-content: flex-end;
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
.actualp-input-container {
  display: flex;
  flex-direction: column;
}

.actual-pass-in {
  margin-top: 2.5%;
  width: 40lvh;
  height: 3.8lvh;
  border-radius: 8px;
}
.lbl-actual-password-in {
  font-family: Raleway;
  font-weight: bold;
  font-size: 2lvh;
  display: flex;
}
.verify-new-password-container {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.verify-new-user-password-input {
  margin-top: 2.5%;
  width: 40lvh;
  height: 3.8lvh;
  border-radius: 8px;
}
.lbl-new-user-sign-up {
  font-family: Raleway;
  font-weight: bold;
  font-size: 2lvh;
  display: flex;
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
  color: black;
  text-decoration: none;
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

.new-password-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 5%;
}
.new-user-password-input {
  margin-top: 2.5%;
  width: 40lvh;
  height: 3.8lvh;
  border-radius: 8px;
}
.lbl-new-user-password {
  font-family: Raleway;
  font-weight: bold;
  font-size: 2lvh;
  display: flex;
}
</style>
