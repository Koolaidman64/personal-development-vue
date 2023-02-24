const app = Vue.createApp({
  data() {
    return {
      name: 'Adam',
      age: 26,
      number: Math.random(),
      url: 'https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41684-021-00812-0/MediaObjects/41684_2021_812_Figa_HTML.jpg',
    }
  },
  methods: {
    randomNumber() {
     return Math.random();
    }
  },
})

app.mount('#assignment')
