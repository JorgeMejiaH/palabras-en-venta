<template>
  <div class="book-container">
    <img
      :src="getImagePath(TituloLibro)"
      alt="imagen-libro"
      class="img-libro"
    />
    <h3>{{ TituloLibro }}</h3>
    <h5>{{ NombreAutor }}</h5>
    <h4>{{ Precio }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TituloLibro: "Nombre",
      NombreAutor: "Autor",
      Precio: "Precio",
    };
  },
  methods: {
    getImagePath(TituloLibro) {
      return require(`@/assets/${TituloLibro.toLowerCase()}Books.png`);
    },
  },
};
</script>

<style></style>
