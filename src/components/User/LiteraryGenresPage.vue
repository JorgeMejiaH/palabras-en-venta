<template>
    <navbar/>
    <div class ='LiteraryGenresUser-background'>
        <options/>
      <div class = 'LiteraryGenresUser-container'>
          <div class = 'personalinfo-edit'>
              <router-link to ='/user-info'>
                <h1 class = 'txt-genre-edit-back'>< informacion personal / Géneros literarios </h1>
              </router-link>
              <h6> Edición</h6>
          </div>
          <h1> Géneros Literarios</h1>
          <div class = 'LiteraryGenresUser-selectcontainer'>           
              <div class = 'LiteraryGenresUser-item'>
                <div v-for="(genre, index) in genres" :key="index" class="item" @click="toggleSelection(genre)">
                  <div :class="{'selected': selectedGenres.includes(genre)}"></div>
                  <img :src="getImagePath(genre)" :alt="`${genre} genre`" class = 'item-image-genre'>
                      <div class = 'checkbox-genres-container'>
                        <h5 class="genre-name-txt">{{ genre }}</h5>
                        <input type="checkbox" :class="'checkbox-GenresUser-' + genre.toLowerCase()" v-model="selectedGenres" :value="genre">
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </template>
  
<script>
  
import Navbar from '../Navbar/Navbar.vue';
import Options from '../Options.vue';
export default {
  components: { Navbar, Options },
  data() {
    return {
      genres: ['Filosofía', 'Historia', 'Acción y Aventura', 'Infantil y juvenil', 'Ciencia ficción', 'Fantasía', 'Política', 'Antologías', 'Ficción clásica', 'Psicología', 'Lingüistica', 'Cuentos'],
      selectedGenres: [], // Array para almacenar los géneros seleccionados
    };
  },
  methods: {
    toggleSelection(genre) {
      // Toggle para agregar o quitar el índice del género seleccionado
      if (this.selectedGenres.includes(genre)){
        this.selectedGenres = this.selectedGenres.filter(selectedGenre => selectedGenre !== genre);

      } else {
        this.selectedGenres.push(genre);;
      }
    },
    getImagePath(genre) {
      return require(`@/assets/${genre.toLowerCase()}Books.png`);
    }
  },
};
</script>

  
  <style>
  .genre-name-txt{
    color: black;
  }
  .LiteraryGenresUser-background{
      background-image: url(/src/assets/UserInfoBackground.jpg);
      display: flex;
      height: 150lvh;
  }
  
  .LiteraryGenresUser-container{
      display: flex;
      flex-direction: column;
      border-style: groove;
      border-radius: 30px;
      background-color: white;
      width: 80%;
  }
  .LiteraryGenresUser-selectcontainer{
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    width: 90%;
    border-style:ridge;
  }
  .LiteraryGenresUser-item{
      display: flex;
      flex-wrap: wrap;
      margin-left: 5%;  
  }

  .selected img {
  border: 5px solid red; /* Puedes ajustar el color y el grosor del borde aquí */
}

  .LiteraryGenresUser-selected{
      display: flex;
      flex-wrap: wrap;
      border-bottom: 2px ridge ;
  }
  .item{
      display: flex;
      flex-direction: column;
      border: 2px ridge ;
      margin: 2%;
      height: 20lvh;
      width: 35lvh;
  }
  .item-image-genre{
      height: 70%;
      margin: 5%;
      ;
  }
    
  .item-image-ficcion{
    height: 100%;
    ;
  }

  .item-image-fantasía{
    height: 100%;
    ;

  }
  .item-image-Política{
    height: 100%;
    ;

  }
  .txt-genre-edit-back{
    font-size: 100%;
  }
  
  .checkbox-genres-container{
      display: flex;
      margin-left: 2%;
      margin-right: 2%;
      height: 5lvh;
      justify-content: space-between;
  }
  
  </style>