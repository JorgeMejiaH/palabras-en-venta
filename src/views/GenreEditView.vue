<template>
  <navbar />
  <div class="LiteraryGenresUser-background">
    <options routeOptionsContainer="user-genre-edit-routes" />
    <div class="LiteraryGenresUser-container">
      <div class="personalinfo-edit">
        <router-link to="/user-info" class="txt-genre-edit-back">
          <img src="@/assets/angle-left.png" alt="flecha-izquierda" />
          informacion personal / Géneros literarios
        </router-link>
        <h6>Edición</h6>
      </div>
      <h1>Géneros Literarios</h1>
      <div class="LiteraryGenresUser-selectcontainer">
        <div class="LiteraryGenresUser-item">
          <div
            v-for="genre in literary_genres"
            :key="genre.uuid"
            class="item"
            @click="toggleSelection(genre)"
          >
            <div :class="{ selected: selectedGenres.includes(genre.uuid) }"></div>
            <img
              :src="genre.image"
              :alt="`${genre.name} genre`"
              class="item-image-genre"
            />
            <div class="checkbox-genres-container">
              <h5 class="genre-name-txt">{{ genre.name }}</h5>
              <input
                type="checkbox"
                :class="'checkbox-GenresUser-' + genre.name.toLowerCase()"
                v-model="selectedGenres"
                :value="genre.id"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="btn-save-genre-change-container">
        <button type="submit" class="btn-save-genre-change" :disabled="!validationForm" @click="saveLiteraryGenres">
          Guardar cambios
        </button>
      </div>
    </div>
    <Footer containerClass="footer-container-user-genre-edit" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Options from "@/components/User/Options.vue";
import Footer from "@/components/Footer.vue";
import Cookies from "js-cookie";
import hostMixin from "@/mixins/host.js";
import axios from "axios";
export default {
  components: { Navbar, Options, Footer },
  mixins: [hostMixin],
  beforeMount() {
    // this.fetchDocumentTypes();
    console.log("Creating");
    this.sessionInfo = JSON.parse(this.getTokenFromCookie());
    this.getUserInfo();
    this.getBooksGenres();
  },
  data() {
    return {
      literary_genres: [],
      selectedGenres: [], // Array para almacenar los géneros seleccionados
      Genre: false,
      sessionInfo: null,
      userInfo: {
        first_name: null,
        last_name: null,
        birth_date: null,
        place_birth: null,
        document_type: null,
        document_number: null,
        want_spam: null,
        gender: null,
        notice_selection: null,
        literary_genres: null,
        is_active: null,
      },
    };
  },
  computed:{
    validationForm(){
      return this.selectedGenres.length > 0;
    },
  },
  methods: {
    getTokenFromCookie() {
      // Retrieve the token from the cookie
      return Cookies.get("loginToken");
    },
    toggleSelection(category) {
      // Toggle para agregar o quitar el uuid del género seleccionado
      const index = this.selectedGenres.indexOf(category.id);
      if (index > -1) {
        // Si el uuid ya está en selectedGenres, lo elimina
        this.selectedGenres.splice(index, 1);
      } else {
        // Si el uuid no está en selectedGenres, lo añade
        this.selectedGenres.push(category.id);
      }
      console.log(this.selectedGenres);
    },
    checkboxValue(Valid) {
      console.log(Valid);
      this.spam = Valid;
    },
    validarGenero(Valid) {
      console.log(Valid);
      this.validGenre = Valid.is_valid;
      this.Genre = Valid.gender;
    },
    getUserInfo() {
      axios
        .get(hostMixin.data().host + "api/user/" + this.sessionInfo.user.uuid)
        .then((response) => {
          this.userInfo = response.data;
          this.selectedGenres = this.userInfo.literary_genres || [];
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    },
    getBooksGenres() {
      axios
        .get(hostMixin.data().host + "api/literary_genres", {
          headers: {},
        })
        .then((response) => {
          this.literary_genres = response.data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    saveLiteraryGenres(){
      const data = {
        first_name: this.userInfo.first_name,
        last_name: this.userInfo.last_name,
        birth_date: this.userInfo.birth_date,
        place_birth: this.userInfo.place_birth,
        document_type: this.userInfo.document_type,
        document_number: this.userInfo.document_number,
        want_spam: this.userInfo.want_spam,
        gender: this.userInfo.gender,
        notice_selection: this.userInfo.notice_selection,
        literary_genres: this.selectedGenres,
      }
      axios.patch(hostMixin.data().host + "/api/user/" + this.sessionInfo.user.uuid + "/", data)
      .then((response) => {
        console.log(response.data)
        this.$router.push("/user-info")
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response.data);
      })
    },
  },
};
</script>

<style>
.user-genre-edit-routes {
  position: absolute;
  background-color: rgba(34, 33, 33, 0.6);
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 45%;
  left: 0%;
}
.genre-name-txt {
  color: black;
}
.LiteraryGenresUser-background {
  background-image: url(/src/assets/UserInfoBackground.jpg);
  display: flex;
  height: 150lvh;
}

.LiteraryGenresUser-container {
  position: absolute;
  right: 0;
  top: 30%;
  display: flex;
  flex-direction: column;
  border-style: groove;
  border-radius: 30px;
  background-color: white;
  width: 80%;
}
.LiteraryGenresUser-selectcontainer {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 90%;
  border-style: ridge;
}
.LiteraryGenresUser-item {
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
}

.selected img {
  border: 5px solid red; /* Puedes ajustar el color y el grosor del borde aquí */
}

.LiteraryGenresUser-selected {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 2px ridge;
}
.item {
  display: flex;
  flex-direction: column;
  border: 2px ridge;
  margin: 2%;
  height: 20lvh;
  width: 35lvh;
}
.item-image-genre {
  height: 70%;
  margin: 5%;
}

.item-image-ficcion {
  height: 100%;
}

.item-image-fantasía {
  height: 100%;
}
.item-image-Política {
  height: 100%;
}
.txt-genre-edit-back {
  font-size: 100%;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.checkbox-genres-container {
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
  height: 5lvh;
  justify-content: space-between;
}
.footer-container-user-genre-edit {
  position: relative;
  top: 95%;
  width: 100vw;
  height: 35%;
}
.btn-save-genre-change:not(:disabled):hover {
  background-color: #050834; /* Cambia el color de fondo cuando pasas el cursor */
  color: white;
  cursor: pointer;
}
</style>
