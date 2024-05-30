<template>
  <div class="user-info-edit-background">
    <navbar />
    <options routeOptionsContainer="user-info-edit-options-routes" />
    <div class="user-info-edit-container">
      <div class="user-info-edit-navigator">
        <router-link to="/user-info" class="user-info-edit-router">
          <img src="@/assets/angle-left.png" alt="flecha-izquierda" />
          Información personal/Contraseña
        </router-link>
        <img
          src="@/assets/pen-to-square.png"
          alt="edit-symbol"
          class="user-info-edit-edit-symbol"
        />
        <p class="user-info-edit-edit-txt">Edición</p>
      </div>
      <h1 class="user-info-edit-title">Información personal</h1>
      <div class="user-info-edit-input-container">
        <div class="user-info-edit-inputs">
          <div class="user-input-container">
            <label for="firstName" class="lbl-user-name">Nombres:</label>
            <input
              type="text"
              :value="nombre"
              @input="handleNamesLastnames"
              class="in-user-input-names"
              id="name"
            />
            <label for="lastName" class="lbl-user-lastname">Apellidos:</label>
            <input
              type="text"
              :value="apellido"
              @input="handleNamesLastnames"
              class="in-user-input-names"
              id="lastName"
            />
            <div v-if="nameErrorMessage" class="error-message">
              {{ nameErrorMessage }}
            </div>
          </div>
          <div class="date-input-container">
            <label for="dobPicker">Fecha de Nacimiento:</label>
            <input
              id="dobPicker"
              v-model="dob"
              :config="flatpickrConfig"
              @input="validateDob"
              class="date-input"
            />
            <div v-if="dobError" class="error-message">
              Ingresa una fecha de nacimiento válida.
            </div>
          </div>
          <div class="place-of-birth-container">
            <label for="PlaceOfBirth" class="lbl-birth-place"
              >Ciudad de nacimiento:</label
            >
            <select
              v-model="placeOfBirth"
              @change="handleCities"
              id="birth-place"
              class="in-user-input"
            >
              <option value="null" disabled>Selecciona una ciudad</option>
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{ city.name }}
              </option>
            </select>
            <div v-if="!isValidPlaceOfBirth" class="error-message">
              Ingresa un lugar de nacimiento válido.
            </div>
          </div>
          <div class="document-type-container">
            <label for="DocumentType" class="lbl-document-type"
              >Tipo de documento:</label
            >
            <select
              v-model="DocumentType"
              @change="handleDocumentType"
              id="birth-place"
              class="in-user-input"
            >
              <option value="null" disabled>
                Selecciona una tipo de documento
              </option>
              <option
                v-for="DocumentType in DocumentTypes"
                :key="DocumentType.value"
                :value="DocumentType.value"
              >
                {{ DocumentType.description }}
              </option>
            </select>
            <div v-if="docTypeError" class="error-message">
              Ingresa un tipo de documento valido.
            </div>
          </div>
          <div class="document-number-container">
            <label for="DocumentNumber" class="lbl-document-number"
              >Numero de documento:</label
            >
            <input
              type="text"
              :value="DocumentNumber"
              @input="handleDocNumber"
              id="document-number"
              class="in-user-input"
            />
            <div v-if="docNumberError" class="error-message">
              {{ docNumberError }}
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              id="myCheckbox"
              v-model="isChecked"
              @change="handleSpamCheckbox"
            />
            <label for="myCheckbox" class="checkbox-label"
              >Permite recibir novedades via email</label
            >
          </div>
        </div>
        <div class="user-info-edit-btn">
          <button
            class="user-info-btn-save"
            :disabled="!formularioValido"
            @click="updateUserData"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
    <Footer containerClass="footer-container-user-info-edit" />
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import Footer from "../Footer.vue";
import Options from "../User/Options.vue";
import axios from "axios";
import Cookies from "js-cookie";
import hostMixin from "@/mixins/host.js";
export default {
  mixins: [hostMixin],
  beforeMount() {
    // this.fetchDocumentTypes();
    console.log("Creating");
    this.sessionInfo = JSON.parse(this.getTokenFromCookie());
  },
  components: {
    Navbar,
    Footer,
    Options,
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      dob: null,
      cities: [],
      PlaceOfBirth: null,
      DocumentNumber: "",
      spamIsChecked: false,
      validNames: false,
      validDate: false,
      validBirthPlace: false,
      documentoValido: false,
      tipoDocumentoValido: false,
      dobError: false,
      flatpickrConfig: {
        dateFormat: "d-m-Y",
        defaultDate: this.getEighteenYearsAgo(),
      },
      DocumentTypes: [],
      DocumentType: null,
      docTypeError: false,
      isValidDocumentType: false,
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
  beforeMount(){
    this.fetchCities();
    console.log(this.cities)
    this.fetchDocumentTypes()
  },
  computed: {
    formularioValido() {
      return (
        this.validNames &&
        this.validDate &&
        this.documentoValido &&
        this.tipoDocumentoValido &&
        this.validBirthPlace
      );
    },
  },
  methods: {
    fetchDocumentTypes(){
      axios.get(hostMixin.data().host + '/api/choices/users/user/document_type')
        .then(response => {
          // Update the cities array with the fetched data
          this.DocumentTypes = response.data;
        })
        .catch(error => {
          console.error('Error fetching cities:', error);
        });
    },
    handleDocumentType(event) {
      const typeValue = event.target.value;
      console.log(typeValue)

      if(typeValue == 'null'){
        this.tipoDocumentoValido = false;
      }else{
        this.tipoDocumentoValido = true;
      }
    },
    getEighteenYearsAgo() {
      const today = new Date();
      return new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );
    },
    fetchCities() {
      // Make a GET request to fetch cities
      axios
        .get(hostMixin.data().host + "/api/cities/")
        .then((response) => {
          // Update the cities array with the fetched data
          this.cities = response.data;
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    },
    handleCities(event) {
      const city_id = event.target.value;
      this.PlaceOfBirth = event.target.value;
      console.log(city_id)

      if (city_id == "null") {
        this.validBirthPlace = false;
      } else {
        this.validBirthPlace = true;
      }
    },
    getTokenFromCookie() {
      // Retrieve the token from the cookie
      return Cookies.get("loginToken");
    },
    handleNamesLastnames(event) {
      const property = event.target.id === "name" ? "nombre" : "apellido";
      const value = event.target.value.trim(); // Elimina los espacios en blanco al principio y al final
      const isValid = value !== "";
      this.validNames = isValid;

      if (isValid) {
        this[property] = value;
        this.nameErrorMessage = "";
      } else {
        // Si el valor está vacío, establece el valor de la propiedad en una cadena vacía
        this[property] = "";
        // Puedes mostrar un mensaje de error o realizar alguna otra acción para indicar al usuario que el campo es obligatorio
        this.nameErrorMessage = `El ${property} no puede estar vacío`;
      }
    },
    validateDob() {
      const dobParts = this.dob.split("-");
      const selectedDate = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const eighteenYearsAgo = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      eighteenYearsAgo.setHours(0, 0, 0, 0);
      const hundredYearsAgo = new Date(
        currentDate.getFullYear() - 100,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      hundredYearsAgo.setHours(0, 0, 0, 0);

      // Validación básica para verificar si la fecha de nacimiento es una fecha válida.
      if (
        isNaN(selectedDate.getTime()) ||
        selectedDate < hundredYearsAgo ||
        selectedDate > eighteenYearsAgo
      ) {
        this.dobError = true;
        this.validDate = false;
        this.$emit("fechaValida", this.validDate);
      } else {
        this.dobError = false;
        this.validDate = true;
        this.$emit("fechaValida", this.validDate);
      }
    },
    handleDocNumber(event) {
      const inputText = event.target.value;
      const isValid = /^\d+$/.test(inputText);

      this.documentoValido = isValid;
      this.DocumentNumber = inputText;

      if (isValid) {
        this.docNumberError = "";
      } else {
        this.docNumberError = "Ingresa un numero de documento valido.";
      }
    },
    handleSpamCheckbox() {
      // Este método se ejecutará cada vez que el estado del checkbox cambie
      console.log("Estado actual del checkbox:", this.isChecked);
    },
    saveAndNavigateToUserInfo() {
      this.$router.push("/user-info");
    },
    updateUserData() {
      const data = {
        first_name: this.nombre,
        last_name: this.apellido,
        birth_date: this.dob,
        place_birth: this.PlaceOfBirth,
        document_type: this.DocumentType,
        document_number: this.DocumentNumber,
        want_spam: this.spamIsChecked,
        gender: "M",
        notice_selection: true,
        literary_genres: [0],
        is_active: true,
      };
      console.log(data);
      axios
        .post(hostMixin.data().host + "api/user/" + this.sessionInfo.user.uuid, data)
        .then((response) => {
          console.log(response.data);
          this.saveAndNavigateToUserInfo();
        })
        .catch((error) => {
          console.error("Error fetching data:", error.response.data);
          this.message = error.response.data;
        });
    },
  },
  mounted() {
    flatpickr("#dobPicker", this.flatpickrConfig);
  },
};
</script>

<style>
.user-info-edit-options-routes {
  position: absolute;
  background-color: rgba(34, 33, 33, 0.6);
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 45%;
  left: 20%;
}
.footer-container-user-info-edit {
  position: relative;
  top: 95%;
}
.user-info-edit-navigator {
  display: flex;
  align-items: center;
}
.user-info-edit-router {
  color: black;
  margin-right: auto;
  margin-left: 0;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-info-edit-router img {
  margin-right: 5px;
}
.user-info-edit-title {
  margin-left: 0;
}
.user-info-edit-edit-txt {
  color: black;
}
.user-info-edit-background {
  background-image: url(/src/assets/UserInfoBackground.jpg);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  margin: 0;
  padding: 0;
}
.user-info-edit-container {
  background-color: white;
  width: 60%;
  position: absolute;
  right: 0;
  top: 25%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 3%;
}
.user-info-edit-btn {
  position: relative;
}
.user-info-btn-save {
  position: absolute;
  bottom: 0%;
  width: 90%;
  height: 50px;
  border-radius: 10px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
}
.user-info-btn-save:not(:disabled):hover {
  background-color: #050834; /* Cambia el color de fondo cuando pasas el cursor */
  color: white;
  cursor: pointer;
}
.user-info-edit-input-container {
  display: grid;
  grid-template-columns: 70% 1fr;
  border: 1px solid gray;
  border-radius: 50px;
  padding-top: 2%;
  padding-bottom: 2%;
}
</style>
