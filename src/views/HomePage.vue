<template>
  <div class="home-page-container">
    <navbar />
    <div class="home-intro-container">
      <img
        src="@/assets/page-title.png"
        alt="titulo-de-pagina"
        class="home-page-title"
      />
      <div class="page-titles-slogans">
        <h1 class="home-page-title-txt">Conoce nuevos mundos literarios</h1>
        <h2 class="home-page-subtitle-txt">Títulos que te llevarán a otro mundo</h2>
      </div>
      <div class="home-page-title-books">
        <div
          v-for="(book, index) in books"
          :key="index"
          class="home-title-books-img"
        >
          <img
            :src="getimagepath(book)"
            :alt="book.title"
            class="title-books-img"
          />
        </div>
        <img
          src="@/assets/home-image.png"
          alt="home-image"
          class="home-page-image"
        />
      </div>
    </div>
    <div class="home-news-container">
      <div class="class-header">
        <h1 class="home-news-txt">Novedades</h1>
        <button class="home-see-more" @click="navigateToNewBooks">VER MÁS</button>
      </div>
      <div class="home-new-books-container">
        <div
          v-for="(book, index) in newBooks"
          :key="index"
          class="home-new-books"
          @click="navigateToBookShop"
        >
          <books :TituloLibro="book" />
        </div>
      </div>
    </div>
    <div class="home-recomended-container">
      <div class="class-header">
        <h1 class="home-recomended-txt">Recomendados</h1>
        <button class="home-see-more" @click="navigatedToRecomended">VER MÁS</button>
      </div>
      <div class="home-recomended-books-container">
        <div
          v-for="(book, index) in recomendedBooks"
          :key="index"
          class="home-recomended-books"
        >
          <books :TituloLibro="book" />
        </div>
      </div>
    </div>
    <div class="home-bestseller-container">
      <div class="class-header">
        <h1 class="home-bestseller-txt">Más vendidos</h1>
        <button class="home-see-more" @click="navigateToBestSeller">VER MÁS</button>
      </div>
      <div class="home-best-seller-books-container">
        <div
          v-for="(book, index) in bestsellerdBooks"
          :key="index"
          class="home-bestseller-books"
        >
          <books :TituloLibro="book" />
        </div>
      </div>
    </div>
    <div class="all-books-container">
      <div class="class-header">
        <h1 class="home-all-books-txt">Todos nuestos Libros</h1>
      </div>
      <div class="home-all-books-container">
        <div
          v-for="(book, index) in allBooks"
          :key="index"
          class="home-all-books"
        >
          <books :TituloLibro="book" />
        </div>
      </div>
    </div>
    <Footer containerClass="footer-container-home" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Books from "@/components/Books.vue";
import hostMixin from "@/mixins/host.js";
import axios from 'axios';

export default {
  components: {
    Navbar,
    Footer,
    Books,
  },
  mixins: [hostMixin],
  data() {
    return {
      books: [
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
      ],
      newBooks: [
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
      ],
      recomendedBooks: [
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
      ],
      bestsellerdBooks: [
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
      ],
      allBooks: [
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
        "El sastre de Gloucester",
      ],
    };
  },
  beforeMount(){
    console.log("Creating");
    this.fetchBooksList();
  },
  methods: {
    getimagepath(TituloLibro) {
      const formattedTitle = TituloLibro.toLowerCase().replace(/\s+/g, "");
      return require(`@/assets/${formattedTitle}.png`);
    },
    navigateToBestSeller(){
      this.$router.push('/best-seller')
    },
    navigateToNewBooks(){
      this.$router.push('/new-books')
    },
    navigatedToRecomended(){
      this.$router.push('/recomended-books')
    },
    fetchBooksList(){
      axios.get(hostMixin.data().host + 'api/book/')
        .then(response => {
          //this.books = response.data;
          console.log(this.books)
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    },
    navigateToBookShop(){
      this.$router.push("/book-shop")
    },
  },
};
</script>

<style>
.home-intro-container {
  background-image: linear-gradient(to bottom, #409bcc, #ffffff);
}
.home-page-title-books{
  margin-left: 2%;
}
.page-titles-slogans{
  text-align: start;
  position: relative;
  left: 2%;
}
.home-page-title-txt{
  color: white;
  font-weight: bold;
}
.home-page-subtitle-txt{
  color:#1B4663;
;
}
.home-page-title-books,
.home-new-books-container,
.home-recomended-books-container,
.home-best-seller-books-container,
.home-all-books-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
}
.home-page-image {
  margin-left: auto;
  margin-right: 10%; 
}
.home-title-books-img{
  margin-top: 2%;
}
.home-page-title{
  position: absolute;
  right: 2%;
}
.home-see-more{
  background-color: transparent;
  border-color: #1B4663;
  color: #1B4663;
  border-radius: 2px;
  margin-left: auto;
  margin-right: 15%;
}
.class-header{
  display: flex;
  flex-direction: row;
  margin-top: 3%;
}
.home-news-txt,
.home-recomended-txt,
.home-bestseller-txt,
.home-all-books-txt{
  margin-left: 3%;
  color: black;
  font-weight: bold;
  text-decoration-line: underline;
}
.home-recomended-container,
.all-books-container{
  background-color: #efeced;
  padding: 10px;
}
</style>
