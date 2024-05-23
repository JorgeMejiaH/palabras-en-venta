<template>
  <div class="home-page-container">
    <navbar />
    <div class="home-intro-container">
      <img
        src="@/assets/page-title.png"
        alt="titulo-de-pagina"
        class="home-page-title"
      />
      <h1>Conoce nuevos mundos literarios</h1>
      <h2>Títulos que te llevarán a otro mundo</h2>
      <div
        v-for="(book, index) in books"
        :key="index"
        class="home-title-books-img"
      >
        <img
          :src="getimagepath(book)"
          :alt="`${book} genre`"
          class="title-books-img"
        />
      </div>
    </div>
    <div class="home-news-container">
        <h1 class="home-news-txt">
            Novedades
        </h1>
        <button class="home-see-more">Ver más</button>
        <div 
        v-for="(book, index) in newBooks"
        :key="index"
        class="home-new-books">
            <books :TituloLibro="book"/>
        </div>
    </div>
    <div class="home-recomended-container">
        <h1 class="home-recomended-txt">Recomendados</h1>
        <button class="home-see-more">Ver más</button>
        <div 
        v-for="(book, index) in recomendedBooks"
        :key="index"
        class="home-recomended-books">
            <books :TituloLibro="book"/>
        </div>
    </div>
    <div class="home-bestseller-container">
        <h1 class="home-bestseller-txt">Más vendidos</h1>
        <button class="home-see-more">Ver más</button>
        <div 
        v-for="(book, index) in bestsellerdBooks"
        :key="index"
        class="home-bestseller-books">
            <books :TituloLibro="book"/>
        </div>
    </div>
    <Footer containerClass="footer-container-home" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Books from '@/components/Books.vue';
export default {
  components: {
    Navbar,
    Footer,
    Books,
  },
  data(){
    return{
        books:["El sastre de Gloucester"],
        newBooks:["El sastre de Gloucester"],
        recomendedBooks:["El sastre de Gloucester"],
        bestsellerdBooks:["El sastre de Gloucester"],
    };
  },
  methods: {
    getimagepath(TituloLibro) {
      const formattedTitle = TituloLibro.toLowerCase().replace(/\s+/g, '');
      return require(`@/assets/${formattedTitle}.png`);
    },
  },
};
</script>

<style>
.home-intro-container{
  background-image: linear-gradient(to bottom, #409BCC, #ffffff);
}
</style>
