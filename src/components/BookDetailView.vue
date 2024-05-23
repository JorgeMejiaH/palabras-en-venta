<template>
    <div>
      <Navbar />
      <div class="book-detail-container">
        <img :src="book.cover_image" alt="Cover" class="book-cover" />
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

  // Importa las imágenes directamente
  import FilosofyBooks from "@/assets/filosofyBooks.png";
  import ActionAdventureBooks from "@/assets/acctionAdventureBooks.png";
  import FantasyBooks from "@/assets/fantasyBooks.png";
  
  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        book: {},
        quantity: 1,
      };
    },
    created() {
      const bookId = this.$route.params.id;
      this.fetchBookDetails(bookId);
    },
    methods: {
      fetchBookDetails(id) {
        // Aquí se debe realizar una petición para obtener los detalles del libro
        // Ejemplo estático:
        const books = [
          {
            id: 1,
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            cover_image: FilosofyBooks,
            description: "Descripción del libro El Sastre de Gloucester.",
            price: "$63.000"
          },
          {
            id: 2,
            title: "Otro Libro de Ficción",
            author: "Autor Desconocido",
            cover_image: ActionAdventureBooks,
            description: "Descripción del otro libro de ficción.",
            price: "$45.000"
          },
          {
            id: 3,
            title: "Alicia en el país de las maravillas",
            author: "Lewis Carroll",
            cover_image: FantasyBooks,
            description: "Alicia drogada",
            price: "$50.000"
          }
        ];
        this.book = books.find(book => book.id === parseInt(id));
      },
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
  