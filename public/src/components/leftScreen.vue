<style scoped>


#leftScreen {
    width: 343px;
    height: 402px;
    background: blue;
    position: absolute;
    left: 82px;
    top: 196px;
    border-radius: 12px;
}


</style>

<template>

<div id="leftScreen">
  <login></login>
  <home></home>
  <pokemonDetails></pokemonDetails>
</div>

</template>

<script>

import login from './login.vue';
import home from './home.vue';
import pokemonDetails from './pokemonDetails.vue';

export default {
    name: 'leftScreen',
    components: {
      login,
      home,
      pokemonDetails
    },
    data() {
        return {
        }
    }
}

</script>
