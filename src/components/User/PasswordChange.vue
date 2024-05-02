.<template>
    
    <div class = 'user-pass-change-background'>
        <Options/>
    <div class="edit-password-container">
        <div Class="change-password-container">
            <div class = "personalinfo-edit">
                <router-link to ='/user-info'>
                <h1 class="txt-personalinfo-password"> Informacion personal / Contraseña</h1>
                </router-link>
                <h1 class = "txt-edicion"> Edicion</h1>
            </div>      
                <h2 class="txt-Change-Password">Cambiar Contraseña</h2>   
            
            <div class = 'passwords-inputs-container'>
                <div class = 'actualp-container'>
                    <actual-password-input/>
                </div>
                <div class="new-password-inputs">
                    <new-password-input/>
                    <verify-password-input/>
                </div>
                <div class="btn-save-password-change-container">
                    <button type="submit" class="btn-save-password-change">Guardar cambios</button>
                </div>
            </div>
        </div> 
    </div>   
    </div>

</template>

<script>
import Options from './Options.vue';
import ActualPasswordInput from './ActualPasswordInput.vue'
import NewPasswordInput from './NewPasswordInput.vue'
import VerifyPasswordInput from './VerifyPasswordInput.vue'
export default {
  components: { ActualPasswordInput, NewPasswordInput, VerifyPasswordInput, Options },

}
</script>

<style>

.user-pass-change-background{
    display: flex;
    height: 90lvh;
    width: 100%;
    background-image: url(/src/assets/UserInfoBackground.jpg) ;
    
}

.edit-password-container{
    
    display:flex ;
    justify-content: flex-end;
}

.change-password-container{
    background-color: white;
    width: 151lvh;
    height: 62.5lvh;
    display: flex;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    flex-direction: column;
    border-left: 3px ridge;
    border-top: 3px ridge;
    border-bottom: 3px ridge;
  
}

.passwords-inputs-container{
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 90%;
    height: 65%;
    border-style:ridge;
    background-color: white ;
    border-radius: 30px;
}

.personalinfo-edit{
    display: flex;
    margin-left: 2%;
    margin-right: 2%;
    justify-content: space-between;
    border-bottom: 2px ridge ;
    
}


.actualp-container{
    display: flex;
    margin-left: 5%;
    align-items: center;
    width: 45%;
    flex: 1;
    
}

.txt-Change-Password{
 display: flex;
 margin-left: 4%;
}

.new-password-inputs{
    display: flex;
    justify-content: center;
    justify-content: space-between;
    flex: 1;
}

.btn-save-password-change-container{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 95%;
    flex: 0.7;
    
}

.txt-personalinfo-password{
    font-size: 100%;
    font-family: Raleway;
}
.txt-edicion{
    font-size: 100%;
    font-family: Raleway;
    
}
.btn-save-password-change{
    width: 20%;
    height: 45%;
    font-family: Raleway;
    font-size: 110%;
    background-color: #050835;
    color: white;
    border-radius: 7px;

}
</style>