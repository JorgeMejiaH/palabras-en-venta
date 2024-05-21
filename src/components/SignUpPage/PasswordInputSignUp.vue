<template>
  <div class="password-container">
    <label for="password" class="lbl-user-sign-up">Contraseña:</label>
    <input
      :type="showPassword ? 'text' : 'password'"
      id="password"
      :value="password"
      @input="handlePasswordChange"
      class="in-user-input"
    />
    <div v-if="passwordError" class="error-message">
      {{ passwordErrorMessage }}
    </div>
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
</template>

<script>
export default {
  data() {
    return {
      password: "",
      showPassword: false,
      passwordError: true,
      validPassword: false,
      passwordErrorMessage: "",
    };
  },
  methods: {
    handlePasswordChange(event) {
      this.password = event.target.value;
      const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()<>#=-_+])[A-Za-z\d@$!%*?&=()<>#-_+]{8,}$/;
      if (!passwordRegex.test(this.password)) {
        this.passwordError = true;
        this.passwordErrorMessage =
          "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un digito y un caracter especial.";
        this.validPassword=false;
      } else {
        this.passwordError = false;
        this.passwordErrorMessage = "";
        this.validPassword=true;
      }
      this.$emit("contraseñaValida", this.validPassword)
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style>
.password-container {
  margin-top: 3%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.lbl-user-show {
  margin-top: 2%;
}
.error-message {
  color: red;
  margin-top: 5px;
}
</style>
