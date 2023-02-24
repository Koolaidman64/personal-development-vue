<template>
  <section>
    <h2>{{ name }}</h2>
    <h3>{{ age }} Years Old</h3>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
  html {
    font-family: Arial;
  }

  section {
    margin: 2rem auto;
    border-radius: 2rem;
    padding: 1rem;
    border: 2px solid #212121;
  }
</style>
