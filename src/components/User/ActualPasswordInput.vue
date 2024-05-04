<template>
    <div class ="actualp-input-container">
        <label for = "actual-password" class="lbl-actual-password-in"> Contraseña actual: </label>
        <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            placeholder="******************** "
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

</style>