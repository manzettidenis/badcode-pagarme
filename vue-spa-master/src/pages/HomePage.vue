<template>
  <div class="home">

  <form v-if="cenario==='firstStep'" class="registerTrainerForm" action="index.html" method="post">
      <label for="nickname" >Welcome to Poke Far.me</label>
      <input type="text" name="nickname" v-model="trainer.nickname"  placeholder="Your nick">
      <input type="text" name="name" v-model="trainer.name" placeholder="Your name">
      <input type="text" name="lastname" v-model="trainer.lastname" placeholder="Your lastname">
      <button type="button" @click="changeCenario('secondStep', trainer)" name="button">Next</button>
  </form>
  <form v-if="cenario==='secondStep'" id="creditCardForm" class="creditcardForm" action="index.html" method="post">
      <label for="nickname">Choose your nickname</label>
      <input type="text" name="trainer.creditCard.number" value="">
      <button type="button" @click="changeCenario('thirdStep', trainer)"  name="button">Next</button>
      <button type="button" @click="changeCenario('firstStep', trainer)"  name="button">Back</button>
  </form>
  <form  v-if="cenario==='thirdStep'"  id="choosePokemon"class="creditcardForm" action="index.html" method="post">
    <select v-model="this.trainer.pokemon">
      <option disabled value="">Choose your pokemon</option>
      <option>Pikachu</option>
      <option>Bulbassaur</option>
      <option>Charmander</option>
      <option>Squirtle</option>
    </select>
    <button type="button" @click="changeCenario('playGame', trainer)" name="button">Play</button>
    <router-link to="/" type="button" @click="changeCenario('secondStep', trainer)" name="button">Back</router-link>
  </form>
</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        trainer: 'trainerData',
        cenario: 'cenarioStatus'
      })
    },
    methods: {
      ...mapActions([
        'changeCenario',
        'updateTrainer'
      ]),
      pager (arg, data) {
        if (arg === 'playGame') {
          console.log('entrou no emit')
          this.$emit('cenarioHasChanged')
        }
      }
    }
  }
</script>

<style>

.home form {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-start;
}

.home form label {
    font-weight: 900;
    text-transform: uppercase;
    margin: 10px 0 30px;
    color: #3e3ec2;
    padding: 10px 0;
    font-size: 23px;
    border-bottom: 6px solid #d1a90c;
    border-top: 6px solid #d1a90c;
}

.home form input {
    font-weight: 900;
    text-transform: uppercase;
    margin: 10px 0 20px;
    font-size: 19px;
    color: #000;
    padding: 5px 10px;
    letter-spacing: 4px;
}

.home form button {
    background: #121266;
    border: none;
    width: 200px;
    cursor: pointer;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
    padding: 20px;
    font-size: 21px;
    margin-top: 21px;
}

</style>
