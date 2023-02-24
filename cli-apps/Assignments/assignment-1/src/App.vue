<template>
  <section>
    <active-user
      :name="this.user.name"
      :age="this.user.age"
    ></active-user>
    <user-data
      @update-user="updateUserDetails"
    ></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Adam Dixon',
        age: 26,
      },
    };
  },
  methods: {
    updateUserDetails(user) {
      this.user.name = user.name;
      this.user.age = +user.age;
    },
  },
};
</script>
