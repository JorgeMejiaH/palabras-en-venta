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
import NavbarVue from './Navbar/Navbar.vue'
export default {
    components: { NavbarVue },
    data(){
        return {
            authorName: "",
            authorDescription: ""
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
    background-image: linear-gradient(#3B63A8 90%,white);
    display: flex;
    height: 90lvh;
}

.author-description-container{
    display: flex;
    flex-direction: column;

}
</style>