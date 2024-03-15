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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>