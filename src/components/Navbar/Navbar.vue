<template>
    <div class="Navbar">
      <img src="@/assets/Logo.png" alt="Logo de la pagina" class="img-logo" />
      <input type="text" v-model="searchTerm" @input="handleSearch" placeholder="Buscar"/>
      <select v-model="selectedCategory" id="Category">
        <option value="Categorias">Categorias</option>
      </select>
      <nav>
          <router-link to="/news">Noticias</router-link>
          <router-link to="/help">Ayuda/PQR</router-link>
      </nav>
      <my-acount/>
      <router-link to="/shoppingList">Mis compras</router-link>
      <router-link to="/cart">Carrito</router-link> <!--Insertar imagen-->
    </div>
  </template>
  
  <script>
import MyAcount from './MyAcount.vue'
  export default {
  components: { MyAcount },
  
  }
  </script>
  
  <style>
  
  </style>