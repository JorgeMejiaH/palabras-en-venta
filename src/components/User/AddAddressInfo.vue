<template>
        <div>
            <div class="libreta">
                <router-link to="/address"><img class="atras" src="@/assets/felcha-izquierda.png"> Libreta de direcciones</router-link>
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
                    <label for="name-direction">Nombre de la dirección:</label>
                    <input
                        type="text"
                        :value="formData.nameDirection"
                        id="name-direction"
                        class="in-user-input"
                    />
                    <label for="direction">Dirección</label>
                    <input
                        type="text"
                        :value="formData.address"
                        id="direction"
                        class="in-user-input"
                    />
                </div>
                <div class="dato2">
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
                        :value="formData.city"
                        id="name-city"
                        class="in-user-input"
                    />
                </div>
            </div>
            <label for="text-description">Descripción</label>
                <input
                    type="text"
                    :value="formData.description"
                    id="text-description"
                    class="input-description"
                />
            
            <button class="boton-guardar" @click="guardarDatos">Guardar dirección</button>
        </div>
</template>

<script>
    export default{
        name: 'AddAddressInfo',

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