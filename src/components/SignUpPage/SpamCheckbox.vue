<template>
  <div>
    <input
      type="checkbox"
      id="myCheckbox"
      v-model="isChecked"
      @change="handleChange"
    />
    <label for="myCheckbox" class="checkbox-label">Permite recibir novedades via email</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    handleChange() {
      // Este método se ejecutará cada vez que el estado del checkbox cambie
      console.log("Estado actual del checkbox:", this.isChecked);
      this.$emit("checkbox_value",this.isChecked)
  
    },
  },
};
</script>

<style>
.checkbox-label{
    font-weight: bold;
}
</style>
