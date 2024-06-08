<template>
  <div class="cart-background-container">
    <div class="cart-data-container">
      <main class="cart-info-container">
        <div
          v-for="(book, index) in booksInCart"
          :key="index"
          class="cart-books-info"
        >
          <h3 style="font-weight: bold">{{ book.title }}</h3>
          <h3>Precio: ${{ book.price }}</h3>
        </div>
      </main>
      <aside class="cart-payment-container">
        <h1>Total:</h1>
        <h2>{{ totalPrice }}</h2>
        <select name="selectedCard" id="selectedCard">
          <option value="null" disabled>Seleccione una tarjeta</option>
          <option v-for="card in cards" :key="card.uuid" :value="card.uuid">
            {{ card.number }}
          </option>
        </select>
        <button>Pagar</button>
        <button>Cancelar</button>
      </aside>
    </div>
    <footer>
      <Footer containerClass="footer-container-cart" />
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      booksInCart: [
        {
          title: "El sastre de Gloucester",
          price: 63000,
        },
      ],
    };
  },
};
</script>

<style>
.cart-background-container {
  background-image: url(/src/assets/UserInfoBackground.jpg);
  background-size: cover;
  background-position: center;
  background-color: #050835;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  margin: 0;
  padding: 0;
}
.cart-data-container {
  display: flex;
  flex-direction: row;
  margin-top: 8%;
  margin-left: 18%;
}
.cart-info-container {
  background-color: white;
  width: 60%;
  padding: 3%;
}
.cart-payment-container {
  background-color: #7cb9f2;
  padding: 20px;
}
.cart-books-info {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  -ms-flex-align: center;
}
.footer-container-cart{
    position: relative;
    top: 30vh;
}
</style>
