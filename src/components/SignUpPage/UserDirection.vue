<template>
  <div class="direction-container">
    <label for="Direction" class="lbl-user-direction">Dirección:</label>
    <input
      type="text"
      :value="Direction"
      @input="handleChange"
      id="user-direction"
      class="in-user-input"
    />
    <div v-if="!isValidDirection" class="error-message">
      Ingresa una dirección válida.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Direction: "",
      isValidDirection:true,
    };
  },
  methods: {
    handleChange(event) {
      const inputText = event.target.value;
      const isValid = /^[a-zA-Z\s0-9\#]+$/.test(inputText);

      this.isValidDirection = isValid;
      this.$emit("validDirection", {
        is_valid: isValid,
        direction: inputText
      });

      if(isValid){
        this.Direction = inputText;
      }
    },
  },
};
</script>

<style>
.error-message {
  color: red;
  margin-top: 5px;
}
.direction-container{
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 4%;
}
</style>
