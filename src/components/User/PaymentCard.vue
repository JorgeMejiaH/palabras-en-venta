<template>
  <navbar/>
  <div class ='card-details-background'>
    <options/>
    <div Class="change-password-container">
        <div class = 'personalinfo-edit'>
            <router-link to = '/'>
                <h6 class = 'backto-payment-methods'> < Métodos de pago </h6>
            </router-link>
            <div>
                <h6> Eliminar este producto</h6>
            </div>
        </div>
        <div class = 'card-container'>
            <div class="card-details">
                <div class="card-details-1r">
                    <img src="src/assets/cardDetailsIcon.png" alt="card-details-icon">
                    <h4> Card </h4>
                </div>
                <div class="card-details-2r">
                    <h3> **** </h3>
                    <h3> **** </h3>
                    <h3> **** </h3>
                    <h3> {{ lastDigits }} </h3>
                </div>
                <div class="card-details-3r">
                    <h5> Fecha de expedición  </h5>
                    <h5> {{ expeditionDate }} </h5>
                </div>
            </div>
            <div class = 'card-editar-container'>
                <router-link to="/user-card-edit">
                    <h6> Editar </h6>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Options from '../Options.vue';
import Navbar from '../Navbar/Navbar.vue';
export default {
    components: { Options, Navbar },
    data(){
        return {
            lastDigits: '1234',
            expeditionDate: '',
        };
    },
}
</script>

<style>
.card-details-background{
    display: flex ;
    background-image: url(/src/assets/UserInfoBackground.jpg);
    height: 90lvh;
}
.card-container{
    border-radius: 30px;
    border-style: ridge;
    display: flex;
    margin-top: 3%;
    margin-left: 4%;
    height: 70%;
    width: 90%;
}
.card-details{
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 5%;
    justify-content: space-between;
    background-image: linear-gradient(to right,#D5D5D5 90%,grey);
    border-radius: 11.95px ;
}
.card-details-1r{
    display: flex;
    margin-left: 5% ;
    
    
}

.card-details-2r{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 8%;
    margin-right: 8%;
}

.card-details-3r{
    display: flex;
    margin-left: 5% ;
}
.card-editar-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
</style>