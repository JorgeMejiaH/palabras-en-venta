<template>
  <div class="genre-background-container">
    <sign-up-header />

    <div class="genre-container">
      <h1 class="genre-title">Escoge uno o más géneros</h1>
      <h2 class="genre-subtitle">
        Esto nos ayudará a recomendarte obras o autores que te gusten
      </h2>
      <div class="genre-select-container">
        <div
          v-for="(genre, index) in genres"
          :key="index"
          class="genre-selection-item"
          @click="toggleSelection(genre)"
        >
          <div :class="{ selected: selectedGenres.includes(genre) }"></div>
          <img
            :src="getImagePath(genre)"
            :alt="`${genre} genre`"
            class="genre-image"
          />
          <div class="checkbox-genres-container">
            <h5 class="genre-name-txt">{{ genre }}</h5>
            <input
              type="checkbox"
              :class="'checkbox-GenresUser-' + genre.toLowerCase()"
              v-model="selectedGenres"
              :value="genre"
            />
          </div>
        </div>
      </div>
      <div class="genre-button-container">
        <h2 class="genre-condition">
          Debes seleccionar al menos una categoría para continuar
        </h2>
        <button
          class="genre-btn-end"
          :disabled="!OneCategorySelected"
          @click="navigateToLogin"
        >
          Finalizar
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import SignUpHeader from "../SignUpPage/SignUpHeader.vue";

export default {
  components: {
    SignUpHeader,
  },
  data() {
    return {
      genres: [
        "Filosofía",
        "Historia",
        "Acción y Aventura",
        "Infantil y juvenil",
        "Ciencia ficción",
        "Fantasía",
        "Política",
        "Antologías",
        "Ficción clásica",
        "Psicología",
        "Lingüistica",
        "Cuentos",
      ],
      selectedGenres: [],
    };
  },
  computed: {
    OneCategorySelected() {
      return this.selectedGenres.length > 0;
    },
  },
  methods: {
    navigateToLogin() {
      this.$router.push("/login");
    },
    toggleSelection(genre) {
      // Toggle para agregar o quitar el índice del género seleccionado
      if (this.selectedGenres.includes(genre)) {
        this.selectedGenres = this.selectedGenres.filter(
          (selectedGenre) => selectedGenre !== genre
        );
      } else {
        this.selectedGenres.push(genre);
      }
    },
    getImagePath(genre) {
      return require(`@/assets/${genre.toLowerCase()}Books.png`);
    },
  },
};
</script>

<style>
.genre-background-container {
  background-image: url(/src/assets/registerBackground.png);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  width: 100vw; /* Ancho igual al 100% del viewport */
  height: 100vh; /* Altura igual al 100% del viewport */
  overflow-y: auto; /* Evita que el contenido se desborde fuera del contenedor */
}
.genre-container {
  margin-top: 10%;
  margin-bottom: 10%;
  margin-right: 5%;
  margin-left: 5%;
  border-radius: 40px;
  background-color: white;
  padding-top: 2%;
  padding-bottom: 2%;
}
.genre-select-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas de tamaño igual */
}
.genre-selection-item {
  border: 1px solid gray; /* Borde gris por defecto */
  margin-bottom: 1%;
  width: 70%;
  height: 90%;
  border-radius: 8px;
  justify-self: center;
  cursor: pointer;
}

.genre-box-container.selected {
  border: 2px solid #050834;
}
.genre-image {
  margin-top: 3%;
  width: 90%; /* Ancho fijo */
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
}
.genre-title,
.genre-subtitle {
  text-align: left; /* Alinea el texto a la izquierda */
  margin-left: 5%;
}
.genre-title {
  font-weight: bold;
}
.genre-button-container {
  display: flex;
  justify-content: flex-end; /* Alinea el contenido a la derecha */
  align-content: center;
}
.genre-btn-end {
  margin-right: 5%;
  width: 8%;
  height: 50px;
  border-radius: 8px;
}
.genre-btn-end:not(:disabled):hover {
  background-color: #050834; /* Cambia el color de fondo cuando pasas el cursor */
  color: white;
  cursor: pointer;
}
.genre-condition {
  margin-right: 2%;
  color: #5c6972;
}
</style>
