<template>
  <div class="home">

    <form v-if="cenario==='firstStep'" class="registerTrainerForm" action="index.html" method="post">
        <label for="nickname" >Welcome to Poke Far.me</label>
        <input type="text" name="nickname" v-model="trainer.nickname"  placeholder="Your nick">
        <input type="text" name="name" v-model="trainer.name" placeholder="Your name">
        <input type="text" name="lastname" v-model="trainer.lastname" placeholder="Your lastname">
        <button class="button" type="button" @click="changeCenario('secondStep', trainer)" name="button">Next</button>
    </form>
    <form v-if="cenario==='secondStep'" id="creditCardForm" class="creditcardForm" action="index.html" method="post">
        <label for="nickname">Payment Info</label>
        <input type="text" v-model="trainer.creditCardNumber" placeholder="CC Number" value="">
        <input type="text" v-model="trainer.creditCardOwner" placeholder="CC Number" value="">
        <button class="button" type="button" @click="changeCenario('thirdStep', trainer)"  name="button">Next</button>
        <button class="button" type="button" @click="changeCenario('firstStep', trainer)"  name="button">Back</button>
    </form>
    <form  v-if="cenario==='thirdStep'" id="choosePokemon" class="creditcardForm" action="index.html" method="post">
      Hello {{trainer.nicknme}}
        <select v-model="trainer.pokemon">
        <option disabled value="">Choose your pokemon</option>
        <option>Pikachu</option>
        <option>Bulbassaur</option>
        <option>Charmander</option>
        <option>Squirtle</option>
      </select>
        <button class="button" type="button" @click="startGame('playGame', trainer)" name="button">Play</button>
      <button class="button" @click="changeCenario('secondStep', trainer)">Back</button>
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
      ...mapActions({
        changeCenario: 'changeCenario',
        updateTrainer: 'updateTrainer'
      }),
      startGame () {
        console.log(this.$router)
        this.changeCenario('playGame', this.trainer)
        this.$router.push('/details/1')
      }
    }
  }
</script>

<style>


</style>
