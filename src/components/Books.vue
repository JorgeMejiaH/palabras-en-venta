<template>
  <div class="book-container">
    <img
      :src="getBookImagePath(TituloLibro)"
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
  props: {
    TituloLibro: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      NombreAutor: "Autor",
      Precio: "Precio",
    };
  },
  methods: {
    getBookImagePath(TituloLibro) {
      const formattedTitle = TituloLibro.toLowerCase().replace(/\s+/g, '');
      return require(`@/assets/${formattedTitle}.png`);
    },
  },
};
</script>

<style></style>
