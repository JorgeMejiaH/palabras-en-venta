<template>
    <navbar/>
    <div class ='LiteraryGenresUser-background'>
        <options/>
      <div class = 'LiteraryGenresUser-container'>
          <div class = 'personalinfo-edit'>
              <router-link to ='/user-info'>
                <h1 class = 'txt-genre-edit-back'> informacion personal / Géneros literarios </h1>
              </router-link>
              <h6> Edición</h6>
          </div>
          <h1> Géneros Literarios</h1>
          <div class = 'LiteraryGenresUser-selectcontainer'>           
              <div class = 'LiteraryGenresUser-item'>
                  <div class="item">
                      <img src="@/assets/filosofyBooks.png" alt="filosofy genre" class = 'item-image-genre'>
                      <div class = 'checkbox-genres-container'>
                        <h5 class="genre-name-txt"> Filosofía</h5>
                        <input type="checkbox" class="checkbox-GenresUser-filosofia" >
                      </div>
                  </div>
                  <div class = 'item'>
                      <img src="@/assets/historyBooks.png" alt="history genre" class = 'item-image-genre'>
                      <div class = 'checkbox-genres-container'>
                        <h5 class="genre-name-txt"> Historia</h5>
                        <input type="checkbox" class="checkbox-GenresUser-historia" >
                      </div>
                  </div>
                  <div class = 'item'>
                      <img src="@/assets/acctionAdventureBooks.png" alt="action adventure genre" class = 'item-image-genre'>
                      <div class = 'checkbox-genres-container'>
                        <h5 class="genre-name-txt"> Acción y Aventura</h5>
                        <input type="checkbox" class="checkbox-GenresUser-aventura" >
                      </div>
                  </div>
                  <div class="item">
                      <img src="@/assets/juvenileBooks.png" alt="genero juvenil" class = 'item-image-genre' >
                      <div class = 'checkbox-genres-container'>
                          <h5 class="genre-name-txt"> Infantil y juvenil</h5>
                          <input type="checkbox" class="checkbox-GenresUser-juvenil" >
                      </div>
                  </div>
                  <div class = 'item'>
                        <img src="@/assets/cienceFictionBooks.png" alt="genero ficcion" class="item-image-genre">
                        <div class = 'checkbox-genres-container'>
                            <h5 class="genre-name-txt"> Ciencia ficción</h5>
                            <input type="checkbox" class="checkbox-GenresUser-ficcion" >
                        </div>
                    </div>
                    <div class = 'item'>
                        <img src="@/assets/fantasyBooks.png" alt="fantasia genero" class="item-image-genre">
                        <div class = 'checkbox-genres-container'>
                            <h5 class="genre-name-txt"> Fantasía</h5>
                            <input type="checkbox" class="checkbox-GenresUser-fantasía" >
                        </div>
                    </div>
                    <div class = 'item'>
                        <img src="@/assets/politicsBooks.png" alt="politics genre" class="item-image-genre">
                        <div class = 'checkbox-genres-container'>
                            <h5 class="genre-name-txt"> Política</h5>
                            <input type="checkbox" class="checkbox-GenresUser-Política" >
                        </div>
                    </div>
                    <div class = 'item'>
                        <img src="@/assets/anthologyBooks.png" alt="anthology genre" class="item-image-genre">
                        <div class = 'checkbox-genres-container'>
                            <h5 class="genre-name-txt"> Antologías</h5>
                            <input type="checkbox" class="checkbox-GenresUser-Antologías" >
                        </div>
                    </div>
                    <div class = 'item'>
                        <img src="@/assets/classicFictionBooks.png" alt="Classic fiction genre" class="item-image-genre">
                        <div class = 'checkbox-genres-container'>
                            <h5 class="genre-name-txt"> Ficción clásica</h5>
                            <input type="checkbox" class="checkbox-GenresUser-Clásica" >
                        </div>
                    </div>
                    <div class = 'item'>
                        <img src="@/assets/psicologyBooks.png" alt="psicology genre" class="item-image-genre">
                        <div class = 'checkbox-genres-container'>
                            <h5 class="genre-name-txt"> Psicología</h5>
                            <input type="checkbox" class="checkbox-GenresUser-psicología" >
                        </div>
                    </div>
                    <div class="item">
                        <img src="@/assets/languageBooks.png" alt="language genre" class="item-image-genre">
                        <div class = 'checkbox-genres-container'>
                            <h5 class="genre-name-txt"> Lingüistica</h5>
                            <input type="checkbox" class="checkbox-GenresUser-lingüistica" >
                        </div>
                    </div>
                    <div class = "item">
                        <img src="@/assets/childStoriesBooks.png" alt="child sotires genre" class="item-image-genre">
                        <div class = 'checkbox-genres-container'>
                            <h5 class="genre-name-txt"> Cuentos</h5>
                            <input type="checkbox" class="checkbox-GenresUser-cuentos" >
                        </div>

                    </div>
                  </div>
              </div>
          </div>
      </div>
  </template>
  
<script>
  
import Navbar from '../Navbar/Navbar.vue';
import Options from './Options.vue';
export default {
  components: { Navbar, Options },
  data() {
    return {
      selectedGenres: [], // Array para almacenar los géneros seleccionados
    };
  },
  methods: {
    toggleSelection(index) {
      // Toggle para agregar o quitar el índice del género seleccionado
      if (this.selectedGenres.includes(index)) {
        this.selectedGenres.splice(this.selectedGenres.indexOf(index), 1);
      } else {
        this.selectedGenres.push(index);
      }
    },
    isSelected(index) {
      // Verifica si un género está seleccionado
      return this.selectedGenres.includes(index);
    },
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

  .selected-item {
  border-width: 4px; /* Cambia el ancho del borde */
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