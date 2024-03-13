<template>
  <div>
    <label for="firstName" class="lbl-user-name">Nombres:</label>
    <input
      type="text"
      :value="firstName"
      @input="handleChange"
      class="in-user-input"
      id="name"
    />
    <label for="lastName" class="lbl-user-lastname">Apellidos:</label>
    <input
      type="text"
      :value="lastName"
      @input="handleChange"
      class="in-user-input"
      id="lastName"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    handleChange(event) {
      this[property] = event.target.value;
    },
  },
};
</script>

<style></style>
