const app = Vue.createApp({
  data() {
    return {
      goal1: 'Learn Vue',
      goal2: '<span>⋆✩ Learn Vue ✩⋆</span>',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return this.goal1;
      }

      return this.goal2;
    }
  },
});

app.mount('#user-goal');

