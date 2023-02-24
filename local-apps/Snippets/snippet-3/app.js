const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    submitForm() {
      alert('Submitted!')
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    increase(num) {
      this.counter = this.counter + num;
    },
    decrease(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    }
  }
});

app.mount('#events');
