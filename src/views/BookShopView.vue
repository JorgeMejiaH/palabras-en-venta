<template>
    <div>
      <BookDetailView @add-to-cart="openModal" />
      <CartModal v-if="showModal" :quantity="cartQuantity" @close="showModal = false" />
    </div>
  </template>
  
  <script>
  import BookDetailView from '@/components/BookDetailView.vue';
  import CartModal from '@/components/CartModal.vue';
  
  export default {
    components: {
      BookDetailView,
      CartModal,
    },
    data() {
      return {
        showModal: false,
        cartQuantity: 1,
      };
    },
    methods: {
      openModal(quantity) {
        this.cartQuantity = quantity;
        this.showModal = true;
      },
    },
  };
  </script>
  
  <style>
  /* Estilos globales si es necesario */
  </style>
  