<template>
  <div class="home">
    <h1>Home</h1>
    <navbar />
  </div>
  <password-change/>

</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import PasswordChange from '@/components/UserPage/PasswordChange.vue';
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { Navbar, PasswordChange },
};
</script>

