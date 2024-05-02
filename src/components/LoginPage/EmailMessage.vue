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
            <div class="botones">
              <button class="boton-recuperar" @click="sendValidationCode">Recuperar contraseña</button>
              <button class="boton-cancelar" @click="cancelarV">Cancelar</button>
          </div>
        </div>
        <div class="redesRecuperar">
        <a href="https://www.facebook.com/" target="_blank"
          ><img
            src="@/assets/facebook.png"
            alt="logo facebook"
            class="logo-facebook"
        /></a>
        <a href="https://twitter.com/" target="_blank"
          ><img src="@/assets/x.png" alt="logo x" class="logo-x"
        /></a>
        <a href="https://www.instagram.com/" target="_blank"
          ><img
            src="@/assets/instagram.png"
            alt="logo instagram"
            class="logo-instagram"
          />
        </a>
        <p class="texto-redes">Siguenos en nuestras redes sociales</p>
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
    cancelarV(){
    this.$router.push("/login");
  }
  },
  sendVerificationCode() {
      if (!this.isValidEmail) return;

      // Aquí enviarías el código de verificación al correo electrónico ingresado
      // Puedes usar servicios de correo electrónico como SendGrid, Nodemailer, etc.
      // Por ejemplo, puedes llamar a una API que envíe el correo con el código de verificación.
      // Después de enviar el correo, podrías redirigir al usuario a la página donde ingrese el código.

      // Ejemplo de llamada a una API ficticia para enviar el correo
      const verificationCode = Math.floor(10000 + Math.random() * 90000);
      const requestBody = {
        email: this.email,
        verificationCode: verificationCode,
      };

      // Llamada a la API ficticia
      // Aquí deberías hacer una llamada real a tu backend para enviar el correo
      fetch("https://tu-api.com/enviar-codigo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (response.ok) {
            // Enviar el usuario a la página donde ingrese el código de verificación
            this.$router.push("/validation-code");
          } else {
            console.error("Error al enviar el código de verificación");
          }
        })
        .catch((error) => {
          console.error("Error al enviar el código de verificación:", error);
      });
  },

  
}
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

.botones{
  display: flex;
}

.boton-recuperar{
  background-color: #050835;
  color: white;
  cursor: pointer;
}

.boton-cancelar{
  cursor: pointer;
}

.texto-redes{
  color: white;
}

.redesRecuperar{
  position:fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
}
</style>