const app = Vue.createApp({
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    increase(value) {
      this.number = this.number + value;
    },
  },
  computed: {
    getResult() {
      if (this.number < 37) {
        return 'Not there yet :(';
      }

      if (this.number > 37) {
        return 'Too Much !';
      }

      if (this.number === 37) {
        return this.number;
      }
    },
  },
  watch: {
    getResult() {
      const that = this;

      setTimeout(function() {
        that.number = 0;
      }, 5000)
    },
  },
})

app.mount('#assignment')
