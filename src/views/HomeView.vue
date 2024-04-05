<template>
  <div class="home">
    <h1>Home</h1>
    <login-page/>
  </div>
</template>

<script>
import LoginPage from '@/components/LoginPage/LoginPage.vue';


export default {
  components: { LoginPage },
  name: "HomeView",

};
</script>
