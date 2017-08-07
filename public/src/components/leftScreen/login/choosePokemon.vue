<style  scoped>

</style>

<template>

  <form id="choosePokemon"class="creditcardForm" action="index.html" method="post">
    <select v-model="this.trainer.pokemon">
      <option disabled value="">Choose your pokemon</option>
      <option>Pikachu</option>
      <option>Bulbassaur</option>
      <option>Charmander</option>
      <option>Squirtle</option>
    </select>
    <button type="button" v-on:click="pager('playGame', trainer)" name="button">Play</button>
    <button type="button" v-on:click="pager('secondStep', trainer)" name="button">Back</button>
  </form>

</template>

<script>

export default {
    name: 'choosePokemon',
    methods: {
      pager(arg, data) {
        return this.$parent.Pager(arg, data);
      }
    },
    data() {
        return {
          trainer: {}
        }
    }
}

</script>
