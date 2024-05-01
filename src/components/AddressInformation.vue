<template>
    <div class="titulo-boton">
        <h1 class="titulo-txt">Direcciones</h1>
        <button class="boton-nueva-direccion" @click="añadirDireccion"><img class="img-plus" src="@/assets/add.png"> Agregar nueva dirección</button>
    </div>
    <div class="informacion">
        <div class="contenedor-titulo-edit">
            <h1 class="titulo-ingresar-direccion">Ingresar dirección</h1>
            <button class="edit-boton" @click="editarDireccion">Editar <img class="edit-img" src="@/assets/edit.png"></button>
        </div> 
        <div class="datos">
            <div>
                <p class="columna" id="nombre-direccion"><strong>Nombre de la dirección</strong><br>{{ formData.nameDirection }}</p>
                <p class="columna" id="direccion"><strong>Dirección</strong><br>{{ formData.address }}</p>
            </div>
            <div>
                <p class="columna" id="tipo-vivienda"><strong>Tipo de vivienda</strong><br>{{ formData.selectType }}</p>
                <p class="columna" id="ciudad"><strong>Ciudad</strong><br>{{ formData.city }}</p>
            </div>
        </div>
    </div>
    <div class="informacion2">  
        <div class="contenedor-titulo-edit2">
            <h1 class="titulo-ingresar-direccion">Ingresar dirección</h1>
            <button class="edit-boton" @click="editarDireccion">Editar <img class="edit-img" src="@/assets/edit.png"></button>
        </div>
        <div class="datos-mostrar2">
            <div>
                <p class="columna" id="nombre-direccion"><strong>Nombre de la dirección</strong><br>{{ formData.nameDirection }}</p>
                <p class="columna" id="direccion"><strong>Dirección</strong><br>{{ formData.address }}</p>
            </div>
            <div>
                <p class="columna" id="tipo-vivienda"><strong>Tipo de vivienda</strong><br>{{ formData.selectType }}</p>
                <p class="columna" id="ciudad"><strong>Ciudad</strong><br>{{ formData.city }}</p>
            </div>
    </div>          
        </div>
    <div class="informacion3">
        <div class="contenedor-titulo-edit3">
            <h1 class="titulo-ingresar-direccion">Ingresar dirección</h1>
            <button class="edit-boton" @click="editarDireccion">Editar <img class="edit-img" src="@/assets/edit.png"></button>
        </div>
        <div class="datos-mostrar3">
            <div>
                <p class="columna" id="nombre-direccion"><strong>Nombre de la dirección</strong><br>{{ formData.nameDirection }}</p>
                <p class="columna" id="direccion"><strong>Dirección</strong><br>{{ formData.address }}</p>
            </div>
            <div>
                <p class="columna" id="tipo-vivienda"><strong>Tipo de vivienda</strong><br>{{ formData.selectType }}</p>
                <p class="columna" id="ciudad"><strong>Ciudad</strong><br>{{ formData.city }}</p>
            </div>
        </div>
    </div>    
</template>

<script>
//import AddAddressInfo from './AddAddressInfo.vue';

    export default{
        //components: {AddAddressInfo},

        name: 'AddressInfo',

        created(){
            const storedData = localStorage.getItem('formData');
            if(storedData){
                this.formData = JSON.parse(storedData);
            }

            const id = this.$route.params.id;
        },

        methods:{
            añadirDireccion(){
                this.$router.push('/add')
            },
            editarDireccion(){
                const id = 1
                this.$router.push('/edit/${id}')
            }
        }

    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Honk&family=Pixelify+Sans:wght@400..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

.titulo-txt{
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

.boton-nueva-direccion{
    height: 55px;
    width: 200px;
    padding: 10px;
    margin-top: 10%;
    margin-bottom: 2%;
    margin-right: 8%;
    background-color: #3B63A8;
    color:white;
    cursor: pointer;
    border: none;
    border-radius: 19px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.titulo-boton{
    display: flex;
    justify-content: space-between;
}

.boton-nueva-direccion:hover{
    background-color: #426FBE;
}

.img-plus{
    width: 12px;
    margin-left: 4%;
    margin-right: 5%;
    border: 1px solid white;
    border-radius: 10px;
}

.informacion{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 87%;
    height: 250px;
    margin-left: 5.5%;
    border-radius: 20px;
    border: 1px solid gray;
    
}

.contenedor-titulo-edit{
    display: flex;
    justify-content: space-between;
    gap: 200px;
}

.titulo-ingresar-direccion{
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

 .edit-boton{
    width: 80px;
    height: 23px;
    margin-top: 3%;
    border-radius: 19%;
    border: none;
    cursor: pointer;
    color: gray;
}

.edit-img{
    width: 25%;
} 

.datos{
    display: grid;
    grid-template-columns: 200px 200px;
    grid-column-gap: 200px;
    margin-left: 3%;
}

.columna{
    margin-bottom: 50px;
}

.datos-mostrar2, .datos-mostrar3{
    display: grid;
    grid-template-columns: 200px 200px;
    grid-column-gap: 200px;
    margin-left: 3%;
}

.informacion2{
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

.informacion3{
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

.contenedor-titulo-edit2{
    display: flex;
    justify-content: space-between;
    gap: 200px;
}

.contenedor-titulo-edit3{
    display: flex;
    justify-content: space-between;
    gap: 200px;
}
</style>