<template>
  <div class="user-info-bckgr-container">
    <navbar />
    <options routeOptionsContainer="user-info-routes" />
    <div class="user-info-container">
      <h1 class="your-account">Tu Cuenta</h1>
      <div class="user-info-username-container">
        <h1 class="user-info-hello">Hola</h1>
        <h2 class="user-info-username">Jorge</h2>
        <p class="user-info-welcome">Bienvenido a tu cuenta</p>
      </div>
      <div class="user-info-personal-container">
        <h1 class="user-info-personal-title">Información personal</h1>
        <button class="user-info-btn" @click="navigateToUserInfoEdit">
          <span class="user-info-btn-content">Editar</span>
          <img
            src="@/assets/pen-to-square.png"
            alt="edit-symbol"
            class="user-info-edit-edit-symbol-btn"
          />
        </button>
        <div class="user-info-personal-column1">
          <div class="user-info-names">
            <h3>Nombre(s)</h3>
            <p>Jorge A</p>
          </div>
          <div class="user-info-email">
            <h3>Correo electrónico</h3>
            <p>jmejia@utp.co</p>
          </div>
          <div class="user-info-document-type">
            <h3>Tipo de documento</h3>
            <p>cc</p>
          </div>
          <user-info-spam-checkbox />
        </div>
        <div class="user-info-personal-column2">
          <div class="user-info-lastnames">
            <h3>Apellido(s)</h3>
            <p>Mejia</p>
          </div>
          <div class="user-info-place-date">
            <h3>Lugar y fecha de nacimiento</h3>
            <p>Pereira 10/12/2000</p>
          </div>
          <div class="user-info-document-number">
            <h3>Número de documento</h3>
            <p>123456789</p>
          </div>
        </div>
      </div>
      <div class="user-info-password-container">
        <h1 class="user-info-password-title">Contraseña</h1>
        <button class="user-info-btn"  @click="navigateToPasswordChange">
          <span class="user-info-btn-content">Editar</span>
          <img
            src="@/assets/pen-to-square.png"
            alt="edit-symbol"
            class="user-info-edit-edit-symbol-btn"
          />
        </button>
      </div>
      <div class="user-info-genre-container">
        <div class="user-info-genre-title">
          <h1>Géneros literarios</h1>
          <button class="user-info-btn">
            <span class="user-info-btn-content">Editar</span>
            <img
              src="@/assets/pen-to-square.png"
              alt="edit-symbol"
              class="user-info-edit-edit-symbol-btn"
            />
          </button>
        </div>
        <div class="user-info-genre-selection">
          <filosofy-books />
          <action-adventure-books />
          <politics-books />
        </div>
      </div>
    </div>
    <Footer containerClass="footer-container-user-info" />
  </div>
</template>

<script>
import ActionAdventureBooks from "../GenreSelection/ActionAdventureBooks.vue";
import FilosofyBooks from "../GenreSelection/FilosofyBooks.vue";
import PoliticsBooks from "../GenreSelection/PoliticsBooks.vue";
import Navbar from "../Navbar/Navbar.vue";
import UserInfoSpamCheckbox from "./UserInfoSpamCheckbox.vue";
import Footer from "../Footer.vue";
import Options from '../UserPage/Options.vue';
export default {
  components: {
    Navbar,
    UserInfoSpamCheckbox,
    ActionAdventureBooks,
    FilosofyBooks,
    PoliticsBooks,
    Footer,
    Options,
  },
  methods: {
    navigateToUserInfoEdit() {
      this.$router.push("/user-info-edit");
    },
    navigateToPasswordChange() {
      this.$router.push("/password-change");
    },
  },
};
</script>

<style>
.user-info-routes{
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
.footer-container-user-info{
  position: relative;
  top: 120%;
}
.user-info-bckgr-container {
  background-image: url(/src/assets/UserInfoBackground.jpg);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  width: 100vw; /* Ancho igual al 100% del viewport */
  height: 100vh; /* Altura igual al 100% del viewport */
  overflow-y: auto; /* Evita que el contenido se desborde fuera del contenedor */
  position: relative;
  margin: 0;
  padding: 0;
}
.user-info-container {
  background-color: white;
  width: 60%;
  position: absolute;
  right: 0;
  top: 30%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.user-info-username-container {
  border: 1px solid gray;
  border-radius: 30px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
  display: grid;
  grid-template-rows: repeat(3, 50px);
}
.user-info-personal-container {
  border: 1px solid gray;
  border-radius: 30px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.user-info-personal-column1 {
  text-align: left;
  padding-left: 10%;
}
.user-info-personal-column2 {
  text-align: left;
}
.user-info-btn {
  width: 30%;
  height: 50%;
  align-self: center;
  justify-self: center;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-info-btn:hover {
  background-color: #cccccc;
}
.user-info-password-container {
  border: 1px solid gray;
  border-radius: 30px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.user-info-genre-container {
  border: 1px solid gray;
  border-radius: 30px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
  display: grid;
  grid-template-rows: 30% 1fr;
  padding: 2%;
}
.user-info-genre-selection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.user-info-genre-title {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.your-account {
  margin-right: 60%;
}
.user-info-hello {
  grid-row: 1;
  justify-self: left;
  margin-left: 5%;
}

.user-info-username {
  grid-row: 2;
  justify-self: left;
  margin-left: 5%;
}

.user-info-welcome {
  grid-row: 3;
  justify-self: left;
  margin-left: 5%;
}
.user-info-edit-edit-symbol-btn {
  justify-self: center;
}
.user-info-btn-content {
  margin-right: 5px; 
}
</style>
