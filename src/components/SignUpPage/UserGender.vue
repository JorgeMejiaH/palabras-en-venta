<template>
  <div>
    <label for="gender">Género:</label>
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

<style scoped></style>
