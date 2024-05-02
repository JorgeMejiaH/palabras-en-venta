<template>
    <div>
      <user-info/>
    </div>
  </template>
  
  <script>
import UserInfo from '@/components/User/UserInfo.vue';
  
  export default {
    name: "User-Info",
    components: {UserInfo  },
  };
  </script>