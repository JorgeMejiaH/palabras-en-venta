<template>
  <div>
    <sign-up-header />
    <img
      src="@/assets/registerBackground.png"
      alt="Fondo de la pagina"
      class="fondo-mensaje"
    />
    <div class="container-mensaje-email">
      <h1 class="txt-message-email">Actualizar contraseña</h1>
      <label for="Email" class="lbl-user-email"
        >Te enviaremos un email con un código para que puedas restablecer tu
        contraseña:</label
      >
      <input
        type="text"
        :value="Email"
        @input="handleEmail"
        id="user-email"
        class="in-user-input"
      />
      <div v-if="showError" class="error-message">
        Ingresa un correo electrónico válido.
      </div>
      <div class="botones">
        <button class="boton-recuperar" @click="sendVerificationCode">
          Recuperar contraseña
        </button>
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
import SignUpHeader from "@/components/SignUpPage/SignUpHeader.vue";
import hostMixin from "@/mixins/host.js";
import axios from 'axios';


export default {
  components: { SignUpHeader },
  mixins: [hostMixin],

  data() {
    return {
      Email: "",
      isValidEmail: true,
      showError: false,
    };
  },
  methods: {
    handleEmail(event) {
      const inputText = event.target.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      this.isValidEmail = emailRegex.test(inputText);

      if (this.isValidEmail) {
        this.Email = inputText;
      }
    },
    cancelarV() {
      this.$router.push("/login");
    },
    sendValidationCode() {
      if (this.isValidEmail) {
        if (this.Email.trim() === "") {
          this.showError = true;
        } else {
          this.$router.push("/validation-code");
        }
      } else {
        this.$router.push("/email");
      }
    },
    sendVerificationCode() {
      const data = {
        email: this.Email
      }
      axios
        .post(hostMixin.data().host + "api/password/send_code/", data)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ path: "/validation-code", query: { email: this.Email } });
        })
        .catch((error) => {
          console.error("Error fetching email:", error.response.data);
          this.showError = true;
        });
    },
  },
};
</script>

<style>
.fondo-mensaje {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background-color: #050835;
}

.container-mensaje-email {
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
.txt-message-email {
  font-family: Raleway;
  font-weight: 700;
  color: black;
}
.lbl-user-email {
  font-family: Raleway;
  font-weight: 400;
}
.botones {
  position: relative;
  top: 5%;
  right: 23%;
  display: flex;
  gap: 5px;
}

.boton-recuperar {
  border-radius: 10px;
  background-color: #050835;
  color: white;
  cursor: pointer;
}

.boton-cancelar {
  border-radius: 10px;
  cursor: pointer;
}

.texto-redes {
  color: white;
}

.redesRecuperar {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
}
</style>
