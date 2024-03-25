<!-- Dropdown.vue -->
<template>
  <div class="dropdown" ref="dropdown">
    <button @click="toggleDropdown">{{ buttonText }}</button>
    <ul v-if="isOpen" ref="dropdownMenu">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Select an option",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.closeDropdownOnClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdownOnClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdownOnClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isOpen = false;
      }
    },
    selectOption(option) {
      this.$emit("option-selected", option);
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.dropdown button {
  cursor: pointer;
  background-color: #050835;
  color: white;
  border-color: #050835;
  border-bottom-width: 0px;
}
.dropdown ul {
  list-style-type: none;
  padding: 0;
}
</style>
