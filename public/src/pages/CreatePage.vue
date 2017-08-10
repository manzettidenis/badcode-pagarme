<template>
  <div class="home">

    <form class="createPokemon" action="index.html" method="post">
        <h2 for="nickname">Create Pokemon</h2>
        <input type="text" name="nickname" placeholder="Your nick">
        <input type="text" name="nickname" placeholder="Your nick">
        <button class="button" type="button" name="button">Next</button>
    </form>

</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    mounted () {
      if (this.trainer.id === '') this.getOut()
    },
    computed: {
      ...mapGetters({
        trainer: 'trainerData'
      })
    },
    methods: {
      ...mapActions({

      }),
      getOut () {
        this.$router.push('/')
      }

    }
  }
</script>

<style>

</style>
