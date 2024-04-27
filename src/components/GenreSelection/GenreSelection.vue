<template>
  <div class="genre-background-container">
    <sign-up-header />
    <div class="genre-container">
      <h1 class="genre-title">Escoge uno o más géneros</h1>
      <h2 class="genre-subtitle">Esto nos ayudará a recomendarte obras o autores que te gusten</h2>
      <div class="genre-select-container">
        <div class="genre-column-1">
          <filosofy-books @Selected="CategorySelected" />
          <history-books @Selected="CategorySelected" />
          <juvenile-books @Selected="CategorySelected" />
          <politics-books @Selected="CategorySelected" />
          <psicology-books @Selected="CategorySelected" />
          <language-books @Selected="CategorySelected" />
        </div>
        <div class="genre-column-2">
          <action-adventure-books @Selected="CategorySelected" />
          <cience-fiction-books @Selected="CategorySelected" />
          <child-stories-books @Selected="CategorySelected" />
          <fantasy-books @Selected="CategorySelected" />
          <anthology-books @Selected="CategorySelected" />
          <classic-fiction @Selected="CategorySelected" />
        </div>
      </div>
      <div class="genre-button-container">
        <h2 class="genre-condition">Debes seleccionar al menos una categoría para continuar</h2>
        <button class="genre-btn-end" :disabled="!OneCategorySelected" @click="navigateToLogin">
          Finalizar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpHeader from "../SignUpPage/SignUpHeader.vue";
import ActionAdventureBooks from "./ActionAdventureBooks.vue";
import AnthologyBooks from "./AnthologyBooks.vue";
import ChildStoriesBooks from "./ChildStoriesBooks.vue";
import CienceFictionBooks from "./CienceFictionBooks.vue";
import ClassicFiction from "./ClassicFiction.vue";
import FantasyBooks from "./FantasyBooks.vue";
import FilosofyBooks from "./FilosofyBooks.vue";
import HistoryBooks from "./HistoryBooks.vue";
import JuvenileBooks from "./JuvenileBooks.vue";
import LanguageBooks from "./LanguageBooks.vue";
import PoliticsBooks from "./PoliticsBooks.vue";
import PsicologyBooks from "./PsicologyBooks.vue";

export default {
  components: {
    SignUpHeader,
    FilosofyBooks,
    HistoryBooks,
    ChildStoriesBooks,
    PoliticsBooks,
    PsicologyBooks,
    LanguageBooks,
    ActionAdventureBooks,
    JuvenileBooks,
    CienceFictionBooks,
    AnthologyBooks,
    ClassicFiction,
    FantasyBooks,
  },
  data() {
    return {
      categoriesSelected: {
        FilosofyBooks: false,
        HistoryBooks: false,
        ChildStoriesBooks: false,
        PoliticsBooks: false,
        PsicologyBooks: false,
        LanguageBooks: false,
        ActionAdventureBooks: false,
        JuvenileBooks: false,
        CienceFictionBooks: false,
        AnthologyBooks: false,
        ClassicFiction: false,
        FantasyBooks: false,
      },

    };
  },
  computed: {
    OneCategorySelected() {
      return Object.values(this.categoriesSelected).some(value => value);
    },
  },
  methods: {
    CategorySelected(categoryName, isSelected) {
      this.categoriesSelected[categoryName] = isSelected;
    },
    navigateToLogin() {
      this.$router.push('/login');
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
  gap: 5px;
}
.genre-column-1,
.genre-column-2 {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 5px;
}
.genre-box-container {
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
.genre-cover {
  margin-top: 3%;
  width: 90%; /* Ancho fijo */
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
}
.genre-title, .genre-subtitle {
  text-align: left; /* Alinea el texto a la izquierda */
  margin-left: 5%;
}
.genre-title{
  font-weight: bold;
}
.genre-button-container{
  display: flex;
  justify-content: flex-end; /* Alinea el contenido a la derecha */
  align-content: center;
}
.genre-btn-end{
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
.genre-condition{
  margin-right: 2%;
  color: #5C6972;
;
}
</style>
