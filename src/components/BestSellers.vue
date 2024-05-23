<template>
    <div>
      <Navbar />
      <div class="background-container-bestseller">
        <img
          src="@/assets/backgroundCuadros.png"
          alt="Fondo de la pagina"
          class="background-bestseller"
        />
        <div class="text-overlay">
          <h1>Más vendidos</h1>
          <h2>Libros</h2>
        </div>
      </div>
      <div class="book-list-page">
        <div class="content-books">
          <Filters @apply-filters="applyFilters" />
          <div class="books">
            <BookCard
              v-for="(book, index) in filteredBooks"
              :key="index"
              :book="book"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
</template>
  
  <script>
  import BookCard from './BookCard.vue';
  import Filters from './Filters.vue';
  import Footer from '@/components/Footer.vue';
  import Navbar from '@/components/Navbar/Navbar.vue';
  import FilosofyBooks from "@/assets/filosofyBooks.png";
  
  export default {
    components: {
      BookCard,
      Filters,
      Footer,
      Navbar
    },
    data() {
      return {
        books: [
          // Ejemplo estático de libros, esto se reemplazará con datos del backend
          {
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            price: 63000,
            image: FilosofyBooks,
          },
          {
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            price: 63000,
            image: FilosofyBooks,
          },
          {
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            price: 63000,
            image: FilosofyBooks,
          },
          {
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            price: 63000,
            image: FilosofyBooks,
          },
          {
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            price: 63000,
            image: FilosofyBooks,
          },
          {
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            price: 63000,
            image: FilosofyBooks,
          },
          {
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            price: 63000,
            image: FilosofyBooks,
          },
          {
            title: "El Sastre de Gloucester",
            author: "Beatrix Potter",
            price: 63000,
            image: FilosofyBooks,
          },
          // Añadir más libros aquí
        ],
        filteredBooks: [],
      };
    },
    methods: {
      applyFilters(filters) {
        // Filtrar libros basados en los filtros aplicados
        this.filteredBooks = this.books.filter(book => {
          // Lógica de filtrado basada en los filtros
          // Por ejemplo, si se filtra por género o idioma
          return true; // Cambiar con la lógica de filtrado adecuada
        });
      },
    },
    created() {
      // Inicializar libros filtrados con todos los libros
      this.filteredBooks = this.books;
  
      // TODO: Obtener libros del backend
      // axios.get('API_ENDPOINT')
      //   .then(response => {
      //     this.books = response.data;
      //     this.filteredBooks = this.books;
      //   })
      //   .catch(error => {
      //     console.error("Hubo un error al obtener los libros: ", error);
      //   });
    },
  };
  </script>
  
<style scoped>

.background-container-bestseller {
  position: relative;
  width: 100%;
  height: 400px; /* Ajusta la altura según sea necesario */
}

.background-bestseller {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-overlay {
  position: absolute;
  top: 40%;
  left: 10%;
  transform: translate(-50%, -50%);
  color: black; /* Ajusta el color del texto */
  text-align: left;
  z-index: 1;
}

.content-books {
  display: flex;
  border-radius: 10px;
}

.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 20px;
}

h1, h2 {
  margin: 0;
}

.book-list-page h1, .book-list-page h2 {
  text-align: left;
  margin-left: 60px;
}
</style>