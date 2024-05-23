<template>
  <navbar/>
  <div class="author-info-background">
    <div class = 'author-info-img'>
        <img :src="authorImage" alt = "Author Image" />
    </div>
    <div class="author-description-container">
        <h1> {{ authorName }}</h1>
        <h2> {{ authorDescription }}</h2>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue'
export default {
    components: { Navbar },
    data(){
        return {
            authorName: "defaultauthor",
            authorDescription: " nuestro amigo",
        };
    },
    computed: {
      authorImage() {
        return require(`@/assets/${this.authorName}.png`);
    }
  }
}
</script>

<style>
.author-info-background{
    background-image: linear-gradient(#3B63A8 90%,#ffffff);
    display: flex;
    justify-content: space-evenly;
    margin-left: ;
    height: 90lvh;
}
.author-info-img{
  margin: 5%;
  
}
.author-description-container{
    display: flex;
    flex-direction: column;

}
</style>