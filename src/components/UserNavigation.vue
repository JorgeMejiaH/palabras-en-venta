<template>
  <div class="user-navigator">
    <img src="@/assets/user-logo.png" alt="user-logo" class="img-user-logo-navigator">
    <router-link to="/user-info">Información personal</router-link>
    <img src="@/assets/location-dot.png" alt="location-dot" class="img-location-dot">
    <router-link to="/directions">Libreta de direcciones</router-link>
    <img src="@/assets/list-check.png" alt="list-check" class="img-list-check">
    <router-link to="/purchases">Compras / reservas y Cancelaciones</router-link>
    <img src="@/assets/credit-card.png" alt="credit-card" class="img-credit-card">
    <router-link to="/finantial-management">Gestión financiera</router-link>
    <img src="@/assets/truck.png" alt="shipment-truck" class="img-shipment-truck">
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>