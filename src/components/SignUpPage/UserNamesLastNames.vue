<template>
  <div class="user-input-container">
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

<style>
.user-input-container {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.lbl-user-name,
.lbl-user-lastname {
  grid-row: 1; 
}

.in-user-input {
  width: 50%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  justify-self: center;
}
</style>
