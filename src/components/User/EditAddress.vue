<template>
    <div>
        <Navbar/>
        <Options/>
        <img
        src="@/assets/config-background.png"
        alt="Fondo de la pagina"
        class="config-background"
        />
        <div class="container-edit-address">
            <EditAddressInfo/>
        </div>
        <Footer class="footer-address"/>
    </div>
</template>

<script>
import  Options  from "@/components/User/Options.vue";
import EditAddressInfo from "@/components/User/EditAddressInfo.vue";
import Navbar from "../Navbar/Navbar.vue";
import Footer from '@/components/Footer.vue';
export default{
    components: {Options, EditAddressInfo, Navbar, Footer},

    
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

.container-edit-address{
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
