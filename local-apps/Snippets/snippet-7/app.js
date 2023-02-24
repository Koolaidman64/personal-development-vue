const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdated()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');

setTimeout(function() {
  app.unmount('#app');
}, 3000)


const app2 = Vue.createApp({
  template: `
    <p>{{ favouriteMeal }}</p>
  `,
  data() {
    return {
      favouriteMeal: 'Pizza',
    };
  },
});

app2.mount('#app2');

// ------------

// let message = 'Hello!';
// let longMessage = message + 'World!';
//
// console.log(longMessage);
//
// message = 'Hello!!!!!!';
//
// console.log(longMessage);

// ------------

const data = {
  message: 'Hello!',
  longMessage: 'Hello World!',
}

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' world'
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!!';
