<template>
  <div>
    <label for="username" class="lbl-user-login">Nombre de usuario:</label>
    <input
      type="text"
      :value="username"
      @input="handleChange"
      class="in-user-login"
      id="username"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    handleChange(event) {
      this.username = event.target.value;
    },
  },
};
</script>

<style></style>
