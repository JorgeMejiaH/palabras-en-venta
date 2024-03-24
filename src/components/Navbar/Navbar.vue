<template>
  <div class="Navbar">
    <img src="@/assets/Logo.png" alt="Logo de la pagina" class="nav-img-logo" />
    <input
      type="text"
      v-model="searchTerm"
      @input="handleSearch"
      placeholder="Buscar"
      class="nav-search-bar"
    />
    <div class="nav-grouped">
      <p class="nav-category">categorias</p>
      <nav>
        <router-link to="/news" class="nav-router-news">Noticias</router-link>
        <router-link to="/help" class="nav-router-help">Ayuda/PQR</router-link>
      </nav>
    </div>
    <p class="nav-user">usuario</p>
    <router-link to="/shoppingList" class="nav-router-shop-list"
      >Mis compras</router-link
    >
    <router-link to="/cart" class="nav-router-cart">Carrito</router-link>
    <!--Insertar imagen del carrito de compras-->
  </div>
</template>

<script>
import DropdownNav from "./DropdownNav.vue";
import DropdownUser from "./DropdownUser.vue";
export default {
  name: "navbar",
  components: { DropdownNav, DropdownUser },
};
</script>

<style>
.Navbar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1%;
  padding: 0.5%;
  background-color: #050835;
}
.nav-img-logo {
  width: 60%;
  height: auto;
}
.nav-search-bar {
  width: 150%;
  height: 50%;
  border-radius: 5px;
  margin-top: 5%;
}
.nav-grouped {
  grid-column: 2 / span 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -10%;
}
.nav-user {
  margin-left: auto;
}
</style>
