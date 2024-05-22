<template>
  <div>
    <Dropdown :buttonText="selectedOption">
      <div class="dropdown-menu-user">
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
        >
          <div>
            <router-link :to="optionRoutes[option]" class="router-dropdown">{{
              option
            }}</router-link>
          </div>
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
      selectedOption: "Usuario",
      options: ["Iniciar seción", "Regístate"],
      optionRoutes: {
        "Iniciar seción": "/login",
        "Regístate": "/sign-up",
        "Informacion personal": "/user-info"
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
.dropdown-menu-user {
  position: absolute;
  background-color: #050835;
  width: 100%;
}
.router-dropdown {
  color: white;
  cursor: pointer;
}
</style>
