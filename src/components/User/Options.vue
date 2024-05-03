<template>
  <div :class="routeOptionsContainer">
    <div class="options-routes-items">
      <router-link to="/user-info" class="options-router">
        <img src="@/assets/user.png" alt="usuario" class="icono-usuario" />
        Información personal <br />/ contraseña
      </router-link>
      <p class="options-router">
        <img
          src="@/assets/location-dot.png"
          alt="locacion"
          class="icono-locacion"
        />
        Libreta de direcciones
      </p>
      <p>
        <img src="@/assets/list-check.png" alt="lista" class="icono-lista" />
        Compras / reservas <br />y cancelaciones
      </p>
      <p>
        <img
          src="@/assets/credit-card.png"
          alt="tarjeta"
          class="icono-tarjeta"
        />
        Gestión financiera
      </p>
      <p>
        <img src="@/assets/truck.png" alt="camion" class="icono-camion" /> Sigue
        tu pedido
      </p>
      <p>
        <img src="@/assets/circle-xmark.png" alt="xmark" class="icono-xmark" />
        Información personal / contraseña
      </p>
      <p>Suspender cuenta</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Options",
  props: {
    routeOptionsContainer: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.container {
  position: absolute;
  background-color: #222121;
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 45%;
  left: 20%;
 
}

.options-routes-items {
  color: white;
  margin-left: 10px;
  flex: 1;
  opacity: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.icono-usuario,
.icono-locacion {
  width: 5%;
}

.icono-lista,
.icono-tarjeta,
.icono-camion,
.icono-xmark {
  width: 6%;
}
.options-router{
  color: white;
  opacity: 0.75;
  text-decoration: none;
  transition: opacity 0.3s ease;
}
.options-router:hover {
  opacity: 1; 
}
</style>
