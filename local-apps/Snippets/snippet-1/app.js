// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');
//
// function addGoal() {
//   const value = input.value;
//   const listItem = document.createElement('li')
//
//   listItem.textContent = value;
//   list.appendChild(listItem);
//   input.value = '';
// }
//
// button.addEventListener('click', addGoal)


Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  },
}).mount('#app');
