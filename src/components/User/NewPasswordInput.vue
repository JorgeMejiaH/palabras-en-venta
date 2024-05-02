<template>
    <div class="new-password-container">
      <label for="password" class="lbl-new-user-password">Nueva contraseña:</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        id="password"
        placeholder="******************** "
        :value="password"
        @input="handlePasswordChange"
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