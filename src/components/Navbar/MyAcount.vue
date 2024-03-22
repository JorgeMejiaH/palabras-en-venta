<template>
  <div class="user-dropdown">
    <div class="dropdown-header">
        <img src="@assets/user-logo.png" alt="user-logo" class="dropdown-logo">
        {{ title }}
        {{ subtitle }}
        <img src="@/assets/arrow-down.png" alt="arrow-down" class="dropdown-icon">
    </div>
    <div class="dropdown-wraper">
        <ul class="dropdown-list">
            <li class="dropdown-list-item">
                Mi cuenta
            </li>
            <li class="dropdown-list-item">
                Libreta de direcciones
            </li>
            <li class="dropdown-list-item">
                Compra/Reserva y cancelaciones
            </li>
            <li class="dropdown-list-item">
                Sigue tu pedido
            </li>
            <li class="dropdown-list-item">
                Cerrar seción
            </li>
            <li class="dropdown-list-item">
                Suspender cuenta
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>