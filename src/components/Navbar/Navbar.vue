<template>
  <div class="Navbar">
    <img src="@/assets/logo.png" alt="Logo de la pagina" class="nav-img-logo" />
    <div class="nav-grouped">
      <input
        type="text"
        v-model="searchTerm"
        @input="handleSearch"
        placeholder="Buscar"
        class="nav-search-bar"
      />
      <div class="nav-links-grouped">
        <dropdown-category />
        <nav class="news-help">
          <router-link to="/news" class="nav-router-news">Noticias</router-link>
          <router-link to="/help" class="nav-router-help">
            Ayuda/PQR
          </router-link>
        </nav>
      </div>
    </div>
    <div class="nav-user-block">
      <img
        src="@/assets/user-logo.png"
        alt="img-user-logo"
        class="img-user-logo"
      />
      <dropdown-user />
    </div>
    <router-link to="/shoppingList" class="nav-router-shop-list"
      >Mis compras</router-link
    >
    <router-link to="/cart" class="nav-router-cart">
      <img
        src="@/assets/cart-shopping.png"
        alt="cart"
        class="img-shopping-cart"
      />
    </router-link>
  </div>
</template>

<script>
import DropdownCategory from "./DropdownCategory.vue";
import DropdownUser from "./DropdownUser.vue";
export default {
  components: { DropdownCategory, DropdownUser },
  name: "navbar",
};
</script>

<style>
.Navbar {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #050835;
  width: 100%; 
  height: 200px;
  padding: 0%;
}
.nav-img-logo {
  position: relative;
  left: 7%;
  width: 80%;
  height: auto;
  align-self: center;
}
.nav-grouped{
  position: relative;
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 60%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.nav-links-grouped{
  display: flex;
  align-items: center;
}
.news-help{
  display: flex;
  align-items: center;
}
.nav-router-news{
  color: white;
  margin-right: 10px;
}
.nav-router-help{
  color: white;
}
.nav-search-bar{
  border-radius: 10px;
}
.nav-user-block{
  position: relative;
  display: flex;
  align-self: center;
  justify-self: center;
}
.img-user-logo{
  width: 100%;
  height: auto;
  margin-right: 10px;
}
.nav-router-cart{
  align-self: center;
  justify-self: center;
}
.img-shopping-cart{
  width: 150%;
  height: auto;
}
.nav-router-shop-list{
  align-self: center;
  justify-self: center;
  font-weight: bold;
  color: white;
}
</style>
