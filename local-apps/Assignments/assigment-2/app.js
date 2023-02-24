const app = Vue.createApp({
  data() {
    return {
      alert: 'Rats are cool !',
      output1: '',
      output2: '',
      confirmedOutput: '',
    }
  },
  methods: {
    submit() {
      alert(this.alert);
    },
    setOutput(event, output) {
      if (output === 1) {
        this.output1 = event.target.value;
        return
      }

      this.output2 = event.target.value;
    },
    confirmOutput() {
      this.confirmedOutput = this.output2;
    }
  },
})

app.mount('#assignment')
