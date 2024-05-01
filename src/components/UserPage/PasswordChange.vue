.<template>
    <div Class="change-password-container">
        <div class = "personalinfo-edit">
            <h1 class="txt-personalinfo-password">Informacion personal / Contraseña</h1>

        </div>      
            <h2 class="txt-Change-Password">Cambiar Contraseña</h2>
        <div class ="actual-password-box">
            <actual-password-input/>
        </div>
        <div class = "New-password-box">
            <new-password-input/>
        </div>
    </div>

</template>

<script>
import ActualPasswordInput from './ActualPasswordInput.vue'
import NewPasswordInput from './NewPasswordInput.vue'
export default {
  components: { ActualPasswordInput },
  components: { NewPasswordInput}

}
</script>

<style>

.change-password-container{
    background-color: rgb(131, 131, 218);
    width: 80%;
    height: 50lvh;
    display: flex;
    flex-direction: column;
  
}

.personalinfo-edit{
    display: flex;
}

.actual-password-box{
    display: flex;
    height: 10lvh;
}

.New-password-box{
  
}

.txt-Change-Password{
 display: flex;
 margin-left: 4%;
}

.txt-personalinfo-password{
    font-size: 100%;
    font-family: Raleway;
}
</style>