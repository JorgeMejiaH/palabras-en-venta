<template>
    <div>
        <Options/>
        <img
        src="@/assets/config-background.png"
        alt="Fondo de la pagina"
        class="config-background"
        />
        <div class="container-add-address">
            <AddAddressInfo/>
        </div>
    </div>
</template>

<script>
import  Options  from "@/components/UserPage/Options.vue";
import AddAddressInfo from "@/components/UserPage/AddAddressInfo.vue";
export default{
    components: {Options, AddAddressInfo},
};
</script>

<style>
.config-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    z-index: -2;
    background-color: #58595B;
}

.container-add-address{
    position: absolute;
    justify-content: flex-start;
    top: 30%;
    right: 0;
    width: 78%;
    height: 100%;
    background-color: white;
    z-index: 1;
    border-radius: 20px;
}

</style>