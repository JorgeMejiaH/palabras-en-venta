<template>
  <div class="gender-container">
    <label for="gender" class="lbl-gender">Género:</label>
    <select v-model="selectedGender" id="gender" @change="validateGender">
      <option value="" disabled selected>Seleccione su género</option>
      <option value="male">Masculino</option>
      <option value="female">Femenino</option>
      <option value="other">Otro</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedGender: "",
    };
  },
  methods: {
    validateGender() {
      if (!this.selectedGender) {
        this.$emit("validGenre", false);
      } else {
        this.$emit("validGenre", true);
      }
    }
  }
};
</script>

<style>
.gender-container{
  margin-top: 4%;
  margin-bottom: 4%;
}
.lbl-gender{
  margin-right: 2%;
}
</style>
