<template>
    <div class ="actualp-input-container">
        <label for = "actual-password" class="lbl-actual-password-in"> Contraseña actual: </label>
        <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            :value = "password"
            @input="handlePasswordChange"
            class = "actual-pass-in"
        />

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

    


</style>