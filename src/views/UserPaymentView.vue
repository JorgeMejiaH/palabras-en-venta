<template>
  <div class="user-payment-bckgr-container">
    <navbar />
    <options routeOptionsContainer="user-payment-routes" />
    <div class="user-payment-container">
      <div class="payment-method-txt-container">
        <h1 class="payment-method-txt">Métodos de pago</h1>
      </div>
      <div class="button-container">
        <button class="add-payment-method" @click="navigateToAddCard">
          <img src="@/assets/add.png" alt="agregrar" class="img-add-user-payment">
          <span class="add-payment-text">Agregar método de pago</span>
        </button>
      </div>
      <div class="user-payment-info-container">
        <div class="user-payment-saldo">
          <h4></h4>
        </div>
        <div v-for="(card, index) in cards" :key="index" class="payment-card" @click="sendToCardView(card.uuid)">
          <img :src="getCardImage(cardLastDigit(card.card_number))" alt="marca-tarjeta" class="img-card-brand"/>
          <h4>******{{ cardLastFourDigits(card.card_number) }}</h4>
          <img src="@/assets/angle-right.png" alt="flecha-derecha" class="user-payment-flecha-derecha"/>
        </div>
      </div>
    </div>
    <Footer containerClass="footer-container-user-payment" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Options from "@/components/User/Options.vue";
import Cookies from 'js-cookie';
import hostMixin from "@/mixins/host.js";
import axios from 'axios';
export default {
  mixins: [hostMixin],
  components: {
    Navbar,
    Footer,
    Options,
  },
  data() {
    return {
      sessionInfo: null,
      cards: [],
    };
  },
  beforeMount(){
    // this.fetchDocumentTypes();
    console.log("Creating");
    this.sessionInfo = JSON.parse(this.getTokenFromCookie());
    this.getPaymentMethods();
    console.log(this.sessionInfo.user.uuid)
  },
  methods: {
    getTokenFromCookie() {
      // Retrieve the token from the cookie
      return Cookies.get('loginToken');
    },
    sendToCardView(uuid){
      this.$router.push({path: "/card-info", query: { uuid }});
    },
    getPaymentMethods(){
      axios.get(hostMixin.data().host + 'api/card/?user__uuid=' + this.sessionInfo.user.uuid)
      .then(response => {
          this.cards = response.data;
        })
        .catch(error => {
          console.error('Error fetching payments:', error);
        });
    },
    getCardImage(cardLastDigit){
      if(cardLastDigit % 2 == 0){
        return require(`@/assets/visa.png`);
      }else{
        return require(`@/assets/mastercard.png`);
      }
    },
    navigateToAddCard(){
      this.$router.push("/add-card");
    },
    cardLastDigit(card){
      const lastChar = card.slice(- 1);
      this.lastCharacter = parseInt(lastChar, 10);
      return this.lastCharacter;
    },
    cardLastFourDigits(card){
      return card.slice(-4)
    },

  },
};
</script>

<style>
.img-add-user-payment{
  margin-right: 10px;
}
.add-payment-text {
  display: inline-block;
}
.payment-method-txt{
  font-weight: bold;
  color: black;
}
.payment-method-txt-container{
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-left: 10%;
}
.user-payment-bckgr-container {
  background-image: url(/src/assets/UserInfoBackground.jpg);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  width: 100vw; /* Ancho igual al 100% del viewport */
  height: 100vh; /* Altura igual al 100% del viewport */
  overflow-y: auto; /* Evita que el contenido se desborde fuera del contenedor */
  position: relative;
  margin: 0;
  padding: 0;
}
.user-payment-routes {
  position: absolute;
  background-color: rgba(34, 33, 33, 0.6);
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 38%;
  left: 20%;
}
.user-payment-container {
  background-color: white;
  width: 60%;
  position: absolute;
  right: 0;
  top: 30%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
}
.footer-container-user-payment {
  position: relative;
  top: 80%;
}
.button-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-right: 5%;
  height: 50%;
  gap: 10px;
}
.add-payment-method {
  width: 30%;
  height: 80%;
  left: 90;
  border-radius: 10px;
  cursor: pointer;
  background-color: #3b63a8c9;
  transition: background-color 0.3s ease;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-payment-info-container {
  margin-top: 5%;
}
.payment-card {
  border: 1px solid gray;
  border-radius: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
  padding: 5px;
}
.user-payment-flecha-derecha{
  margin-left: auto;
}
</style>
