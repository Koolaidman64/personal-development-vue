function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      logMessages: [],
      specialAttackUsed: false,
      specialAttackCooldown: 0,
      healUsed: false,
      healCooldown: 0,
      winner: null,
    }
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: '0%'}
      }

      return { width: this.monsterHealth + '%' }
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: '0%'}
      }

      return { width: this.playerHealth + '%' }
    },
    specialAttackAvailable() {
      return this.specialAttackCooldown !== 0;
    },
    healAvailable() {
      return this.healCooldown !== 0;
    }
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.logMessages = [];
      this.specialAttackCooldown = 0;
      this.healCooldown = 0;
      this.winner = null;
    },
    attackMonster() {
      this.currentRound++;

      const attackDamage = getRandomNumber(6, 13);
      this.monsterHealth -= attackDamage;

      this.addLogMessage('player', 'attack', attackDamage);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackDamage = getRandomNumber(8, 16);
      this.playerHealth -= attackDamage;

      this.addLogMessage('monster', 'attack', attackDamage);
    },
    specialAttackMonster() {
      this.currentRound++;

      const attackDamage = getRandomNumber(10, 30);
      this.monsterHealth -= attackDamage;

      this.specialAttackUsed = true;
      this.specialAttackCooldown = 3;

      this.addLogMessage('player', 'special-attack', attackDamage);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++

      const healValue = getRandomNumber(4, 28);

      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      this.healUsed = true;
      this.healCooldown = 2;

      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
        currentRound: this.currentRound,
      });
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      };
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      };
    },
    currentRound() {
      if (this.specialAttackCooldown > 0) {
        if (this.specialAttackUsed) {
          return this.specialAttackUsed = false;
        }

        this.specialAttackCooldown--;
      };

      if (this.healCooldown > 0) {
        if (this.healUsed) {
          return this.healUsed = false;
        }

        this.healCooldown--;
      };
    },
  }
});

app.mount('#game')
