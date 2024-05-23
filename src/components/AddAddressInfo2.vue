<template>
    <div>
        <Navbar/>
        <Options/>
        <img
        src="@/assets/config-background.png"
        alt="Fondo de la pagina"
        class="config-background"
        />
        <div class="container-add-address">
            <div>
            <div class="libreta">
                <router-link to="/Nuevoaddress"><img class="atras" src="@/assets/felcha-izquierda.png"> Libreta de direcciones</router-link>
            </div>
            <div class="icono-nueva-direccion">
                <p>Nueva dirección</p>
            </div>
            <h1 class="titulo-mas-direcciones">Direcciones</h1>
        </div>
        <div class="nueva-informacion">
            <h1 class="titulo-ingresar-direccion">Ingresar dirección</h1>
            <div class="datos-nuevos">
                <div class="dato1">
                    <label for="name-direction2">Nombre de la dirección:</label>
                    <input
                        type="text"
                        v-model="formData2.nameDirection"
                        id="name-direction2"
                        class="in-user-input"
                    />
                    <label for="direction2">Dirección</label>
                    <input
                        type="text"
                        v-model="formData2.address"
                        id="direction2"
                        class="in-user-input"
                    />
                </div>
                <div class="dato2">
                    <label for="tipos2">*Tipo de vivienda:</label>
                    <select v-model="formData2.selectType" id="tipos2" style="width: 90%;">
                        <option value="Casa">Casa</option>
                        <option value="Edificio">Edificio</option>
                        <option value="Conjunto">Conjunto</option>
                        <option value="Otros">Otros</option>
                    </select>

                    <label for="name-city2">Ciudad</label>
                    <input
                        type="text"
                        v-model="formData2.city"
                        id="name-city2"
                        class="in-user-input"
                    />
                </div>
            </div>
            <label for="text-description2">Descripción</label>
                <input
                    type="text"
                    v-model="formData2.description"
                    id="text-description2"
                    class="input-description"
                />
            
            <button class="boton-guardar" @click="guardarDatos">Guardar dirección</button>
        </div>
        </div>
        <Footer class="footer-address"/>
    </div>
</template>

<script>
import  Options  from "@/components/Options.vue";
import Footer from "../Footer.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
    export default{
        components: {Options, Footer, Navbar},
        name: 'AddAddressInfo2',

        data() {
            return {
                formData2: {
                    nameDirection: "",
                    selectType: "",
                    address: "",
                    city:"",
                    description:"",
                }
            };
        },
        methods: {
            guardarDatos() {
                localStorage.setItem('formData2', JSON.stringify(this.formData2))
                this.$router.push('/Nuevoaddress')
            },
        },
    }
</script>

<style>

.config-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    z-index: -2;
    background-color: #58595B;
}

.container-add-address{
    position: absolute;
    justify-content: flex-start;
    top: 30%;
    right: 0;
    width: 78%;
    height: 100%;
    background-color: white;
    z-index: 1;
    border-radius: 20px;
}

.libreta{
    margin-top: 2%;
    margin-right: 77%;
}

.titulo-mas-direcciones{
    margin-top: 6%;
    margin-right: 70%;
    color: black;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 40px;
}

.nueva-informacion{
    display: flex;
    flex-direction: column;
    width: 87%;
    height: 40%;
    margin-left: 5.5%;
    align-items: flex-start;
    border-radius: 30px;
    border: 1px solid gray;
}

.datos-nuevos{
    display: grid;
    grid-template-columns: 200px 200px;
    grid-column-gap: 200px;
    margin-left: 3%;
}

.titulo-ingresar-direcciones{
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 40px;
    color: black;
}

.boton-guardar{
    width: 172px;
    height: 29px;
    background-color: #050835;
    color: white;
    border-radius: 8px;
    margin-left: 80%;
    margin-top: 2%;
    cursor: pointer;
}

.input-description{
    width: 300px;
    height: 50px;
    border-radius: 10px;
}

.icono-nueva-direccion{
    display: flex;
    justify-content: flex-end;
}
</style>