<template>
  <div>

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
