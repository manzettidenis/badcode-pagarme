<style  scoped>

</style>

<template>

  <form id="creditCardForm"class="creditcardForm" action="index.html" method="post">
      <label for="nickname">Choose your nickname</label>
      <input type="text" name="trainer.creditCard.number" value="">
      <button type="button" v-on:click="pager('thirdStep', trainer)" name="button">Next</button>
      <button type="button" v-on:click="pager('firstStep', trainer)" name="button">Back</button>
  </form>

</template>

<script>

export default {
    name: 'creditCardForm',
    methods: {
      pager(arg, data) {
         return this.$parent.Pager(arg, data);
      }
    },
    data() {
        return {
          trainer: {
            creditCard: {
              owner: '',
              number: 0,
              securityCode: 0
            }
          }
        }
    }
}

</script>
