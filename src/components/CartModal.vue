<template>
    <div class="modal" @click.self="close">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <h2>Producto(s) agregado(s) al carrito de compras</h2>
        <img src="el-demonio-de-la-perversidad.jpg" alt="El Demonio de la Perversidad">
        <p>Orgullo y Prejuicio</p>
        <p>Autor: Jane Austen</p>
        <p>Precio: $63.000</p>
        <p>Cantidad: {{ quantity }}</p>
        <p>Subtotal: ${{ (quantity * 63000).toLocaleString() }}</p>
        <button @click="viewCart">Ver carrito de compras</button>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      quantity: {
        type: Number,
        required: true,
      },
    },
    methods: {
      close() {
        this.$emit('close');
      },
      viewCart() {
        window.location.href = "carrito.html";
      },
    },
  };
</script>
  
<style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    padding-top: 60px;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>