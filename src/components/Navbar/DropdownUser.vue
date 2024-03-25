<template>
  <div>
    <Dropdown :buttonText="selectedOption">
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
      >
        <div>
          <router-link :to="optionRoutes[option]" class="router-dropdown">{{ option }}</router-link>
        </div>
      </li>
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
      selectedOption: "Usuario",
      options: ["Iniciar seción", "Regístate"],
      optionRoutes: {
        "Iniciar seción": "/login",
        "Regístate": "/sign-up",
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
/* Add your global styles here */
</style>
