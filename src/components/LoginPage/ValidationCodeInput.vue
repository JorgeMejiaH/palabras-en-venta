<template>
  <div class="validation_input_container">

    <input
      type="text"
      :value="code"
      @input="handleChange"
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
  height: 3.5vh;
  display: flex;
  margin-left: 12%;
}


</style>