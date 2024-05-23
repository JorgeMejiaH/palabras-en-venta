<template>
  <navbar/>
  <div class ='card-details-background'>
    <options/>
    <div Class="change-card-container">
        <div class = 'personalinfo-edit'>
            <router-link>
                <h6 class = 'backto-payment-methods'> < Métodos de pago / Editar tarjeta </h6>
            </router-link>
            <div>
                <h6> Edicion </h6>
            </div>
            <div class = 'card-edit-details-container'>
                <div class="card-details">
                    <div class="card-details-1r">
                        <img src="/src/assets/cardDetailsIcon.png" alt="card-details-icon">
                        <h6> Card </h6>
                    </div>
                    <div class = 'card-number'>
                        'card number'
                    </div>
                    <div class="card-details-3r">
                        <h6> Fecha de expedición </h6>
                        'expedition-date'
                    </div>
                </div>
                <div class= 'card-edit-inputs-container'>
                    <div class = 'card-edit-number'>
                        <label for = 'card-number-in-edit' class = 'lbl-card-number-edit'>*Número de tarjeta: </label>
                        <input
                            :type="text"
                            id = "edit-new-card-number"   
                            :v-model = "editCardNumer"          
                            class = "edit-new-card-id"              
                        />
                    </div>
                    <div class = "card-edit-input">
                        <label for = 'card-name-in-edit' class = 'lbl-card-edit-input'>*Nombre: </label>
                        <input
                            :type="text"
                            id = "edit-new-card-name"
                            :v-model = 'editCardName'
                            class = 'edit-card-input-textfield'
                        />
                    </div>
                    <div class = "card-edit-input">
                        <label for="card-lastname-in-edit" class = 'lbl-card-edit-input'>*Apellido(s): </label>
                        <input 
                            :type="text"
                            id = 'edit-new-card-lastname'
                            :v-model="editCardLastname"
                            class="edit-card-input-textfield"
                        />
                    </div>
                    <div class = "card-edit-input">
                        <label for="card-expedition-in-edit" class = 'lbl-card-edit-input'>*Fecha de expedición: </label>
                        <input 
                            :type="text"
                            id = 'edit-new-card-expedition'
                            :v-model = 'editCardExpedition'
                            class="edit-card-input-textfield"
                        />
                    </div>
                    <div class = "card-edit-input">
                        <label for="card-code-in-edit" class='lbl-card-edit-input'>*CVC/CVV: </label>
                        <input 
                            :type="text"
                            id = 'edit-new-cvc'
                            :v-model="editCardCVC"
                            class="edit-card-input-textfield"
                        />
                    </div>
                    <div class = "card-edit-input">
                        <label for="card-type-in-edit" class='lbl-card-edit-input'>*Tipo de tarjeta</label>
                        <input 
                            :type="text"
                            id="edit-new-card-type"
                            :v-model="editCardType"
                            class = "edit-card-input-textfield"
                        />
                    </div>
                    <div class = "card-edit-input" >
                        <label for="card-ammount-in-edit">*Monto total: </label>
                        <input 
                            :type="int"
                            id = 'edit-new-card-ammount'
                            :v-model="editCardAmmount"
                            class = "edit-card-input-textfield"
                        />
                    </div>
                </div>
                <div class = 'card-edit-save'>
                    <button type="submit" class="btn-save-card-changes">Guardar tarjeta</button>
                </div>
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
            editCardNumer: "",
            editCardName: "",
            editCardLastname: "",
            editCardExpedition: "",
            editCardCVC: "",
            editCardType: "",
            editCardAmmount: "",
        };
    },
}
</script>

<style>
.change-card-container{
    background-color: white;
    width: 151lvh;
    height: 80.5lvh;
    display: flex;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    flex-direction: column;
    border-left: 3px ridge;
    border-top: 3px ridge;
    border-bottom: 3px ridge;
  
}
.card-edit-details-container{
    display: flex;
    flex-direction: column;
}

.card-edit-inputs-container{
    display: flex;
}

.card-edit-input{
    display: flex;
    flex-wrap: wrap;
}

.card-number-edit{
    display: flex;
    flex-direction: column;
}
.card-edit-save{
    display: flex;
    justify-content: flex-end;
}
</style>