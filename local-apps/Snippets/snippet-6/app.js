const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalValue)
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
