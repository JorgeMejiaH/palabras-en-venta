<template>
  <navbar />
  <div class="card-details-background">
    <options />
    <div Class="change-password-container">
      <div class="personalinfo-edit">
        <router-link>
          <h6 class="backto-payment-methods">Métodos de pago</h6>
        </router-link>
        <div>
          <h6>Eliminar este producto</h6>
        </div>
      </div>
      <div class="card-container">
        <div class="card-details">
          <div class="card-details-1r">
            <img
              src="/src/assets/cardDetailsIcon.png"
              alt="card-details-icon"
            />
            <h6>Card</h6>
          </div>
          <div class="card-details-2r">
            <h6>****</h6>
            <h6>****</h6>
            <h6>****</h6>
            <h6>{{ lastDigits }}</h6>
          </div>
          <div class="card-details-3r">
            <h6>Fecha de expedición</h6>
            <h6>{{ expeditionDate }}</h6>
          </div>
        </div>
        <div class="card-editar-container">
          <router-link to="/user-card-edit">
            <h6>Editar</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Options from "@/components/User/Options.vue";
import Navbar from "../Navbar/Navbar.vue";
export default {
  components: { Options, Navbar },
  data() {
    return {
      lastDigits: "",
      expeditionDate: "",
    };
  },
};
</script>

<style>
.card-details-background {
  display: flex;
  background-image: url(/src/assets/UserInfoBackground.jpg);
}
.card-container {
  display: flex;
}
.card-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(to right, #d5d5d5 90%, grey);
}
.card-details-1r {
  display: flex;
}

.card-details-2r {
  display: flex;
  justify-content: space-between;
}

.card-details-3r {
  display: flex;
}
.card-editar-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
