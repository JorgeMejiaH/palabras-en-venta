<template>
  <div :class="containerClass">
    <footer class="footer-main">
      <div class="flex-container">
        <div class="item item-1">
          <p><strong>INFORMACIÓN LEGAL</strong></p>
          <p>
            <router-link to="/"
              ><img
                src="@/assets/computador.png"
                alt="logo computador"
                class="computador"
              />
              palabrasenventa.com</router-link
            >
          </p>
          <p>
            <img
              src="@/assets/teléfono.png"
              alt="logo telefono"
              class="telefono"
            />
            3225988459
          </p>
          <p>
            <img
              src="@/assets/locacion.png"
              alt="logo locacion"
              class="locacion"
            />
            Calle 11 #23-57 Pereira-Risaralda
          </p>
          <p>
            <img
              src="@/assets/locacion.png"
              alt="logo locacion"
              class="locacion"
            />
            Horario de atención: Lunes a Viernes de 8:30 AM a 6:00 PM, Sábado de
            9:00 AM a 5:00 PM.
          </p>
          <p>
            Para peticiones, quejas y reclamos dirigirse a:
            <a href="mailto:servicioalcliente@palabrasenventa.com"
              >servicioalcliente@palabrasenventa.com</a
            >
          </p>
          <p>
            Para cotizaciones y ventas a clientes institucionales dirigirse a:
            <a href="mailto:compras@palabrasenventa.com"
              >compras@palabrasenventa.com</a
            >
          </p>
        </div>
        <div class="item item-2">
          <img
            src="@/assets/imagen_seguridad_pago.png"
            alt="Logo seguridad de pagos"
            class="img-pagos"
          />
          <div class="text-container">
            <p><strong>Confederación Colombiana de Consumidores</strong></p>
            <a
              href="https://www.ccconsumidores.org.co"
              target="_blank"
              class="condumidores"
              >www.ccconsumidores.org.co</a
            >
            <p><strong>Super Intendencia de Industria y Comercio</strong></p>
            <a href="https://www.sic.gov.co" target="_blank" class="Intendencia"
              >www.sic.gov.co</a
            >
          </div>
        </div>
        <div class="item item-3">
          <img
            src="@/assets/imagen-camara-comercio.png"
            alt="Logo camara de comercio"
            class="img-camara"
          />
        </div>
      </div>
    </footer>

    <footer class="footer-bottom">
      <div class="redes">
        <a href="https://www.facebook.com/" target="_blank"
          ><img
            src="@/assets/facebook.png"
            alt="logo facebook"
            class="logo-facebook"
        /></a>
        <a href="https://twitter.com/" target="_blank"
          ><img src="@/assets/x.png" alt="logo x" class="logo-x"
        /></a>
        <a href="https://www.instagram.com/" target="_blank"
          ><img
            src="@/assets/instagram.png"
            alt="logo instagram"
            class="logo-instagram"
          />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    containerClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
  background-color: white;
}

.item {
  width: 25%;
  vertical-align: middle;
}

.item-2 {
  text-align: center;
}

.item-3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-camara {
  width: 80%;
  max-width: 400px; /* Limita el tamaño máximo de la imagen */
}

.intendencia {
  justify-content: center;
}

.redes {
  display: flex;
  align-items: flex-end;
  color: white;
}

.redes a {
  margin: 0 10px;
}

.footer-main {
  margin-top: 110px;
  left: 0;
}

.footer-bottom {
  background-color: black;
  padding: 20px;
  justify-content: flex-start;
  left: 0;
}

.logo-facebook {
  width: 35px;
}

.logo-instagram,
.logo-x {
  width: 30px;
}

.telefono,
.computador,
.locacion {
  width: 20px;
}

.text-container {
  margin-top: 20px; /* Reduce el espacio superior */
}

/* Media queries para hacer el diseño responsive */
@media (max-width: 768px) {
  .item {
    width: 100%; /* Ocupa todo el ancho en dispositivos pequeños */
    margin-bottom: 20px; /* Agrega espacio entre los ítems */
  }

  .text-container {
    margin-top: 10px; /* Reduce aún más el espacio superior en dispositivos pequeños */
  }
}
</style>
