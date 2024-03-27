<template>
  <div>
    <Dropdown :buttonText="selectedOption">
      <div class="dropdown-menu-category">
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
        >
          <router-link :to="optionRoutes[option]" class="router-dropdown">{{
            option
          }}</router-link>
        </li>
      </div>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from "../Dropdown/Dropdown.vue";

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      selectedOption: "Categorías",
      options: [
        "Categorías",
        "Más vendidos",
        "Novedades",
        "Recomendaciones",
        "Autores destacados",
      ],
      optionRoutes: {
        "Categorías": "/category",
        "Más vendidos": "/best-seller",
        "Novedades": "/new-books",
        "Recomendaciones": "/recomend",
        "Autores destacados": "/authors",
      },
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style>
.dropdown-menu-category {
  position: absolute;
  background-color: #050835;
}
.router-dropdown {
  color: white;
  cursor: pointer;
}
</style>
