<template>
  <navbar />
  <div class="card-details-background">
    <options routeOptionsContainer="user-card-info-routes" />
    <div Class="card-detail-container">
      <div class="personalinfo-edit">
        <router-link to="/payment-method" class="card-info-router">
          <img src="@/assets/angle-left.png" alt="flecha-izquierda" />
          Métodos de pago
        </router-link>
        <div class="card-delete-container" @click="deleteCard(card.uuid)">
          <img
            src="@/assets/trash-can.png"
            alt="trash-can"
            class="card-trash-can"
          />
          <h6 class="card-delete-txt">Eliminar este producto</h6>
        </div>
      </div>
      <div class="card-container">
        <div class="card-details">
          <div class="card-details-1r">
            <img
              src="@/assets/cardDetailsIcon.png"
              alt="card-details-icon"
              class="card-details-icon"
            />
            <h4>Card</h4>
          </div>
          <div class="card-details-2r">
            <h3>{{ card.card_number }}</h3>
          </div>
          <div class="card-details-3r">
            <h5>Fecha de expiración</h5>
            <h5>{{ card.expiration_date }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Options from "@/components/User/Options.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import hostMixin from "@/mixins/host.js";
import axios from "axios";
export default {
  components: { Options, Navbar },
  data() {
    return {
      card: {
        uuid:null,
        user: null,
        name: null,
        card_number: null,
        expiration_date: null,
        ccv: null,
        card_type: null,
        amount: null,
      },
    };
  },
  created() {
    const uuid = this.$route.query.uuid;
    if (uuid) {
      this.fetchCardDetails(uuid);
    }
  },
  methods: {
    fetchCardDetails(uuid) {
      axios
        .get(hostMixin.data().host + "api/card/" + uuid)
        .then((response) => {
          this.card = response.data;
        })
        .catch((error) => {
          console.error("Error fetching payments:", error);
        });
    },
    deleteCard(uuid){
      axios
        .delete(hostMixin.data().host + "api/card/" + uuid)
        .then(navigateToPaymentView())
    },
    navigateToPaymentView(){
      this.$router.push("/payment-method");
    },
  },
};
</script>

<style>
.card-info-router{
  text-decoration: none;
  font-weight: bold;
  color: black;
}
.user-card-info-routes{
  position: absolute;
  background-color: rgba(34, 33, 33, 0.6);
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 30%;
  left: 35%;
}
.card-details-background {
  display: flex;
  background-image: url(/src/assets/UserInfoBackground.jpg);
  height: 100vh;
  width: 100vw;
  background-color: #050835;
}
.card-delete-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card-detail-container {
  background-color: white;
  width: 45%;
  position: absolute;
  right: 0;
  top: 30%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 2%;
}
.card-details-icon {
  width: 20%;
  height: auto;
}
.card-container {
  display: flex;
  margin-top: 2%;
  width: 200%;
  height: auto;
}
.card-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(to right, #d5d5d5 90%, grey);
  border-radius: 10px;
  padding: 2%;
}
.card-details-1r {
  display: flex;
}
.card-delete-txt {
  color: red;
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
