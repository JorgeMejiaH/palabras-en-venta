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
              v-model="nombre"
              @input="handleNamesLastnames"
              class="in-user-input-names"
              id="name"
            />
            <label for="lastName" class="lbl-user-lastname">Apellidos:</label>
            <input
              type="text"
              v-model="apellido"
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
            <label for="PlaceOfBirth" class="lbl-birth-place">Ciudad de nacimiento:</label>
            <select
              v-model="PlaceOfBirth"
              @change="handleCities"
              id="birth-place"
              class="in-user-input"
            >
              <option value="null" disabled>Selecciona una ciudad</option>
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{ city.name }}
              </option>
            </select>
          </div>
          <div class="document-type-container">
            <label for="DocumentType" class="lbl-document-type">Tipo de documento:</label>
            <select
              v-model="DocumentType"
              @change="handleDocumentType"
              id="document-type"
              class="in-user-input"
            >
              <option value="null" disabled>Selecciona un tipo de documento</option>
              <option v-for="DocumentType in DocumentTypes" :key="DocumentType.value" :value="DocumentType.value">
                {{ DocumentType.description }}
              </option>
            </select>
          </div>
          <div class="document-number-container">
            <label for="DocumentNumber" class="lbl-document-number">Numero de documento:</label>
            <input
              type="text"
              v-model="DocumentNumber"
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
              v-model="spamIsChecked"
              @change="handleSpamCheckbox"
            />
            <label for="myCheckbox" class="checkbox-label">Permite recibir novedades via email</label>
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
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Options from "@/components/User/Options.vue";
import axios from "axios";
import Cookies from "js-cookie";
import hostMixin from "@/mixins/host.js";
import flatpickr from "flatpickr";

export default {
  mixins: [hostMixin],
  components: {
    Navbar,
    Footer,
    Options,
  },
  beforeMount() {
    console.log("Creating");
    this.sessionInfo = JSON.parse(this.getTokenFromCookie());
    this.fetchCities();
    this.fetchDocumentTypes();
    this.getUserInfo();
    console.log(this.sessionInfo.user.uuid)
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      dob: "",
      cities: [],
      PlaceOfBirth: null,
      DocumentNumber: "",
      spamIsChecked: false,
      validNames: true,
      validDate: true,
      documentoValido: true,
      dobError: false,
      flatpickrConfig: {
        dateFormat: "Y-m-d",
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
  computed: {
    formularioValido() {
      return (
        this.validNames &&
        this.validDate &&
        this.documentoValido
      );
    },
  },
  methods: {
    getUserInfo() {
      axios
        .get(hostMixin.data().host + "api/user/" + this.sessionInfo.user.uuid)
        .then((response) => {
          const data = response.data;
          this.nombre = data.first_name;
          this.apellido = data.last_name;
          this.dob = data.birth_date;
          this.PlaceOfBirth = data.place_birth;
          this.DocumentType = data.document_type;
          this.DocumentNumber = data.document_number;
          this.spamIsChecked = data.want_spam;
          this.userInfo = data;
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    },
    fetchDocumentTypes() {
      axios
        .get(hostMixin.data().host + "/api/choices/users/user/document_type")
        .then((response) => {
          this.DocumentTypes = response.data;
        })
        .catch((error) => {
          console.error("Error fetching document types:", error);
        });
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
      axios
        .get(hostMixin.data().host + "/api/cities/")
        .then((response) => {
          this.cities = response.data;
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    },
    handleCities(event) {
      const city_id = event.target.value;
      this.PlaceOfBirth = city_id;
    },
    getTokenFromCookie() {
      return Cookies.get("loginToken");
    },
    handleNamesLastnames(event) {
      const property = event.target.id === "name" ? "nombre" : "apellido";
      const value = event.target.value.trim();
      const isValid = value !== "";
      this.validNames = isValid;
      this[property] = value;
      this.nameErrorMessage = isValid ? "" : `El ${property} no puede estar vacío`;
    },
    validateDob() {
      const dobParts = this.dob.split("-");
      const selectedDate = new Date(dobParts[0], dobParts[1] - 1, dobParts[2]);
      const currentDate = new Date();
      const eighteenYearsAgo = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      const hundredYearsAgo = new Date(
        currentDate.getFullYear() - 100,
        currentDate.getMonth(),
        currentDate.getDate()
      );

      if (
        isNaN(selectedDate.getTime()) ||
        selectedDate < hundredYearsAgo ||
        selectedDate > eighteenYearsAgo
      ) {
        this.dobError = true;
        this.validDate = false;
      } else {
        this.dobError = false;
        this.validDate = true;
        this.dob = selectedDate.toISOString().split('T')[0]
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
        gender: this.userInfo.gender,
        notice_selection: true,
        literary_genres: [],
        is_active: true,
      };
      console.log(data)
      axios
        .put(hostMixin.data().host + "api/user/" + this.sessionInfo.user.uuid + "/", data)
        .then((response) => {
          console.log(response.data);
          this.saveAndNavigateToUserInfo();
        })
        .catch((error) => {
          console.error("Error updating user data:", error.response.data);
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
