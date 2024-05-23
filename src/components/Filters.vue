<template>
    <div class="filters">
      <h3>Filtrar Búsqueda</h3>
      <div class="filter-group">
        <h4>Géneros</h4>
        <div>
          <label>
            <input type="checkbox" value="Filosofía" v-model="selectedGenres">
            Filosofía
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value="Historia" v-model="selectedGenres">
            Historia
          </label>
        </div>
      </div>
      <div class="filter-group">
        <h4>Idioma</h4>
        <div>
          <label>
            <input type="checkbox" value="Español" v-model="selectedLanguages">
            Español
          </label>
          <label>
            <input type="checkbox" value="Ingles" v-model="selectedLanguages">
            Ingles
          </label>
        </div>
      </div>
      <button @click="applyFilters">Aplicar Filtros</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedGenres: [],
        selectedLanguages: [],
      };
    },
    methods: {
      applyFilters() {
        this.$emit('apply-filters', {
          genres: this.selectedGenres,
          languages: this.selectedLanguages,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .filters {
    width: 200px;
    background-color: #7CB9F2;
  }
  
  .filter-group {
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  