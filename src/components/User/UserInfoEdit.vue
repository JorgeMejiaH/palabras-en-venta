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
          <user-names-last-names @validNames="validarNombres" />
          <date-input @fechaValida="validarFecha" />
          <place-of-birth @validBirthPlace="validarLugarNacimiento" />
          <user-email @validEmail="validarEmail" />
          <document-type @tipoDocumentoValido="validarTipoDocumento" />
          <document-number @documentoValido="validarDocumento" />
          <spam-checkbox />
        </div>
        <div class="user-info-edit-btn">
          <button
            class="user-info-btn-save"
            :disabled="!formularioValido"
            @click="navigateToUserInfo"
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
import DateInput from "../SignUpPage/DateInput.vue";
import PlaceOfBirth from "../SignUpPage/PlaceOfBirth.vue";
import UserNamesLastNames from "../SignUpPage/UserNamesLastNames.vue";
import UserEmail from "../SignUpPage/UserEmail.vue";
import DocumentType from "../SignUpPage/DocumentType.vue";
import DocumentNumber from "../SignUpPage/DocumentNumber.vue";
import SpamCheckbox from "../SignUpPage/SpamCheckbox.vue";
import Footer from "../Footer.vue";
import Options from "../User/Options.vue";
export default {
  components: {
    Navbar,
    UserNamesLastNames,
    DateInput,
    PlaceOfBirth,
    UserEmail,
    DocumentType,
    DocumentNumber,
    SpamCheckbox,
    Footer,
    Options,
  },
  data() {
    return {
      fechaValida: false,
      documentoValido: false,
      tipoDocumentoValido: false,
      validNames: false,
      validBirthPlace: false,
      validEmail: false,
    };
  },
  computed: {
    formularioValido() {
      return (
        this.fechaValida &&
        this.documentoValido &&
        this.tipoDocumentoValido &&
        this.validNames &&
        this.validBirthPlace &&
        this.validEmail
      );
    },
  },
  methods: {
    validarFecha(Valid) {
      this.fechaValida = Valid;
    },
    validarDocumento(Valid) {
      this.documentoValido = Valid;
    },
    validarTipoDocumento(Valid) {
      this.tipoDocumentoValido = Valid;
    },
    validarNombres(Valid) {
      this.validNames = Valid;
    },
    validarLugarNacimiento(Valid) {
      this.validBirthPlace = Valid;
    },
    validarGenero(Valid) {
      this.validGenre = Valid;
    },
    validarEmail(Valid) {
      this.validEmail = Valid;
    },
    navigateToUserInfo() {
      this.$router.push("/user-info");
    },
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
  left: 15%;
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
