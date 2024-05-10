<template>
  <div>
      <Navbar/>
      <Options/>
      <img
      src="@/assets/config-background.png"
      alt="Fondo de la pagina"
      class="config-background"
      />
      <div class="container-address">
          <div class="titulo-boton">
              <h1 class="titulo-txt">Direcciones</h1>
              <button :disabled="isDisable" class="boton-nueva-direccion" @click="añadirDireccion">
                  <img class="img-plus" src="@/assets/add.png" /> Agregar nueva dirección
              </button>
          </div>
          <div v-if="show1" class="informacion">
              <div class="contenedor-titulo-edit">
                  <h1 class="titulo-ingresar-direccion">Ingresar dirección</h1>
                  <button class="edit-boton" @click="editarDireccion1">
                      Editar <img class="edit-img" src="@/assets/pen-to-square.png" />
                  </button>
              </div>
              <div class="datos">
                  <div>
                      <p class="columna" id="nombre-direccion">
                      <strong>Nombre de la dirección</strong><br />{{formData1.nameDirection}}
                      </p>
                      <p class="columna" id="direccion">
                          <strong>Dirección</strong><br />{{ formData1.address }}
                      </p>
                  </div>
                  <div>
                      <p class="columna" id="tipo-vivienda">
                          <strong>Tipo de vivienda</strong><br />{{ formData1.selectType }}
                          </p>
                          <p class="columna" id="ciudad">
                          <strong>Ciudad</strong><br />{{ formData1.city }}
                      </p>
                  </div>
              </div>
          </div>
          <div v-if="show2" class="informacion2">
            <div class="contenedor-titulo-edit2">
              <h1 class="titulo-ingresar-direccion">Ingresar dirección</h1>
              <button class="edit-boton" @click="editarDireccion2">
                Editar <img class="edit-img" src="@/assets/pen-to-square.png" />
              </button>
            </div>
            <div class="datos-mostrar2">
              <div>
                <p class="columna" id="nombre-direccion">
                  <strong>Nombre de la dirección</strong><br />{{
                    formData2.nameDirection
                  }}
                </p>
                <p class="columna" id="direccion">
                  <strong>Dirección</strong><br />{{ formData2.address }}
                </p>
              </div>
              <div>
                <p class="columna" id="tipo-vivienda">
                  <strong>Tipo de vivienda</strong><br />{{ formData2.selectType }}
                </p>
                <p class="columna" id="ciudad">
                  <strong>Ciudad</strong><br />{{ formData2.city }}
                </p>
              </div>
            </div>
          </div>
          <div v-if="show3" class="informacion3">
            <div class="contenedor-titulo-edit3">
              <h1 class="titulo-ingresar-direccion">Ingresar dirección</h1>
              <button class="edit-boton" @click="editarDireccion3">
                Editar <img class="edit-img" src="@/assets/pen-to-square.png" />
              </button>
            </div>
            <div class="datos-mostrar3">
              <div>
                <p class="columna" id="nombre-direccion">
                  <strong>Nombre de la dirección</strong><br />{{
                    formData3.nameDirection
                  }}
                </p>
                <p class="columna" id="direccion">
                  <strong>Dirección</strong><br />{{ formData3.address }}
                </p>
              </div>
              <div>
                <p class="columna" id="tipo-vivienda">
                  <strong>Tipo de vivienda</strong><br />{{ formData3.selectType }}
                </p>
                <p class="columna" id="ciudad">
                  <strong>Ciudad</strong><br />{{ formData3.city }}
                </p>
              </div>
            </div>
          </div>
      </div>
      <Footer class="footer-address"/>
  </div>
</template>

<script>
import  Options  from "@/components/Options.vue";
import Footer from '@/components/Footer.vue';
import Navbar from "@/components/Navbar/Navbar.vue";
export default{
  components: {Options, Footer, Navbar},

  created() {
      const storedData1 = localStorage.getItem("formData1");
      if (storedData1) {
          this.formData1 = JSON.parse(storedData1);
      }
      const storedData2 = localStorage.getItem("formData2");
      if (storedData2) {
          this.formData2 = JSON.parse(storedData2);
      }
      const storedData3 = localStorage.getItem("formData3");
      if (storedData3) {
          this.formData3 = JSON.parse(storedData3);
      }
      this.verificarDatos();
  },

  data() {
    return {
      dataIn1: true,
      show1: true,
      dataIn2: true,
      show2: true,
      dataIn3: true,
      show3: true,
      isDisable: false,

      formData1: {
        nameDirection: "",
        selectType: "",
        address: "",
        city:"",
        description:"",
      },
      formData2: {
        nameDirection: "",
        selectType: "",
        address: "",
        city:"",
        description:"",
      },
      formData3: {
        nameDirection: "",
        selectType: "",
        address: "",
        city:"",
        description:"",
      }
    };
  },

  methods: {
      añadirDireccion() {
        this.dataIn1 = localStorage.getItem("formData1");
        this.dataIn2 = localStorage.getItem("formData2");
        this.dataIn3 = localStorage.getItem("formData3");
        if(!this.dataIn1){
          this.$router.push("/add1");
        }else if(!this.dataIn2){
          this.$router.push("/add2");
        }else if(!this.dataIn3){
          this.$router.push("/add3");
        }else{
          this.isDisable = true
        }
        
      },
      editarDireccion1() {
        this.$router.push("/edit1");
      },
      editarDireccion2() {
        this.$router.push("/edit2");
      },
      editarDireccion3() {
        this.$router.push("/edit3");
      },
      verificarDatos(){
        this.dataIn1 = localStorage.getItem("formData1");
        if(!this.dataIn1){
          this.show1 = false
        }

        this.dataIn2 = localStorage.getItem("formData2");
        if(!this.dataIn2){
          this.show2 = false
        }

        this.dataIn3 = localStorage.getItem("formData3");
        if(!this.dataIn3){
          this.show3 = false
        }
      },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Honk&family=Pixelify+Sans:wght@400..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

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

.informacion2 {
display: flex;
flex-direction: column;
align-items: flex-start;
width: 87%;
height: 250px;
margin-left: 5.5%;
margin-top: 20px;
border-radius: 20px;
border: 1px solid gray;
}

.informacion3 {
display: flex;
flex-direction: column;
align-items: flex-start;
width: 87%;
height: 250px;
margin-left: 5.5%;
margin-top: 20px;
border-radius: 20px;
border: 1px solid gray;
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
  background-color: #58595B;
}

.container-address{
  position: absolute;
  justify-content: flex-start;
  top: 30%;
  right: 0;
  width: 78%;
  height: 1000px;
  background-color: white;
  z-index: 1;
  border-radius: 20px;
}

.footer-address{
  position: relative;
  top: 600px;
}
</style>