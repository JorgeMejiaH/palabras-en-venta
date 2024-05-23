<template>
    <div class="book-card">
      <img :src="book.image" :alt="book.title">
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <p>${{ book.price.toLocaleString() }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      book: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .book-card {
    border: 1px solid #ccc;
    padding: 16px;
    width: 200px;
    margin: 10px;
    text-align: center;
  }
  
  .book-card img {
    width: 100%;
    height: auto;
  }
</style>