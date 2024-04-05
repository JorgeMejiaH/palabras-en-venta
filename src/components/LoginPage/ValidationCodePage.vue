<template>
    <div>
        <sign-up-header/>

        <h1 class="txt-code-validation">Código de validación</h1>
        <h2 class="txt-code">introduce el código que se envió a tu correo</h2>
        <form @submit.prevent="handleSubmit" class="block-inputs" name="validation-code-form">
            <validation-code-input/>
            <button type="submit" class="btn-code-validation">Validar código</button>
        </form>
        <div class="validation-container">
            <router-link to="/" class="link-resend-code">¿No recibiste tu código?</router-link>
        </div>
    </div>
    

</template>

<script>
import SignUpHeader from '../SignUpPage/SignUpHeader.vue'
import ValidationCodeInput from './ValidationCodeInput.vue'
export default { components: { SignUpHeader, ValidationCodeInput }

}
</script>



