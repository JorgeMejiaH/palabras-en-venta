<template>
  <div class="user-input-container">
    <label for="firstName" class="lbl-user-name">Nombres:</label>
    <input
      type="text"
      :value="nombre"
      @input="handleChange"
      class="in-user-input-names"
      id="name"
    />
    <label for="lastName" class="lbl-user-lastname">Apellidos:</label>
    <input
      type="text"
      :value="apellido"
      @input="handleChange"
      class="in-user-input-names"
      id="lastName"
    />
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      apellido: "",
    };
  },
  methods: {
    handleChange(event) {
      const property = event.target.id === "name" ? "nombre" : "apellido";
      const value = event.target.value.trim(); // Elimina los espacios en blanco al principio y al final

      if (value) {
        this[property] = value;
        this.errorMessage = "";
      } else {
        // Si el valor está vacío, establece el valor de la propiedad en una cadena vacía
        this[property] = "";
        // Puedes mostrar un mensaje de error o realizar alguna otra acción para indicar al usuario que el campo es obligatorio
        this.errorMessage = `El ${property} no puede estar vacío`;
      }
      this.$emit("validNames", {
        is_valid: this.nombre && this.apellido,
        name: this.nombre,
        last_name: this.apellido
      });
    },
  },
};
</script>

<style>
.error-message {
  color: red;
  margin-top: 5px;
}
.user-input-container {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.lbl-user-name,
.lbl-user-lastname {
  grid-row: 1;
}

.in-user-input-names {
  width: 90%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  justify-self: center;
}
</style>
