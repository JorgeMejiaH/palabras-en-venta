<template>
  <div class="container">
    <div class="item">
      <p>
        <img src="@/assets/user.png" alt="usuario" class="icono-usuario" />
        Información personal <br />/ contraseña
      </p>
      <p>
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
};
</script>

<style>
.container {
  background-color: #222121;
  width: 20%;
  opacity: 0.5;
  height: 70%;
  margin-top: 20%;
  margin-left: 2%;
  border-radius: 25px;
  z-index: 1;
  display: flex;
}

.item {
  color: white;
  margin-left: 10px;
  flex: 1;
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
</style>
