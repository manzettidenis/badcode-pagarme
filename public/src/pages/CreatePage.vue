<template>
  <div class="home create">

    <form class="createPokemon" v-on:submit="createPokemon(body.pokemon)">
        <h2 for="nickname">Create Pokemon</h2>
        <label for="">Breed</label>
        <select v-model="body.pokemon.name">
          <option value="Pikachu">Pikachu</option>
          <option value="Bulbasaur">Bulbasaur</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmanderr</option>
        </select>
        <label for="">Nickname</label>
        <input type="text" v-model="body.pokemon.nickname" placeholder="Your pokemon's nickname">
        <label for="">Gender</label>
        <select v-model="body.pokemon.gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button class="button" type="submite">Create</button>
    </form>

</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        body: {
          pokemon: {}
        }
      }
    },
    mounted () {
      if (this.trainer.id === '') this.getOut()
      this.body.pokemon.trainer_id = this.trainer.id
    },
    computed: {
      ...mapGetters({
        trainer: 'trainerData'
      })
    },
    methods: {
      ...mapActions([
        'createPokemon'
      ]),

      getOut () {
        this.$router.push('/')
      }

    }
  }
</script>

<style>
.create form label {
  width: auto;
  padding: 5px 0
}
.create form select, .create form input {
  width: 90%;
  padding: 4% 0
}
</style>
