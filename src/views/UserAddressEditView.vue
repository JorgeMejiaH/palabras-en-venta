<template>
  <div class="user-address-edit-view">
    <edit-address />
  </div>
</template>

<script>
import EditAddress from "@/components/User/EditAddress.vue";

export default {
  name: "user-address-edit-view",
  components: { EditAddress },
};
</script>
