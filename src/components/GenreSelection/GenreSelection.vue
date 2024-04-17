<template>
  <sign-up-header />
  <div class="genre-container">
    <h1>Escoge uno o más géneros</h1>
    <h2>Esto nos ayudará a recomendarte obras o autores que te gusten</h2>
    <div class="genre-select-container">
      <div class="genre-column-1">
        <filosofy-books />
        <history-books />
        <juvenile-books />
        <politics-books />
        <psicology-books />
        <language-books />
      </div>
      <div class="genre-column-2">
        <action-adventure-books />
        <cience-fiction-books />
        <child-stories-books />
        <fantasy-books />
        <anthology-books />
        <classic-fiction />
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
};
</script>

<style>
.genre-container{
  margin: 10%;
  background-color: antiquewhite;
}
.genre-select-container {
  display: flex;
}
.genre-column-1,
.genre-column-2 {
  flex-grow: 1; 
}
.genre-box-container {
  width: 50%;
  border: 1px solid gray; /* Borde gris por defecto */
  margin-bottom: 1%;
}

.genre-box-container.selected {
  border: 2px solid #050834;
}
.genre-cover {
  width: 20%; /* Ancho fijo */
  object-fit: cover;
  border-radius: 10px;
}
</style>
