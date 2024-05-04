<template>
  <div class="gender-container">
    <label for="gender" class="lbl-gender">Género:</label>
    <select v-model="selectedGender" id="gender" @change="validateGender">
      <option value="" disabled selected>Seleccione su género</option>
      <option value="M">Masculino</option>
      <option value="W">Femenino</option>
      <option value="O">Otro</option>
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
        this.$emit("validGenre", {
          is_valid: false,
          gender: this.selectedGender
        });
      } else {
        this.$emit("validGenre", {
          is_valid: true,
          gender: this.selectedGender
        });
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
