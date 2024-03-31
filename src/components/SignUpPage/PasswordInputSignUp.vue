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
.password-container{
  margin-top: 3%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.lbl-user-show{
  margin-top: 2%;
}
</style>
