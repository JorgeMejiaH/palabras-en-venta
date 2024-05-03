<template>
    <div>
        <div class="libreta-editar">
            <router-link to="/address"><img class="atras" src="@/assets/angle-left.png"> Libreta de direcciones</router-link>
        </div>
        <div class="icono-edicion">
            <p><img class="edit-img-edicion" src="@/assets/pen-to-square.png">Edición</p>
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
                    v-model="formData.nameDirection"
                    id="name-direction"
                    class="in-user-input"
                />
                <label for="direction">Dirección</label>
                <input
                    type="text"
                    v-model="formData.address"
                    id="direction"
                    class="in-user-input"
                />
            </div>
            <div class="datoB">
                <label for="tipos">*Tipo de vivienda:</label>
                <select v-model="formData.selectType" id="tipos" style="width: 90%;">
                    <option value="Casa">Casa</option>
                    <option value="Edificio">Edificio</option>
                    <option value="Conjunto">Conjunto</option>
                    <option value="Otros">Otros</option>
                </select>

                <label for="name-city">Ciudad</label>
                <input
                    type="text"
                    v-model="formData.city"
                    id="name-city"
                    class="in-user-input"
                />
            </div>
        </div>
        <label for="text-description">Descripción</label>
            <input
                type="text"
                v-model="formData.description"
                id="text-description"
                class="input-description"
            />
        
        <button class="boton-guardar" @click="guardarDatos">Guardar dirección</button>
    </div>
</template>

<script>
    export default{
        name: 'EditAddressInfo',

        data() {
            return {
                formData: {
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
                localStorage.setItem('formData', JSON.stringify(this.formData))
                this.$router.push('/address')
            },
        },
    }
</script>

<style>

.libreta-editar{
    margin-top: 2%;
    margin-right: 77%;
}

.titulo-edit-direcciones{
    margin-top: 6%;
    margin-right: 70%;
    color: black;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 40px;
}

.editar-informacion{
    display: flex;
    flex-direction: column;
    width: 87%;
    height: 40%;
    margin-left: 5.5%;
    align-items: flex-start;
    border-radius: 30px;
    border: 1px solid gray;
}

.datos-editar{
    display: grid;
    grid-template-columns: 200px 200px;
    grid-column-gap: 200px;
    margin-left: 3%;
}

.titulo-editar-direccion{
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

.icono-edicion{
    display: flex;
    justify-content: flex-end;
}

.edit-img-edicion{
    width: 20%;
}
</style>
