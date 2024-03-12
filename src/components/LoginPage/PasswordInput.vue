<template>
  <div>
    <label for="password" class="lbl-user-login">Contraseña:</label>
    <input
      :type="showPassword ? 'text' : 'password'"
      id="password"
      :value="password"
      @input="handlePasswordChange"
      class="in-user-login"
    />

    <label for="showPassword" class="lbl-user-login">
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

<style></style>
