<template>
  <div class="gender-container">
    <label for="gender" class="lbl-gender">Género:</label>
    <select v-model="selectedGender" id="gender">
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
