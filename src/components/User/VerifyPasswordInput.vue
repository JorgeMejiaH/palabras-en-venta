<template>
    <div class="verify-new-password-container">
      <label for="password" class="lbl-new-user-sign-up">Repetir nueva contraseña:</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        placeholder="******************** "
        id="password"
        :value="password"
        @input="handlePasswordChange"
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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: "",
        showPassword: false,
      };
    },
    methods: {
      handlePasswordChange(event) {
        this.password = event.target.value;
      },
      toggleShowPassword() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>

<style>
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


</style>