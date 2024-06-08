<template>
    <div>
      <Navbar />
      <div class="book-detail-container">
        <img :src = book.cover_image  alt="Cover" class="book-cover" />
        <div class="book-info">
          <h1>{{ book.title }}</h1>
          <h2>{{ book.author }}</h2>
          <p>{{ book.description }}</p>
          <p class="book-price">{{ book.price }}</p>
          <input type="number" v-model.number="quantity" min="1">
          <p>Quedan # unidades</p>
          <button @click="addToCart">Agregar a carrito</button>
          <button @click="reserveBook">Reservar</button>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import coverImage from "@/assets/elsastredegloucester.png";

  
  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        book: {
            id: 1,
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            cover_image: coverImage,
            description: "Descripción del libro El Sastre de Gloucester.",
            price: "$63.000"
        },
        quantity: 1,
      };
    },
    created() {
      
    },
    methods: {
      addToCart(){
        this.$emit('add-to-cart', this.quantity);
      },
      reserveBook() {
        if (this.quantity > 3) {
          alert("Solo puedes reservar un máximo de 3 libros del mismo ejemplar.");
        } else {
          alert("Libro reservado correctamente.");
        }
      },
    }
  };
  </script>
  
  <style scoped>
  .book-detail-container {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  
  .book-cover {
    width: 300px;
    height: auto;
    margin-right: 20px;
  }
  
  .book-info {
    max-width: 600px;
  }
  
  .book-info h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
  
  .book-info h2 {
    font-size: 1.5em;
    color: #555;
    margin-bottom: 1em;
  }
  
  .book-info p {
    font-size: 1.2em;
    line-height: 1.5;
    margin-bottom: 1em;
  }
  
  .book-price {
    font-size: 1.5em;
    font-weight: bold;
    color: #000;
  }

  button {
    margin: 5px;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
  