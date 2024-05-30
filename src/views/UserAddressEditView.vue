<template>
  <div>
    <Navbar />
    <Options routeOptionsContainer="user-address-edit-routes" />
    <img
      src="@/assets/config-background.png"
      alt="Fondo de la pagina"
      class="config-background"
    />
    <div class="container-edit-address">
      <div>
        <div class="libreta-editar">
          <router-link to="/address"
            ><img class="atras" src="@/assets/angle-left.png" /> Libreta de
            direcciones</router-link
          >
        </div>
        <div class="icono-edicion">
          <p>
            <img
              class="edit-img-edicion"
              src="@/assets/pen-to-square.png"
            />Edición
          </p>
        </div>
        <h1 class="titulo-edit-direcciones">Direcciones</h1>
      </div>
      <div class="editar-informacion">
        <h1 class="titulo-editar-direccion">Ingresar dirección</h1>
        <div class="datos-editar">
          <div class="datoA">
            <label for="name-direction">Nombre de la dirección:</label>
            <input
              type="text"
              v-model="nameDirection"
              id="name-direction"
              class="in-user-input"
            />
            <label for="direction">Dirección</label>
            <input
              type="text"
              v-model="address"
              id="direction"
              class="in-user-input"
            />
          </div>
          <div class="datoB">
            <label for="tipos">*Tipo de vivienda:</label>
            <select
              v-model="selectType"
              id="tipos"
              style="width: 90%"
            >
              <option value="CA">Casa</option>
              <option value="ED">Edificio</option>
              <option value="CO">Conjunto</option>
              <option value="OT">Otros</option>
            </select>

            <label for="PlaceOfBirth" class="lbl-birth-place"
              >Ciudad:</label
            >
            <select
              v-model="placeOfBirth"
              @change="handleChange"
              id="birth-place"
              class="in-user-input"
            >
              <option value="null" disabled>Selecciona una ciudad</option>
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{ city.name }}
              </option>
            </select>
          </div>
        </div>
        <label for="text-description">Descripción</label>
        <input
          type="text"
          v-model="description"
          id="text-description"
          class="input-description"
        />

        <button class="boton-guardar" @click="guardarDatos(addressUUID)">
          Guardar dirección
        </button>
      </div>
    </div>
    <Footer containerClass="footer-container-user-address-edit" />
  </div>
</template>

<script>
import Options from "@/components/User/Options.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import hostMixin from "@/mixins/host.js";
export default {
  components: { Options, Navbar, Footer },
  mixins: [hostMixin],
  data() {
    return {
      nameDirection: "",
      selectType: "",
      address: "",
      city: null,
      description: "",
 
      cities: [],
      addressUUID: "",
    };
  },
  beforeMount() {
    this.fetchCities();
  },
  methods: {
    guardarDatos(uuid) {
      const data = {
        name: this.nameDirection,
        address_type: this.selectType,
        address_description: this.description,
        address: this.address,
        city: this.city
      }
      console.log(data)
      axios.put(hostMixin.data().host + "/api/address/" + uuid + "/", data)
      .then((response) => {
        console.log(response.data)
        this.$router.push("/address");
      })
      .catch((error) => {
          console.error("Error putting direction:", error);
        });
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
    handleChange(event) {
      const city_id = event.target.value;
      this.city = city_id;
    },
  },
  mounted(){
    this.addressUUID = this.$route.query.uuid;
  },
};
</script>

<style>
.footer-container-user-address-edit {
  position: absolute;
  top: 150%;
  width: 100vw;
}
.user-address-edit-routes {
  position: absolute;
  background-color: rgba(34, 33, 33, 0.6);
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 45%;
  left: 20%;
}
.config-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  z-index: -2;
  background-color: #58595b;
}

.container-edit-address {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  top: 30%;
  right: 0;
  width: 60%;
  height: auto;
  background-color: white;
  border-radius: 20px;
  padding: 5%;
}

.libreta-editar {
  margin-top: 2%;
  margin-right: 77%;
}

.titulo-edit-direcciones {
  margin-top: 2%;
  margin-right: 70%;
  color: black;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 40px;
}

.editar-informacion {
  display: flex;
  flex-direction: column;
  width: 87%;
  height: 40%;
  margin-left: 5.5%;
  align-items: flex-start;
  border-radius: 30px;
  border: 1px solid gray;
  padding: 2%;
}

.datos-editar {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-column-gap: 200px;
  margin-left: 3%;
}

.titulo-editar-direccion {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 40px;
  color: black;
}

.boton-guardar {
  width: 172px;
  height: 29px;
  background-color: #050835;
  color: white;
  border-radius: 8px;
  margin-left: 80%;
  cursor: pointer;
}

.input-description {
  width: 300px;
  height: 50px;
  border-radius: 10px;
}

.icono-edicion {
  display: flex;
  justify-content: flex-end;
}

.edit-img-edicion {
  width: 20%;
}
</style>
