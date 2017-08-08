<template>
  <div class="home">

    <form v-if="cenario==='firstStep'" class="registerTrainerForm"
      v-on:submit="changeCenario('secondStep', trainer)">
        <label >Welcome to Poke Far.me</label>
        <input required type="text" name="nickname" v-model="trainer.nickname"
          placeholder="Your nick">

          <div class="buttons">
            <button class="button" type="submit"  name="button">Next</button>
          </div>
    </form>

    <form v-if="cenario==='secondStep'" id="creditCardForm" class="creditcardForm"
      v-on:submit="changeCenario('thirdStep', trainer)">

        <label>Credit Card Info</label>
        <input required max="16" type="text" v-mask="'####.####.####.####'"
          v-model="trainer.cardNumber" placeholder="Card Number" value="">

        <input required type="text" v-model="trainer.cardHolderName"
          placeholder="Card Holder Full Name" value="">

        <input required max="4" type="text" v-mask="'##/##'"
          v-model="trainer.cardExpiration" placeholder="Card Expiration Date" value="">
        <input required max="3" type="text" v-mask="'###'"
          v-model="trainer.cardCVV" placeholder="CVV" value="">

        <div class="buttons">
          <button class="button" type="submit">Next</button>
        </div>
    </form>
    <form id="choosePokemon" class="creditcardForm" v-if="cenario==='thirdStep'"
      v-on:submit="startGame('playGame', trainer)">

      <label>Hello {{trainer.nickname}}</label>
        <select v-model="trainer.pokemon">
        <option disabled value="">Choose your pokemon</option>
          <option v-for="p in pokemons" :value="p.name" >{{p.name}}</option>
      </select>
      <div class="buttons">
        <button class="button" @click="changeCenario('secondStep', trainer)">Back</button>
        <button class="button" type="submit">Play</button>
      </div>
    </form>
</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        pokemons: 'getStartPokemons',
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
        this.updateTrainer(this.trainer)
        // this.$router.push('/details/1')
      }
    }
  }
</script>

<style>
.home {

}
.home form {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    width: 105%;
    padding: 2% 0%;
    max-height: 410px;
}

.home form label {
    font-weight: 900;
    text-transform: uppercase;
    margin: 10px 0 15px;
    color: #3e3ec2;
    padding: 10px 0;
    font-size: 23px;
    border-bottom: 6px solid #d1a90c;
    border-top: 6px solid #d1a90c;
}

.home form input {
    font-weight: 900;
    text-transform: capitalize;
    margin: 10px 0;
    font-size: 19px;
    color: #000;
    padding: 5px 10px;
    letter-spacing: 1px;
}

.home form .button {
    background: #121266;
    border: none;
    cursor: pointer;
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
    padding: 20px;
    font-size: 21px;
    margin-top: 21px;
}
.home form select {
  height: 150px;
}
.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

</style>
