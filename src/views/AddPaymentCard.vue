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
                  type="text"
                  id = "edit-new-card-number"   
                  v-model = "editCardNumer"  
                  @input="formatCardNumber"        
                  class = "edit-new-card-id"              
                />
              </div>
              <div class = "card-edit-input">
                <label for = 'card-name-in-edit' class = 'lbl-card-edit-input'>*Nombre: </label>
                <input
                  type="text"
                  id = "edit-new-card-name"
                  v-model = 'editCardName'
                  class = 'edit-card-input-textfield'
                />
              </div>
              <div class="date-input-container">
                <label for="dobPicker">Fecha de expiración:</label>
                <input
                  id="dobPicker"
                  v-model="dob"
                  :config="flatpickrConfig"
                  @input="validateDob"
                  class="date-input"
                 />
                <div v-if="dobError" class="error-message">
                  Ingresa una fecha de expiración válida.
                </div>
              </div>
              <div class = "card-edit-input">
                <label for="card-code-in-edit" class='lbl-card-edit-input'>*CVC/CVV: </label>
                <input 
                  type="text"
                  id = 'edit-new-cvc'
                  v-model="editCardCVC"
                  class="edit-card-input-textfield"
                />
              </div>
              <div class = "card-edit-input">
                <label for="card-type-in-edit" class='lbl-card-edit-input'>*Tipo de tarjeta</label>
                <select  
                  id="edit-new-card-type" 
                  v-model="editCardType" 
                  class="edit-card-input-textfield"
                >
                  <option value="" disabled>Selecciona un tipo de tarjeta</option>
                  <option value="DE">Debito</option>
                  <option value="CR">Crédito</option>
                </select>
              </div>
            </div>
            <div class = 'card-edit-save'>
              <button type="submit" class="btn-save-password-change" @click="saveCardInfo">Guardar tarjeta</button>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
import Options from "@/components/User/Options.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Cookies from 'js-cookie';
import hostMixin from "@/mixins/host.js";
import axios from 'axios';
export default {
  mixins: [hostMixin],
  components: { Options, Navbar },
  data() {
    return {
      editCardNumer: "",
      editCardName: "",
      editCardExpedition: "",
      editCardCVC: "",
      editCardType: "",
      editCardAmmount: 100000,
      sessionInfo: null,

      dob: null,
      dobError: false,
      validDate: false,
      flatpickrConfig: {
        dateFormat: "Y-m-d",
      },
    };
  },
  beforeMount(){
    // this.fetchDocumentTypes();
    console.log("Creating");
    this.sessionInfo = JSON.parse(this.getTokenFromCookie());
  },
  methods:{
    validateDob() {
      const dobParts = this.dob.split("-");
      const selectedDate = new Date(dobParts[0], dobParts[1] - 1, dobParts[2]);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      // Validación básica para verificar si la fecha de nacimiento es una fecha válida.
      if (isNaN(selectedDate.getTime()) || selectedDate <= currentDate) {
        this.dobError = true;
        this.validDate = false;
        //console.log("N "+ selectedDate.toISOString().split('T')[0])
      } else {
        this.dobError = false;
        this.validDate = true;
        //console.log("S "+ selectedDate.toISOString().split('T')[0])
        this.editCardExpedition = selectedDate.toISOString().split('T')[0]
      }
    },
    getTokenFromCookie() {
      // Retrieve the token from the cookie
      return Cookies.get('loginToken');
    },
    saveCardInfo(){
      const data = {
        user: this.sessionInfo.user.uuid,
        name: this.editCardName,
        card_number: this.editCardNumer,
        expiration_date: this.editCardExpedition,
        ccv: this.editCardCVC,
        card_type: this.editCardType,
        amount: this.editCardAmmount
      }
      console.log(data)
      axios
        .post(hostMixin.data().host + 'api/card/', data)
        .then(response => {
          console.log(response.data)
          this.$router.push("/payment-method")
        })
        .catch(error => {
          console.error('Error posting payments:', error);
        });
    },
    formatCardNumber() {
      let value = this.editCardNumer.replace(/\D/g, ''); // Remove all non-digit characters
      value = value.slice(0, 16); // Limit to 16 digits
      let formattedValue = '';
      for (let i = 0; i < value.length; i += 4) {
        if (i > 0) formattedValue += '-';
        formattedValue += value.slice(i, i + 4);
      }
      this.editCardNumer = formattedValue;
    },
  },
  mounted() {
    flatpickr("#dobPicker", this.flatpickrConfig);
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