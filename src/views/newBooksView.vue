<template>
    <div>
      <Navbar />
      <div class="background-container-bestseller">
        <div class="text-overlay">
          <h1>Novedades</h1>
          <h2>Libros</h2>
        </div>
      </div>
  
      <div class="content-wrapper">
        <Filters @apply-filters="applyFilters" />
        <div class="book-list-page">
          <div class="content-books">
            <div class="books">
              <BookCard
                v-for="(book, index) in filteredBooks"
                :key="index"
                :book="book"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
    
    <script>
    import BookCard from '@/components/BookCard.vue';
    import Filters from '@/components/Filters.vue';
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
              genre: "Filosofía",
              language: "Español",
              image: FilosofyBooks,
            },
            {
              title: "El Sastre de Gloucester",
              author: "Beatrix Potter",
              price: 63000,
              genre: "Historia",
              language: "Ingles",
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
      height: 20vh;
      background-image: url(/src/assets/registerBackground.png);
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
    
    .content-wrapper {
      display: flex;
      margin-top: 20px;
    }
    
    .content-books {
      display: flex;
      border-radius: 10px;
      width: 1180px;
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
      display: flex;
      text-align: left;
      margin-left: 60px;
      width: 600px;
    }
    </style>
  