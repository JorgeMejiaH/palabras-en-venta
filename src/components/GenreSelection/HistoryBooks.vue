<template>
  <div
    class="genre-box-container"
    :class="{ selected: isSelected }"
    @click="toggleSelection"
  >
    <img src="@/assets/historyBooks.png" alt="Historia" class="genre-cover"/>
    <h1>Historia</h1>
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
      this.$emit("Selected", 'HistoryBooks', this.isSelected)
    },
  },
};
</script>

<style></style>
