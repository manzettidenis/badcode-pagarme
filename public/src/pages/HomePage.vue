<template>
  <div class="home">

    <form v-if="cenario==='firstStep'" class="registerTrainerForm"
      v-on:submit="changeCenario('secondStep', trainer)">
        <h2>Welcome to Poke Far.me</h2>
        <input masked="false" required type="text" name="nickname" v-model="trainer.nickname"
          placeholder="Your nick">

          <div class="buttons">
            <button class="button" type="submit"  name="button">Next</button>
          </div>
    </form>

    <form v-if="cenario==='secondStep'" id="creditCardForm" class="creditcardForm"
      v-on:submit="changeCenario('thirdStep', trainer)">

        <h2>Credit Card Info</h2>
        <label>Card Number</label>
        <input masked="false" required max="16" min="16" type="text" v-mask="'####.####.####.####'"
          v-model="trainer.cardNumber" placeholder="Card Number" value="">
          <span class="validator" v-bind:class="{ active: trainer.cardNumber.length < 19}">Type a valid card number</span>
          <label>Card Holder Name:</label>
        <input masked="false" required type="text" v-model="trainer.cardHolderName"
          placeholder="Card Holder Full Name" value="">
          <span class="validator" v-bind:class="{ active: trainer.cardHolderName.length < 4}">Type a card holder name</span>
          <label>Expiration Date:</label>
        <input masked="false" required max="4" type="text" v-mask="'##/##'"
          v-model="trainer.cardExpiration" placeholder="Card Expiration Date" value="">
          <span class="validator" v-bind:class="{ active: trainer.cardExpiration.length < 5}">Type a valid date</span>
          <label>CVV:</label>
        <input masked="false" required max="3" type="text" v-mask="'###'"
          v-model="trainer.cardCVV" placeholder="CVV" value="">
          <span class="validator" v-bind:class="{ active: trainer.cardCVV.length < 3}">Type a valid CVV Number</span>

        <div class="buttons">
          <button :disabled="trainer.cardNumber.length<19 && trainer.cardExpiration.length < 5 && trainer.cardCVV.length < 3 &&  trainer.cardHolderName.length < 4" class="button" type="submit">Next</button>
        </div>
    </form>
    <form id="choosePokemon" class="creditcardForm" v-if="cenario==='thirdStep'"
      v-on:submit="startGame('playGame', trainer)">

      <h2>Hello {{trainer.nickname}}</h2>
      <span>Please, confirm your data before click register.</span>
      <ul>
        <li>Card Number: {{trainer.cardNumber}}</li>
        <li>Holder: {{trainer.cardHolderName}}</li>
        <li>Expiration: {{trainer.cardExpiration}}</li>
        <li>CVV: {{trainer.cardCVV}}</li>
      </ul>
      <div class="buttons">
        <button class="button" v-on:click="getOut()">Abort</button>
        <button class="button" type="submit">Register</button>
      </div>
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
        createTrainer: 'createTrainer'
      }),
      startGame () {
        this.createTrainer(this.trainer)
        this.$router.push('/shop')
      },
      getOut () {
        return this.changeCenario('firstStep')
      }
    }
  }
</script>

<style>
.home {

}
button[disabled] {
  opacity: .3
}
.validator {
  display: none;
  width: 75%;
      color: red;
      padding-bottom: 39px;
}
.validator.active{
    display: flex;
}

.home form {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    width: 105%;
    max-height: 410px;
}

.home form label{
    font-weight: 900;
    text-transform: uppercase;
    color: #3e3ec2;
    padding: 0px 0;
    font-size: 13px;
    width: 75%;
    text-align: left;
}
.home form h2 {
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

.home form .button:hover {
  border-width: 0px 0 5px 5px;
  margin-left: 1px;
  margin-top: 13px;
  background: #353599;

}
.home form .button:active {
  border-width: 0px 0 3px 3px;
  margin-left: 0px;
  margin-top: 15px;
  background: #212168;
}
.home form .button {
    background: #212178;
    cursor: pointer;
        transition: all .2s;
        border-width: 0px 0 4px 4px;
        margin-top: 15px;
        width: auto;
        padding: 15px 10px;
        border-radius: 10px;
        text-transform: uppercase;
        font-weight: 900;
        color: #fff;
        border-style: solid;
        font-size: 14px;
        border-color: #0b0b41;
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
