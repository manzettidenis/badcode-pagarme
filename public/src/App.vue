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
            <leftScreen></leftScreen>
            <rightScreen someFunctionParent="someFunction"></rightScreen>
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
    methods : {
     someFunction: function (event) {
           // `this` inside methods point to the Vue instance
           alert('Hello !')
           // `event` is the native DOM event
           alert(event.target.tagName)
         }
       },
    components: {
        background,
        rightScreen,
        leftScreen
    }
}

</script>
