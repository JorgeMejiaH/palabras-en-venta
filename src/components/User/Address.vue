<template>
  <div>
    <Navbar />
    <Options routeOptionsContainer="address-info-routes"/>
    <img
      src="@/assets/config-background.png"
      alt="Fondo de la pagina"
      class="config-background"
    />
    <div class="container-address">
      <div class="titulo-boton">
        <h1 class="titulo-txt">Direcciones</h1>
        <button class="boton-nueva-direccion" @click="añadirDireccion">
      <img class="img-plus" src="@/assets/add.png" /> Agregar nueva dirección
    </button>
      </div>
      <div v-for="(direccion, index) in direcciones" :key="index" class="informacion">
        <div class="contenedor-titulo-edit">
          <h1 class="titulo-ingresar-direccion">Ingresar dirección</h1>
          <button class="user-info-btn"  @click="navigateToPasswordChange">
          <span class="user-info-btn-content">Editar</span>
          <img
            src="@/assets/pen-to-square.png"
            alt="edit-symbol"
            class="user-info-edit-edit-symbol-btn"
          />
        </button>
        </div>
        <div class="datos">
          <div>
            <p class="columna" id="nombre-direccion">
              <strong>Nombre de la dirección</strong><br />{{  direccion.nameDirection  }}
            </p>
            <p class="columna" id="direccion">
              <strong>Dirección</strong><br />{{ direccion.address }}
            </p>
          </div>
          <div>
            <p class="columna" id="tipo-vivienda">
              <strong>Tipo de vivienda</strong><br />{{ direccion.selectType }}
            </p>
            <p class="columna" id="ciudad">
              <strong>Ciudad</strong><br />{{ direccion.city }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer containerClass="footer-address-info" />
  </div>
</template>

<script>
import Options from "@/components/User/Options.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "../Navbar/Navbar.vue";
export default {
  components: { Options, Footer, Navbar },
  data(){
    return{
        direcciones: [
      {
        nameDirection: "casa",
        address: "cra 4",
        selectType: "dpto",
        city: "perira"
      },
      {
        nameDirection: "oficina",
        address: "cra 5",
        selectType: "ofice",
        city: "perira"
      },
      {
        nameDirection: "oficina",
        address: "cra 5",
        selectType: "ofice",
        city: "perira"
      },
      {
        nameDirection: "oficina",
        address: "cra 5",
        selectType: "ofice",
        city: "perira"
      },
    ]
    };
  },
};
</script>

<style>
.address-info-routes{
  position: absolute;
  background-color: rgba(34, 33, 33, 0.6);
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 45%;
  left: 3%;
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
  justify-content: flex-start;
  top: 30%;
  right: 0;
  width: 78%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 5%;
}

.footer-address-info{
  position: absolute;
  top: 200%;
  width: 100vw;
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
  width: 20%;
  height: auto;
  padding: 8px;
  margin-top: 10%;
  margin-bottom: 2%;
  margin-right: 8%;
  background-color: #3b63a8;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
.boton-nueva-direccion:hover {
  background-color: #426fbe;
}

.titulo-boton {
  display: flex;
  justify-content: space-between;
}

.img-plus {
  width: 12px;
  margin-left: 4%;
  margin-right: 5%;
  border: 1px solid white;
  border-radius: 10px;
}

.informacion {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 87%;
  height: 250px;
  margin-left: 5.5%;
  border-radius: 20px;
  border: 1px solid gray;
}

.contenedor-titulo-edit {
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 25%;
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
  width: 90%;
  grid-template-columns: 1fr 1fr;
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
</style>
