<template>
  <div class="Navbar">
    <img src="@/assets/Logo.png" alt="Logo de la pagina" class="nav-img-logo" />
    <div class="nav-grouped">
      <input
        type="text"
        v-model="searchTerm"
        @input="handleSearch"
        placeholder="Buscar"
        class="nav-search-bar"
      />
      <div class="nav-links-grouped">
        <p class="nav-category">categorias</p>
        <nav>
          <router-link to="/news" class="nav-router-news">Noticias</router-link>
          <router-link to="/help" class="nav-router-help">
            Ayuda/PQR
          </router-link>
        </nav>
      </div>
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
  background-color: #050835;
  border: 1px solid #fff;
  height: 5%;
}
.Navbar > * {
  border: 1px solid #fff; /* Grid item border */
}
.nav-img-logo {
  margin-top: 5%;
  width: 60%;
  height: auto;
}
.nav-grouped {
  position: relative;
  top: 8%;
  left: -25%;
  display: grid;
  grid-template-rows: repeat(2, 1fr); /* Adjust the number of rows as needed */
  gap: 1%;
  border: 1px solid #fff;
  width: 120%;
  height: 80%;
}
.nav-grouped > * {
  border: 1px solid #fff;
}
.nav-links-grouped {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50%;
}
.nav-category {
  color: #fff;
}
.nav-router-news {
  color: #fff;
}
.nav-router-help {
  color: #fff;
}
.nav-search-bar {
  border-radius: 10px;
}
.nav-user {
  display: grid;
  grid-column: 3;
  color: #fff;
  place-items: center;
}
.nav-router-shop-list {
  display: grid;
  color: #fff;
  font-weight: bold;
  place-items: center;
}
.nav-router-cart {
  display: grid;
  color: #fff;
  font-weight: bold;
  place-items: center;
}
</style>
