const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: '',
      visible: true,
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
    },
    toggle() {
      this.visible = !this.visible;
    }
  }
});

app.mount('#assignment')
