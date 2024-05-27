<template>
  <navbar/>
  <div class ='card-details-background'>
    <options routeOptionsContainer="user-info-add-payment-options-routes"/>
    <div Class="change-card-container">
      <div class="title-router-container">
        <router-link to = /payment-method class="add-payment-router">
          <img src="@/assets/angle-left.png" alt="flecha-izquierda" />
          Métodos de pago / Editar tarjeta 
        </router-link>
        <h2>Agrega un método de pago</h2>
      </div>
          <div class = 'card-edit-details-container'>
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
              <button type="submit" class="btn-save-password-change">Guardar tarjeta</button>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
import Options from "@/components/User/Options.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
export default {
  components: { Options, Navbar },
  data() {
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
};
</script>
  
<style>
.title-router-container{
  display: flex;
  flex-direction: row;
}
.user-info-add-payment-options-routes{
  position: absolute;
  background-color: rgba(34, 33, 33, 0.6);
  width: 20%;
  height: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  top: 35%;
  left: 35%;
}
.change-card-container {
  background-color: white;
  position: absolute;
  right: 0;
  top: 25%;
  width: 45%;
  height: auto;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-left: 3px ridge;
  border-top: 3px ridge;
  border-bottom: 3px ridge;
  padding-bottom: 10px;
  padding-top: 10px;
}
.card-edit-details-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.card-edit-input,
.card-edit-number{
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 30px;
  padding-right: 30px;
}
.edit-card-input-textfield,
.edit-new-card-id{
  border-radius: 8px;
}
.add-payment-router{
  color: black;
  margin-right: auto;
  margin-left: 0;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>