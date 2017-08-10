<template>

  <div v-bind:class="{active: cenario==='playGame'}" id="rightScreen">
  <!-- <div id="rightScreen" class="active"> -->
      <div class="rightNavbar">
          <ul>
              <li v-if="count <= 5">"Poke Hick"</li>
              <li v-if="count > 5 && count <=  15">"Poke Farmer"</li>
              <li v-if="count > 15">"Poke Tycoon"</li>
              <li class="count">Pokemons: <span>{{count}}</span></li>
          </ul>
      </div>
      <div class="list">
          <h2>{{trainer.nickname}}'s Pokemons</h2>
          <ul>
              <li class="pokemonList" v-for="p in pokemons" v-bind:class="{hide: canSeePokemons===false}">
                <router-link :to="{name: 'details', params: {where:'pokedex', name: p.name, id: p.id}}">
                  <span>{{p.name}} <span class="nickname">{{p.nickname}}</span></span>
                  <span>gender:
                    <span v-if="p.gender==='male'"class="gender">♂</span>
                    <span v-if="p.gender==='female'"class="gender">♀</span>
                  </span>
                  <span>Level: <span>{{p.level}}</span></span>
                </router-link>
              </li>
          </ul>
          <div v-bind:class="{show: canSeePokemons===false}" class="info">
            <span>Know more about {{seeAbout}}</span>

            <div v-if="seeAbout === 'Pikachu'" class="">
              <p>
                is an Electric-type Pokémon introduced in Generation I.
                It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone. However, the starter Pikachu in Pokémon Yellow will refuse to evolve into Raichu unless it is traded and evolved on another save file.
              </p>
            </div>
            <div v-if="seeAbout === 'Bulbassaur'" class="">
          <p>
            is a dual-type Grass/Poison Pokémon introduced in Generation I.
            It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.
          </p>
            </div>
            <div v-if="seeAbout === 'Charmander'" class="">
            <p>
              is a Fire-type Pokémon introduced in Generation I.
              It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36.
            </p>
            </div>
            <div v-if="seeAbout === 'Squirtle'" class="">
            <p>
              is a Water-type Pokémon introduced in Generation I.
                It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36.
            </p>
            </div>
          </div>
      </div>
      <div class="controllers">
        <router-link to="/shop" class="button buyButton" type="button" name="button">Visit Shop</router-link>
        <router-link to="/create" class="button createButton" type="button" name="button">Create Pokemon</router-link>
      </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      canSeePokemons: true,
      seeAbout: ''
    }
  },
  mounted () {
    console.log('oioio' + ['details'].indexOf(this.$route.name))
  },
  watch: {
    '$route.name': function () {
      if (this.$route.name === 'details') {
        this.canSeePokemons = false
      } else {
        this.canSeePokemons = true
      }
      if (this.$route.params.name === 'Pikachu') {
        this.seeAbout = 'Pikachu'
      } else if (this.$route.params.name === 'Squirtle') {
        this.seeAbout = 'Squirtle'
      } else if (this.$route.params.name === 'Charmander') {
        this.seeAbout = 'Charmander'
      } else if (this.$route.params.name === 'Bulbassaur') {
        this.seeAbout = 'Bulbassaur'
      }
    }
  },
  computed: {
    ...mapGetters({
      cenario: 'cenarioStatus',
      trainer: 'trainerData',
      count: 'countPokemons',
      pokemons: 'myPokemons'
    })
  },
  methods: {
    ...mapActions([
      'getMyPokemons',
      'changeCenario',
      'buyPokemon'
    ]),
    setTitle () {
    }
  }
}
</script>

<style>
.info {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hide {
  display: none!important;
}
.show {
  display: flex!important;
}
.info span{
color: #fc0;
    text-align: center;
    font-size: 1.1rem!important;
    text-transform: uppercase;
    font-weight: 900;
  }
.info p {
color: #fff;
text-align: center;
}
#rightScreen {
  overflow: hidden;
  width: 0px;
  height: 0px;
  overflow: hidden;
  border-radius: 1000px;
  background: #60607b;
  border-radius: 7px;
  transition: height .6s, width .6s, opacity 2s, border 2s;
  opacity: 0;
}
#rightScreen.active {
  border-radius: 0px;
  width: 331px;
  opacity: 1;
  height: 476px;
}

.controllers {
  position: absolute;
  bottom: 0;
  background: rgba(255, 255, 255, 0.53);
  display: flex;
  border-top: #FFFFFF 2px solid;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 94%;
  padding: 2% 3%;
  height: 50px;
}

#rightScreen .button.buyButton:hover, #rightScreen .button.createButton:hover  {
    border-width: 0px 0 5px 5px;
    margin-top: -1px;
}
#rightScreen .button.buyButton:hover {
background: #f2963d;
}
#rightScreen .button.createButton:hover {
    background: #5a5a77;

}
#rightScreen .button.buyButton:active {
  margin-top: 3px;
  margin-right: 3px;
    background:#de7b1b;
    border-width: 0px 0 2px 2px;

}
#rightScreen .button.createButton:active {
    margin-top: 3px;
    margin-right: 3px;
      background:#39394d;
      border-width: 0px 0 2px 2px;
}

#rightScreen .button {
  cursor: pointer;
      transition: all .2s;
      border-width: 0px 0 4px 4px;
      width: auto;
      padding: 15px 10px;
      border-radius: 10px;
      text-transform: uppercase;
      font-weight: 900;
      color: #fff;
      border-style: solid;
      font-size: 12px;
}

.createButton {
    transition: all .2s;
    background: #3f3f55;
    border-color:#2c2c3d
}

.buyButton {
  transition: all .2s;
  background: #ed7f15;
  border-color:#a4570c;
}

.rightNavbar {
    border-bottom: 1px solid yellow;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 45px;
    background: rgba(0,0,0,0.5);
}

.rightNavbar ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 90%;
    align-items: center;
    color: #c1c1c1;
    padding: 0 5%;
    justify-content: space-between;
}
a {text-decoration: none;}

.list {
  padding-top: 60px;
  text-decoration: none;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 356px;
  width: 105%;

}

.list h2 {
    text-align: center;
    color: #fff;
}

.list span {
    font-size: .8rem;
}

.list span > span {
    font-size: 1rem;
    display: flex;
    margin-top: 5px;
    align-items: flex-start;
    ;
    justify-content: space-between;
    flex-direction: column;
    width: auto;
}

.list span > span.gender {
    font: 900 2rem/1rem 'Arial';
}

.list span > span.nickname {
    font: 100 1rem 'Arial';
    font-style: italic;
}

.list ul {
    list-style: none;
    padding: 0;
}

.list ul li a:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1)
}

.list ul li a{
    display: flex;
    flex-direction: row;
    align-items: center;
    ;
    justify-content: space-between;
    padding: 15px 10px;
    font-weight: 900;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

</style>
