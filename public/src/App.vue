<style>

body {
    font-family: 'Arial';
}

.playbox {
    width: 100%;
    bottom: 0;
    position: fixed;
    height: 100%;
    background: transparent;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.pokedex {
    width: 1000px;
    height: 710px;
    background: url(../src/assets/img/pokedex_dois.png) center center /contain no-repeat;
    position: relative;
    display: flex;
}

</style>

<template>

<div id="app">
    <background></background>
    <div class="playbox">
        <div class="pokedex">
            <leftScreenComponent id="leftScreen"></leftScreenComponent>
            <rightScreen doSomethingChild="doSomething"></rightScreen>
        </div>
    </div>
</div>

</template>

<script>

import rightScreen from './components/rightScreen.vue';
import leftScreen from './components/leftScreen.vue';
import background from './components/background.vue';

export default {
    name: 'app',
    data() {
      return {
        trainer: {}
      }
    },
    components: {
      background,
      rightScreen,
      leftScreen
    },
    methods: {
        pokemonDetails(arg) {
            // alert('denis lindo');
            // this.$broadcast('nomeDoEvento', arg)
        },
        updateTrainerInfo(arg) {
          this.trainer = arg;
          console.log(this.trainer)
        }
    }

}

</script>
