<template>
    <div>
      <user-info-edit/>
    </div>
  </template>
  
  <script>
import UserInfoEdit from '@/components/User/UserInfoEdit.vue';
  
  export default {
    name: "User-Info-edit",
    components: {UserInfoEdit},
  };
  </script>