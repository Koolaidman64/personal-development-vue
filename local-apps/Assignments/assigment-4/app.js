const app = Vue.createApp({
  data() {
    return {
      selectedClass: '',
      visible: true,
      color: '',
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    }
  }
});

app.mount('#assignment')
