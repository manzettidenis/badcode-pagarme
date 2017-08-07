<style scoped>


#leftScreen {
    width: 343px;
    height: 402px;
    background: #FFCC00;
    position: absolute;
    left: 82px;
    top: 196px;
    border-radius: 12px;
}


</style>

<template>

<div id="leftScreen">
  <router-view></router-view>
  <!-- <login></login>
  <home></home>
  <pokemonDetails></pokemonDetails> -->
</div>

</template>

<script>

import login from './leftScreen/login/login.vue';
import home from './leftScreen/home.vue';
import start from './leftScreen/start.vue';
import pokemonDetails from './leftScreen/pokemonDetails.vue';

export default {
    name: 'leftScreen',
    components: {
      start,
      login,
      home,
      pokemonDetails
    },
    methods: {
        up(arg) {
          this.$parent.updateTrainerInfo(arg)
        }
    },
    data() {
        return {

        }
    }
}

</script>
