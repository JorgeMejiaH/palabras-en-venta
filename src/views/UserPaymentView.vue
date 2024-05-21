<template>
    <div class="user-payment-bckgr-container">
      <navbar />
      <options routeOptionsContainer="user-payment-routes" />
      <div class="user-payment-container">
        <h1 class="payment-method">Metodos de pago</h1>
        <button class="add-payment-method">Agregar metodo de pago</button>
        <div class="user-payment-info-container">
            <div 
            v-for="(card, index) in cards"
            :key="index"
            class="payment-card"
            >
            <h5>{{ card }}</h5>
            </div>
        </div>
      </div>
      <Footer containerClass="footer-container-user-payment" />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import Options from '@/components/User/Options.vue';
  export default {
    components: {
      Navbar,
      Footer,
      Options,
    },
    data(){
      return{
        cards:[
            "123456789",
            "987654321",
        ],
      }  
    },
    methods: {
    },
  };
  </script>
  
  <style>
  .user-payment-bckgr-container{
    background-color: red;
  }
  </style>
  