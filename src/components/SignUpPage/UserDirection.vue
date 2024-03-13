<template>
  <div>
    <label for="Direction" class="lbl-user-direction">Dirección:</label>
    <input
      type="text"
      :value="Direction"
      @input="handleChange"
      id="user-direction"
      class="in-user-input"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      Direction: "",
    };
  },
  methods: {
    handleChange(event) {
      this.Direction = event.target.value;
    },
  },
};
</script>

<style scoped></style>
