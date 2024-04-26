<template>
  <div class="user-info-bckgr-container">
    <navbar />
    <div class="user-info-container">
      <h1 class="your-account">Tu Cuenta</h1>
      <div class="user-info-username-container">
        <h1 class="user-info-hello">Hola</h1>
        <h2 class="user-info-username">Nombre de Usuario</h2>
        <p class="user-info-welcome">Bienvenido a tu cuenta</p>
      </div>
      <div class="user-info-personal-container">
        <h1 class="user-info-personal-title">Información personal</h1>
        <button class="user-info-edit-btn" @click="navigateToUserInfoEdit">Editar</button>
        <div class="user-info-personal-column1">
          <div class="user-info-names">
            <h3>Nombre(s)</h3>
            <p>Nombres del usuario</p>
          </div>
          <div class="user-info-email">
            <h3>Correo electrónico</h3>
            <p>correo</p>
          </div>
          <div class="user-info-document-type">
            <h3>Tipo de documento</h3>
            <p>tipo doc</p>
          </div>
          <user-info-spam-checkbox />
        </div>
        <div class="user-info-personal-column2">
          <div class="user-info-lastnames">
            <h3>Apellido(s)</h3>
            <p>apellido del usuario</p>
          </div>
          <div class="user-info-place-date">
            <h3>Lugar y fecha de nacimiento</h3>
            <p>Lugar dd/mm/aaaa</p>
          </div>
          <div class="user-info-document-number">
            <h3>Número de documento</h3>
            <p>numero doc</p>
          </div>
        </div>
      </div>
      <div class="user-info-password-container">
        <h1 class="user-info-password-title">Contraseña</h1>
        <button class="user-info-edit-btn">Editar</button>
      </div>
      <div class="user-info-genre-container">
        <div class="user-info-genre-title">
          <h1>Géneros literarios</h1>
          <button class="user-info-edit-btn">Editar</button>
        </div>
        <div class="user-info-genre-selection">
          <filosofy-books />
          <action-adventure-books />
          <politics-books />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionAdventureBooks from "../GenreSelection/ActionAdventureBooks.vue";
import FilosofyBooks from "../GenreSelection/FilosofyBooks.vue";
import PoliticsBooks from "../GenreSelection/PoliticsBooks.vue";
import Navbar from "../Navbar/Navbar.vue";
import UserInfoSpamCheckbox from "./UserInfoSpamCheckbox.vue";
export default {
  components: {
    Navbar,
    UserInfoSpamCheckbox,
    ActionAdventureBooks,
    FilosofyBooks,
    PoliticsBooks,
  },
  methods:{
    navigateToUserInfoEdit() {
      this.$router.push('/user-info-edit');
    },
  }
};
</script>

<style>
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
.user-info-edit-btn {
  width: 50%;
  height: 50%;
  align-self: center; /* Centra verticalmente el botón dentro de su grid */
  justify-self: center; /* Centra horizontalmente el botón dentro de su grid */
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
</style>
