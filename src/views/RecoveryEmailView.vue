<template>
    <div class="recovery-email-view">
      <email-message/>
    </div>
  </template>
  
  <script>
    import EmailMessage from "@/components/LoginPage/EmailMessage.vue"
  
  export default {
    name: "recovery-email-view",
    components: { EmailMessage },
  };
  </script>