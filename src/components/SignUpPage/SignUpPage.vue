<template>
  <div class="background-container">
    <sign-up-header />
    <div class="register-container">
      <div class="first-column">
        <h1 class="txt-welcome-sign-up">¡Bienvenido!</h1>
        <h2 class="txt-register">Crea tu cuenta</h2>
        <user-names-last-names @validNames="validarNombres" />
        <date-input @fechaValida="validarFecha" />
        <place-of-birth @validBirthPlace="validarLugarNacimiento" />
        <user-gender @validGenre="validarGenero" />
        <spam-checkbox />
      </div>
      <div class="second-column">
        <div class="link-container">
          <p class="txt-not-account">¿Ya tienes cuenta?</p>
          <router-link to="/login" class="link-login">
            Ingresa Aquí
          </router-link>
        </div>
        <document-type @tipoDocumentoValido="validarTipoDocumento" />
        <document-number @documentoValido="validarDocumento" />
        <user-email @validEmail="validarEmail" />
        <username-input-sign-up @validUsername="validarUsername" />
        <password-input-sign-up @contraseñaValida="validarContraseña" />
      </div>
    </div>
    <div class="genre-container">
      <h1 class="genre-title">Escoge uno o más géneros</h1>
      <h2 class="genre-subtitle">
        Esto nos ayudará a recomendarte obras o autores que te gusten
      </h2>
      <div class="genre-select-container">
        <div
          v-for="genre in literary_genres"
          :key="genre.uuid"
          class="genre-selection-item"
          @click="toggleSelection(genre)"
        >
          <div :class="{ selected: selectedGenres.includes(genre.uuid) }"></div>
          <img
            :src="genre.image"
            :alt="`${genre.name} genre`"
            class="genre-image"
          />
          <div class="checkbox-genres-container">
            <h5 class="genre-name-txt">{{ genre.name }}</h5>
            <input
              type="checkbox"
              :class="'checkbox-GenresUser-' + genre.name.toLowerCase()"
              v-model="selectedGenres"
              :value="genre.uuid"
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
          :disabled="!validationForm"
          @click="registerProcess"
        >
          Finalizar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpHeader from "@/components/SignUpPage/SignUpHeader.vue";
import UserNamesLastNames from "./UserNamesLastNames.vue";
import DateInput from "./DateInput.vue";
import PlaceOfBirth from "./PlaceOfBirth.vue";
import UserDirection from "./UserDirection.vue";
import DocumentType from "./DocumentType.vue";
import DocumentNumber from "./DocumentNumber.vue";
import UsernameInputSignUp from "./UsernameInputSignUp.vue";
import PasswordInputSignUp from "./PasswordInputSignUp.vue";
import UserEmail from "./UserEmail.vue";
import UserGender from "./UserGender.vue";
import SpamCheckbox from "./SpamCheckbox.vue";
import axios from 'axios';
import hostMixin from "@/mixins/host.js";

export default {
  mixins: [hostMixin],
  components: {
    SignUpHeader,
    UserNamesLastNames,
    DateInput,
    PlaceOfBirth,
    UserDirection,
    DocumentType,
    DocumentNumber,
    UsernameInputSignUp,
    PasswordInputSignUp,
    UserEmail,
    UserGender,
    SpamCheckbox,
  },
  data() {
    return {

      message: "",

      fechaValida: false,
      documentoValido: false,
      tipoDocumentoValido: false,
      validPassword: false,
      validNames: false,
      validBirthPlace: false,
      validGenre: false,
      validEmail: false,
      validUsername: false,

      fecha: false,
      documento: false,
      tipoDocumento: false,
      Password: false,
      Names: false,
      BirthPlace:false,
      Genre: false,
      Email: false,
      Username: false,
      spam: false,
      literary_genres: [],
      selectedGenres: [],
    };
  },
  beforeMount(){
    // this.fetchDocumentTypes();
    console.log("Creating");
    this.getBooksGenres();
  },
  computed: {
    validationForm() {
      return (
        this.fechaValida &&
        this.documentoValido &&
        this.tipoDocumentoValido &&
        this.validPassword &&
        this.validNames &&
        this.validBirthPlace &&
        this.validGenre &&
        this.validEmail &&
        this.validUsername &&
        this.selectedGenres.length > 0
      );
    },
    OneCategorySelected() {
      return this.selectedGenres.length > 0;
    },
  },
  methods: {
    closeMessage() {
      this.message = null;
    },
    checkboxValue(Valid) {
      console.log(Valid)
      this.spam = Valid;
    },
    validarFecha(Valid) {
      console.log(Valid)
      this.fechaValida = Valid.is_valid;
      this.fecha = Valid.select_date;
    },
    validarDocumento(Valid) {
      console.log(Valid)
      this.documentoValido = Valid.is_valid;
      this.documento = Valid.document;
    },
    validarTipoDocumento(Valid) {
      console.log(Valid)
      this.tipoDocumentoValido = Valid.is_valid;
      this.tipoDocumento = Valid.type_value;
    },
    validarContraseña(Valid) {
      console.log(Valid)
      this.validPassword = Valid.is_valid;
      this.password = Valid.password;
    },
    validarNombres(Valid){
      console.log(Valid)
      this.validNames = Valid.is_valid;
      this.Names = {
        name: Valid.name,
        last_name: Valid.last_name
      }
    },
    validarLugarNacimiento(Valid){
      console.log(Valid)
      this.validBirthPlace = Valid.is_valid;
      this.BirthPlace = Valid.city_id;
    },
    validarDireccion(Valid){
      console.log(Valid)
      this.validDirection = Valid.is_valid;
      this.Direction = Valid.direction;
    },
    validarGenero(Valid){
      console.log(Valid)
      this.validGenre = Valid.is_valid;
      this.Genre = Valid.gender;
    },
    validarEmail(Valid){
      console.log(Valid)
      this.validEmail = Valid.is_valid;
      this.Email = Valid.email;
    },
    validarUsername(Valid){
      console.log(Valid)
      this.validUsername = Valid.is_valid;
      this.Username = Valid.username;
    },
    navigateToLogin() {
      this.$router.push('/');
    },
    getBooksGenres(){
      axios.get(hostMixin.data().host + 'api/literary_genres', {
      headers: {
            }
          })
        .then(response => {
          this.literary_genres = response.data;
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    },
    navigateToGenreEdit(){
      this.$router.push("/genre-edit");
    },
    toggleSelection(category) {
      // Toggle para agregar o quitar el uuid del género seleccionado
    const index = this.selectedGenres.indexOf(category.uuid);
    if (index > -1) {
      // Si el uuid ya está en selectedGenres, lo elimina
      this.selectedGenres.splice(index, 1);
    } else {
      // Si el uuid no está en selectedGenres, lo añade
      this.selectedGenres.push(category.uuid);
    }
    console.log(this.selectedGenres)
    },
    getImagePath(genre) {
      return require(`@/assets/${genre.toLowerCase()}Books.png`);
    },
    registerProcess() {
      const data = {
        first_name: this.Names.name,
        last_name: this.Names.last_name,
        birth_date: this.fecha,
        place_birth: this.BirthPlace,
        document_type: this.tipoDocumento,
        document_number: this.documento,
        username: this.Username,
        email: this.Email,
        password: this.password,
        want_spam: this.spam,
        gender: this.Genre,
        notice_selection: this.spam,
        literary_genres: this.selectedGenres
      }

      console.log(data)
      axios.post(hostMixin.data().host + 'api/register/', data)
        .then(response => {
          console.log(response.data)
          this.navigateToLogin()
        })
        .catch(error => {
          console.error('Error fetching data:', error.response.data);
          this.message = error.response.data;
        });
    },
  },
};
</script>

<style>
.link-login{
  color: black;
  font-weight: bold;
  text-decoration: none;
}
.background-container {
  background-image: url(/src/assets/registerBackground.png);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
}
.register-container {
  display: flex;
  background-color: white;
  border-radius: 20px;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-right: 5%;
  margin-left: 5%;
  padding: 1%;
}
.first-column,
.second-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.txt-welcome-sign-up {
  font-size: 220%;
  color: #3b63a8;
  font-weight: bold;
  margin-top: 5%;
  margin-right: 30%;
}
.txt-register {
  margin-right: 30%;
  font-size: 185%;
  font-weight: bold;
}
.in-user-input {
  width: 90%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  justify-self: center;
}
.link-container {
  margin-right: 5%;
}
.btn-continue {
  margin-top: 5%;
  width: 40%;
  height: 5%;
  border-radius: 8px;
  font-weight: bold;
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

