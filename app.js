function randomNumber(min,max){
  return Math.floor(Math.random() *(max - min)) + min;
}
const app = Vue.createApp({
  data(){
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
    }
  },
  computed: {
    monsterBarStyle() {
      return { width:this.monsterHealth + `%`}
    },
    playerBarStyle(){
      return {width: this.playerHealth + `%`}
    },
    mayUseSpecialAttack(){
      return this.currentRound%3 !==0
    }
    


  },
  methods: {
    attackMonster(){
      this.currentRound++;
      this.monsterHealth -= randomNumber(5,12);
      this.attackPlayer();
    },
    attackPlayer(){
      this.playerHealth -= randomNumber(8,12)
    },
    specialAttackMonster(){
      this.currentRound++;
      this.monsterHealth -= randomNumber(10,25)
      this.attackPlayer();
    },
    healPlayer(){
      const healPlayer=  randomNumber(8,20);
      if(this.playerHealth + healPlayer > 100){
        this.playerHealth =100;
      }else{
        
      }

    }

  }
})
app.mount("#game")
