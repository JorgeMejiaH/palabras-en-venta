<template>
  <div class="background-validation-container">
    <sign-up-header />
    <div class="validation_container">
      <div class="validation-content">
        <div class="validationcodetxt-container">
          <h1 class="txt-code-validation">Código de validación</h1>
          <h2 class="txt-code">introduce el código que se envió a tu correo</h2>
        </div>
        <form
          @submit.prevent="handleSubmit"
          class="code-input"
          name="validation-code-form"
        >
          <div class="validation_input_container">
            <input
              type="text"
              :value="code"
              @input="handleValidationCode"
              placeholder="   Código"
              class="in-validation-code"
              id="validation-code"
            />
            <div v-if="showError" class="error-message">
              Ingresa un código de verrificacion válido.
            </div>
          </div>
          <button
            type="submit"
            class="btn-code-validation"
            @click="validateVerificationCode"
          >
            Validar código
          </button>
        </form>
        <router-link to="/" class="link-resend-code"
          >¿No recibiste tu código?</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import SignUpHeader from "../SignUpPage/SignUpHeader.vue";
import hostMixin from "@/mixins/host.js";
import axios from "axios";

export default {
  components: { SignUpHeader },
  mixins: [hostMixin],
  data() {
    return {
      code: "",
      showError: false,
      email: "",
    };
  },
  methods: {
    handleValidationCode(event) {
      this.code = event.target.value;
    },
    validateCode() {
      this.$router.push("/password-change");
    },
    validateVerificationCode() {
      const data = {
        email: this.email,
        validation_code: this.code,
      };
      axios
        .post(hostMixin.data().host + "api/verify_code", data)
        .then((response) => {
          console.log(response.data);
          const userUUID = response.data.message.user_uuid;
          const validationCode = this.code;
          this.$router.push({path: "/password-change", query: {userUUID, validationCode}});
        })
        .catch((error) => {
          console.error("Error fetching email:", error.response.data);
          this.showError = true;
        });
    },
  },
  mounted() {
    this.email = this.$route.query.email;
  }
};
</script>

<style>
.validationcodetxt-container {
  display: flex;
  flex-direction: column;
}
.link-resend-code {
  margin-top: 2%;
  display: flex;
  color: black;
  text-decoration: none;
}

.background-validation-container {
  height: 100vh;
  width: 100vw;
  background-color: #050835;
  background-image: url(/src/assets/registerBackground.png);
  background-size: cover;
  background-position: center;
}
.code-input {
  margin-top: 4%;
  display: flex;
  align-items: center;
}
.validation_container {
  position: relative;
  top: 30%;
  left: 28%;
  height: 39%;
  width: 35%;
  border-radius: 45px;
  display: flex;
  background-color: white;
  flex-wrap: wrap;
}

.validation-content {
  margin-top: 8%;
  margin-bottom: 8%;
  flex-grow: 1;
  flex-basis: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10%;
}

.txt-code-validation {
  flex-grow: 1;
  flex-basis: 200;
  font-size: 270%;
  text-align: left;
  margin: 0;
  font-family: Raleway;
  font-weight: 700;
  color: black;
}

.btn-code-validation {
  height: 3.5vh;
  background-color: #050835;
  border-radius: 8px;
  color: white;
  margin-left: 1%;
  font-size: 100%;
}
.code-input {
  flex-grow: 1;
  width: 100%;
}

.txt-code {
  font-size: 140%;
  flex-grow: 1;
  flex-basis: 200;
  flex: 1;
  margin-bottom: 0;
  font-family: Raleway;
  font-weight: 400;
}
.validation_input_container {
  height: 3.5lvh;
  display: flex;
}
.in-validation-code {
  border-radius: 8px;
  width: 35lvh;
}
</style>
