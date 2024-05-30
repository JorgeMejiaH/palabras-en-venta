<template>
  <div>
    <Navbar />
    <Options routeOptionsContainer="user-address-routes" />
    <img
      src="@/assets/config-background.png"
      alt="Fondo de la pagina"
      class="config-background"
    />
    <div class="container-address">
      <div class="titulo-boton">
        <h1 class="titulo-txt">Direcciones</h1>
        <button
          :disabled="isDisable"
          class="boton-nueva-direccion"
          @click="añadirDireccion"
        >
          <img class="img-plus" src="@/assets/add.png" /> Agregar nueva
          dirección
        </button>
      </div>
      <div
        v-for="(address, index) in adresses"
        :key="index"
        class="address-info-container"
      >
        <div class="contenedor-titulo-edit">
          <h1 class="titulo-ingresar-direccion">Ingresar dirección</h1>
          <button class="edit-boton" @click="editarDireccion(address.uuid)">
            Editar <img class="edit-img" src="@/assets/pen-to-square.png" />
          </button>
          <button class="edit-boton" @click="deleteDirection(address.uuid)">
            Eliminar <img class="edit-img" src="@/assets/trash-can.png" />
          </button>
        </div>
        <div class="datos">
          <div>
            <p class="columna" id="nombre-direccion">
              <strong>Nombre de la dirección</strong><br />{{ address.name }}
            </p>
            <p class="columna" id="direccion">
              <strong>Dirección</strong><br />{{ address.address }}
            </p>
          </div>
          <div>
            <p class="columna" id="tipo-vivienda">
              <strong>Tipo de vivienda</strong><br />{{ address.address_type }}
            </p>
            <p class="columna" id="ciudad">
              <strong>Ciudad</strong><br />{{ getCityName(address.city) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer containerClass="footer-container-user-address" />
  </div>
</template>

<script>
import Options from "@/components/User/Options.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Cookies from "js-cookie";
import axios from "axios";
import hostMixin from "@/mixins/host.js";
export default {
  mixins: [hostMixin],
  components: { Options, Footer, Navbar },
  data() {
    return {
      dataIn1: true,
      show1: true,
      dataIn2: true,
      show2: true,
      dataIn3: true,
      show3: true,
      isDisable: false,
      sessionInfo: null,

      adresses: [],
      cities: [],
    };
  },
  beforeMount() {
    // this.fetchDocumentTypes();
    console.log("Creating");
    this.sessionInfo = JSON.parse(this.getTokenFromCookie());
    this.getUserAddress();
    this.fetchCities();
    console.log("addreses: " + this.addresses);
  },
  methods: {
    getTokenFromCookie() {
      // Retrieve the token from the cookie
      return Cookies.get("loginToken");
    },
    fetchCities() {
      // Make a GET request to fetch cities
      axios
        .get(hostMixin.data().host + "/api/cities/")
        .then((response) => {
          // Update the cities array with the fetched data
          this.cities = response.data;
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    },
    añadirDireccion() {
      if (this.adresses.length < 3) {
        this.$router.push("/add-address");
      } else {
        this.isDisable = true;
      }
    },
    editarDireccion(uuid) {
      this.$router.push({ path: "/address-edit", query: { uuid } });
      console.log(uuid);
    },
    getUserAddress() {
      axios
        .get(
          hostMixin.data().host +
            "api/address/?user__uuid=" +
            this.sessionInfo.user.uuid
        )
        .then((response) => {
          this.adresses = response.data;
        })
        .catch((error) => {
          console.error("Error fetching address:", error);
        });
    },
    deleteDirection(uuid) {
      axios
        .delete(hostMixin.data().host + "api/address/" + uuid)
        .then((response) => {
          console.log(response.data);
          this.getUserAddress();
        })
        .catch((error) => {
          console.error("Error deleting direction: ", error);
        });
    },
    getCityName(cityId) {
      const city = this.cities.find((city) => city.id === cityId);
      return city ? city.name : "Ciudad no encontrada";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Honk&family=Pixelify+Sans:wght@400..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

.user-address-routes {
  position: absolute;
  background-color: rgba(34, 33, 33, 0.6);
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 45%;
  left: 25%;
}
.titulo-txt {
  width: 226px;
  margin-top: 6%;
  margin-left: 5%;
  color: black;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 40px;
}

.boton-nueva-direccion {
  height: 55px;
  width: 200px;
  padding: 10px;
  margin-top: 10%;
  margin-bottom: 2%;
  margin-right: 8%;
  background-color: #3b63a8;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 19px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.titulo-boton {
  display: flex;
  justify-content: space-between;
}

.boton-nueva-direccion:hover {
  background-color: #426fbe;
}

.img-plus {
  width: 12px;
  margin-left: 4%;
  margin-right: 5%;
  border: 1px solid white;
  border-radius: 10px;
}

.address-info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 87%;
  height: 250px;
  margin-left: 5.5%;
  border-radius: 20px;
  border: 1px solid gray;
}

.contenedor-titulo-edit {
  display: flex;
  justify-content: space-between;
  gap: 200px;
}

.titulo-ingresar-direccion {
  width: 300px;
  margin-left: 5%;
  margin-right: 10%;
  color: black;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
}

.edit-boton {
  width: 80px;
  height: 23px;
  margin-top: 3%;
  border-radius: 19%;
  border: none;
  cursor: pointer;
  color: gray;
}

.edit-img {
  width: 25%;
}

.datos {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-column-gap: 200px;
  margin-left: 3%;
}

.columna {
  margin-bottom: 50px;
}

.datos-mostrar2,
.datos-mostrar3 {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-column-gap: 200px;
  margin-left: 3%;
}
.contenedor-titulo-edit2 {
  display: flex;
  justify-content: space-between;
  gap: 200px;
}

.contenedor-titulo-edit3 {
  display: flex;
  justify-content: space-between;
  gap: 200px;
}

.config-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  z-index: -2;
  background-color: #58595b;
}

.container-address {
  position: absolute;
  top: 30%;
  right: 0;
  width: 55%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 2%;
}

.footer-container-user-address {
  position: absolute;
  top: 180%;
  width: 100vw;
}
</style>
