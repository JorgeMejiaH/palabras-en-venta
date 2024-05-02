<template>
  <div class="home">
    <h1>Home</h1>
    <navbar />
  </div>
  

</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: { Navbar,},
};
</script>

