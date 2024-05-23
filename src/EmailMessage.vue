<template>
    <div>
        <img
        src="@/assets/registerBackground.png"
        alt="Fondo de la pagina"
        class="fondo-mensaje"
        />
        <div class="container-mensaje-email">
            <h1>Actualizar contraseña</h1>
            <label for="Email" class="lbl-user-email">Te enviaremos un email con un código para que puedas restablecer tu contraseña:</label>
            <input
                type="text"
                :value="Email"
                @input="handleChange" 
                id="user-email"
                class="in-user-input"
            />
            <div v-if="!isValidEmail" class="error-message">
                Ingresa un correo electrónico válido.
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      Email: "",
      isValidEmail: true,
    };
  },
  methods: {
    handleChange(event) {
      const inputText = event.target.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      this.isValidEmail = emailRegex.test(inputText);

      if (this.isValidEmail) {
        this.Email = inputText;
      }
    },
  },
};
</script>

<style>
.fondo-mensaje {
    position: absolute;
    top: 0;
    left: 0;
    width: 200vh;
    height: 100vh;
    z-index: -2;
    background-color: #050835;
}

.container-mensaje-email{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30%;
    margin-top: 10%;
    width: 603px;
    height: 341px;
    background-color: white;
    border-radius: 20px;
}

</style>