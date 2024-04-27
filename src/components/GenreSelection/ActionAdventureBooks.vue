<template>
  <div
    class="genre-box-container"
    :class="{ selected: isSelected }"
    @click="toggleSelection"
  >
    <img src="@/assets/acctionAdventureBooks.png" alt="Accion y aventura" class="genre-cover"/>
    <h1>Acción y aventura</h1>
  </div>
</template>

<script>
export default {
  name: "BooksGenreContainer",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    toggleSelection() {
      this.isSelected = !this.isSelected;
      // Agrega lógica aquí para manejar la selección del contenedor
      console.log("Contenedor seleccionado");
      this.$emit("Selected",'ActionAdventureBooks', this.isSelected)
    },
  },
};
</script>

<style></style>
