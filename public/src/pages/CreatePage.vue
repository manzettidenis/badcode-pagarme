<template>
  <div class="home">

    <form class="createPokemon" action="index.html" method="post">
        <label for="nickname">Create Pokemon</label>
        <input type="text" name="nickname" v-model="pokemon.nickname"  placeholder="Your nick">
        <button class="button" type="button" name="button">Next</button>
    </form>

</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters({

      }),
      pokemon: {}
    },
    methods: {
      ...mapActions({

      })

    }
  }
</script>

<style>

</style>
