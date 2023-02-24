<template>
  <form @submit.prevent="$emit('update-user', this.user);">
    <div class="form-item">
      <label>Your Name</label>
      <input type="text" v-model="user.name" />
    </div>
    <div class="form-item">
      <label>Your Age</label>
      <input type="number" v-model="user.age" />
    </div>
    <div class="form-item">
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['update-user'],
  data() {
    return {
      user: {
        name: '',
        age: '',
      },
    };
  },
};
</script>

<style>
  .form-item {
    padding: 0 0 0.5rem;
  }

  .form-item label {
    padding: 0 0.5rem 0;
  }
</style>
