<template>
    <div>
      <Navbar />
      <img
        src="@/assets/backgroundCuadros.png"
        alt="Fondo de la pagina"
        class="background-genre"
      />
      <div class="container-genre">
        <div v-for="genre in genres" :key="genre.id" class="genre-section">
          <h1>{{ genre.name }}</h1>
          <div v-if="genre.books.length" class="books-container">
            <div v-for="book in paginatedBooks" :key="book.id" class="book">
                <router-link :to="{ name: 'BookDetail', params: { id: book.id } }">
                    <img :src="book.cover_image" alt="Cover" />
                    <p class="book-title">{{ book.title }}</p>
                    <p class="book-author">{{ book.author }}</p>
                    <p class="book-price">{{ book.price }}</p>
                </router-link>
            </div>
          </div>
          <div v-else>
            <p>No hay libros en este género.</p>
          </div>
        </div>
      </div>
      <div class="sort-pagination-container">
        <div class="sort-container">
          <label for="sort">Ordenar por:</label>
          <select id="sort" v-model="selectedSort" @change="sortBooks">
            <option value="title">Título</option>
            <option value="author">Autor</option>
            <option value="price">Precio</option>
          </select>
        </div>
        <div class="pagination-container">
          <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>
          <span>Página {{ currentPage }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
        </div>
      </div>
      <Footer class="footer-genre" />
    </div>
</template>
  
  
  <script>
  import Footer from '@/components/Footer.vue';
  import Navbar from "@/components/Navbar/Navbar.vue";
  
  // Importa las imágenes directamente
  import FilosofyBooks from "@/assets/filosofyBooks.png";
  import ActionAdventureBooks from "@/assets/acctionAdventureBooks.png";
  import FantasyBooks from "@/assets/fantasyBooks.png";
  
  export default {
    components: {
      Footer,
      Navbar
    },
    data() {
      return {
        genres: [
          {
            id: 1,
            name: "Ficción",
            books: [
              {
                id: 1,
                title: "El Sastre de Gloucester",
                author: "Beatrix Potter",
                cover_image: FilosofyBooks, // Usa la importación aquí
                price: "$63.000" // Añadir precio
              },
              {
                id: 2,
                title: "Otro Libro de Ficción",
                author: "Autor Desconocido",
                cover_image: ActionAdventureBooks, // Usa la importación aquí
                price: "$45.000" // Añadir precio
              },
              {
                id: 3,
                title: "Alicia en el país de las maravillas",
                author: "Lewis Carroll",
                cover_image: FantasyBooks, // Usa la importación aquí
                price: "$50.000" // Añadir precio
              }
            ]
          }
        ],
        selectedSort: 'title',
        currentPage: 1,
        itemsPerPage: 4
      };
    },

    computed: {
        sortedBooks() {
        return [...this.genres[0].books].sort((a, b) => {
            if (this.selectedSort === 'price') {
            return parseFloat(a.price.replace('$', '').replace('.', '')) - parseFloat(b.price.replace('$', '').replace('.', ''));
            }
            return a[this.selectedSort].localeCompare(b[this.selectedSort]);
        });
        },
        paginatedBooks() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.sortedBooks.slice(start, end);
        },
        totalPages() {
        return Math.ceil(this.genres[0].books.length / this.itemsPerPage);
        }
    },

    methods: {

        sortBooks() {
        this.currentPage = 1; // Reset to the first page after sorting
        },
        prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        },
        nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
        },

      fetchGenres() {
        // axios.get('http://localhost:8000/genres/')
        //     .then(response => {
        //         this.genres = response.data;
        //     })
        //     .catch(error => {
        //         console.error('There was an error fetching the genres:', error);
        //     });
      },
      fetchBooks() {
        // axios.get('http://localhost:8000/books/')
        //     .then(response => {
        //         this.books = response.data;
        //     })
        //     .catch(error => {
        //         console.error('There was an error fetching the books:', error);
        //     });
      }
    },
    created() {
      // this.fetchGenres();
      // this.fetchBooks();
    }
  };
  </script>
  
<style scoped>
  .background-genre {
    width: 99vw;
  }
  
  .container-genre {
    padding: 20px;
  }
  
  .sort-pagination-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
  }
  
  .sort-container {
    display: flex;
    align-items: center;
  }
  
  .sort-container label {
    margin-right: 10px;
  }
  
  .pagination-container {
    display: flex;
    align-items: center;
  }
  
  .pagination-container button {
    background-color: #001f3f;
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .pagination-container button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .genre-section {
    margin-bottom: 40px;
  }
  
  .books-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .book {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: 20px;
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
  }
  
  .book img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .book-title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .book-author,
  .book-price {
    color: #555;
  }
  
  .book:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .footer-genre {
    position: relative;
    top: 80%;
  }
</style>  