<template>
    <div>
        <Options/>
        <img
        src="@/assets/config-background.png"
        alt="Fondo de la pagina"
        class="config-background"
        />
        <div class="container-address">
            <AddressInfo/>
        </div>
    </div>
</template>

<script>
import  Options  from "@/components/User/Options.vue";
import AddressInfo from "@/components/User/AddressInformation.vue";
export default{
    components: {Options, AddressInfo},
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

.container-address{
    position: absolute;
    justify-content: flex-start;
    top: 30%;
    right: 0;
    width: 78%;
    height: 1000px;
    background-color: white;
    z-index: 1;
    border-radius: 20px;
}

</style>