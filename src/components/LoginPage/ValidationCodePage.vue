<template>
    <div class="background-validation-container">
        <sign-up-header/>
        <div class="validation_container">
            <div class="validation-content">
            <h1 class="txt-code-validation">Código de validación</h1>
            <h2 class="txt-code">introduce el código que se envió a tu correo</h2>
            <form @submit.prevent="handleSubmit" class="code-input" name="validation-code-form">
                <validation-code-input/>
                <button type="submit" class="btn-code-validation">Validar código</button>
            </form>
            
            <router-link to="/" class="link-resend-code">¿No recibiste tu código?</router-link>
            </div>
        </div>

    </div>
 
</template>

<script>
import SignUpHeader from '../SignUpPage/SignUpHeader.vue'
import ValidationCodeInput from './ValidationCodeInput.vue'
export default { components: { SignUpHeader, ValidationCodeInput }

}
</script>

<style>

.link-resend-code{
    margin-top: 2%;
    display: flex; 
    margin-left: 12%;
}

.background-validation-container {
    height: 90lvh;
    background-color: #050835;
    background-image: url(/src/assets/registerBackground.png);
    display: flex;
    justify-content: center; 
    align-items: center; 
}

.code-input {

    margin-top: 4%;
    display: flex;
    align-items: center;
}
.validation_container{ 
    height: 39.0%;
    width: 37.1%;
    border-radius: 45px;
    display: flex;
    background-color:white; 
    flex-wrap: wrap;
}

.validation-content {
    margin-top: 8%;
    margin-bottom: 8%;
    flex-grow: 1;
    flex-basis: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
}

.txt-code-validation{
    margin-left: -15%;
    flex-grow: 1;
    flex-basis: 200;
}

.btn-code-validation{
    height: 3.5vh;
    background-color: #050835;
    width: 20%;
    border-radius: 8px;
    color: white;
    margin-left: 1%;
}
.code-input{
    flex-grow: 1;
    flex-basis: 200;
}

.txt-code-validation{
    
    font-size: 270%;
}

.txt-code{
    margin-left: -17%;
    margin-top: -3% ;
    font-size: 120%;
    flex-grow: 1;
    flex-basis: 200;
}

</style>

