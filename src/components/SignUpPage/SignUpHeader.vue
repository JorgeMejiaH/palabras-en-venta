<template>
  <div class="bck-header">
      <img src="@/assets/logo.png" alt="Logo de la pagina" class="img-logo" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bck-header {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #5c6972;
  width: 100%;
  height: 10%;
  z-index: -1;
}
.img-logo {
  position: absolute;
  top: 0.5%;
  left: 1%;
  width: 10%;
  height: auto;
}
.navbar {
  color: white;
  margin-left: -70%;
  margin-top: 2%;
}
</style>
