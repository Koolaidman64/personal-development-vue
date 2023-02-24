const app = Vue.createApp({
  data() {
    return {
      itemA: false,
      itemB: false,
      itemC: false,
    }
  },
  computed: {
    itemAClasses() {
      return { red: this.itemA }
    }
  },
  methods: {
    itemSelected(box) {
      if (box === 'A') {
        this.itemA = !this.itemA;
      }

      if (box === 'B') {
        this.itemB = !this.itemB;
      }

      if (box === 'C') {
        this.itemC = !this.itemC;
      }
    },
  }
});

app.mount('#styling');
