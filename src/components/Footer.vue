<template>
    <div>
        <img
        src="@/assets/WhiteBackground.png"
        alt="fondo blanco"
        class="white-background"
        />
    </div> 
    <div>
        <img src="@/assets/imagen_seguridad_pago.png" alt="Logo seguridad de pagos" class="img-pagos" />
    </div>
    <div class="flex-container">
        <div class="item-1">1</div>
        <div class="item-2">2</div>
        <div class="item-3">3</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.white-background{
    position: absolute;
    top: 0;
    left: 50%;
    width: 55%;
    height: 100%;
    z-index: -1;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
}

.flex-container{
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>