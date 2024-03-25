<template>
  <dropdown :title="dropdownTitle">
    <template #toggler>
      <button>{{ dropdownTitle }}</button>
    </template>
    <div>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
    </div>
  </dropdown>
</template>

<script>
import Dropdown from "../Dropdown/Dropdown.vue";

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      dropdownTitle: "Categorias",
    };
  },
};
</script>

<style></style>
