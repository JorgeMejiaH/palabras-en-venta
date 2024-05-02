<template>
  <div class="validation_input_container">

    <input
      type="text"
      :value="code"
      @input="handleChange"
      placeholder="   Código"
      class="in-validation-code"
      id="validation-code"
    />


  </div>
</template>

<script>
export default {
    data() {
    return {
      code: "",
    };
  },
  methods: {
    handleChange(event) {
      this.code = event.target.value;
    },
  },
}
</script>


<style scoped>

.validation_input_container{
  height: 3.5lvh;
  display: flex;
}
.in-validation-code{
  border-radius: 8px;
  width: 35lvh;
}


</style>