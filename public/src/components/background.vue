<style scoped>

#background {
    width: 100vw;
    height: 100vh;
    background: url(../src/assets/img/farm.png) center center /contain no-repeat;
    position: absolute;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pokemons {
  width: 70%;
  max-width: 1200px;
  height: 120px;
  position: absolute;
  bottom: 35px;
  margin: auto;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.pokemon {
  width: 80px;
  height: 80px;
  background: url(../src/assets/img/sprites.png);
  background-repeat: no-repeat;
  background-size: 350px;

}

.Pikachu {
  background-position: -90px -5px;

}
.Squirtle {
  background-position: -180px 0px;
}
.Charmander {}
.Pikachu {}

</style>

<template>

<div id="background">
    <ul class="pokemons">
        <li class="pokemon Pikachu"></li>
        <li class="pokemon Bulbassaur"></li>
        <li class="pokemon Squirtle"></li>
    </ul>

</div>

</template>

<script>

export default {
    name: 'background',
    data() {
        return {}
    }
}

</script>
