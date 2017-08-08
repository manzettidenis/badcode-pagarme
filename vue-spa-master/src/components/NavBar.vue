<template>

  <div v-bind:class="{ active: cenario==='playGame'}" id="rightScreen">
      <div class="rightNavbar">
          <ul>
              <li>Money: $1.000</li>
              <li>Pokemons: 3</li>
          </ul>
      </div>
      <div class="list">
          <h2>Trainer's Pokemons</h2>
          <ul v-for="p in allPokemons" >
            <router-link :to="{name: 'details', params: {id: p.id}}" class="title">
              <li>
                  <span>{{p.name}} <span class="nickname">{{p.nickname}}</span></span>
                  <span>Genre:{{p.genre}}
                    <span v-if="p.genre==='male'"class="genre">♂</span>
                    <span v-if="p.genre==='female'"class="genre">♀</span>
                  </span>
                  <span>Level: <span>{{p.level}}</span></span>
              </li>
            </router-link>
          </ul>
      </div>
      <div class="controllers">
        <router-link to="/" class="button buyButton" type="button" name="button">Buy Pokemon</router-link>
        <router-link to="/" class="button createButton" type="button" name="button">Create Pokemon</router-link>
      </div>
      <div class="menu-links">
        <router-link to="/">Home</router-link>
      </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      display: 'false'
    }
  },
  mounted () {
    this.getAllPokemons()
  },
  computed: {
    ...mapGetters({
      cenario: 'cenarioStatus',
      allPokemons: 'allPokemons'
    }),
    ...mapGetters(['allPokemons'])
  },
  methods: {
    ...mapActions([
      'getAllPokemons',
      'changeCenario'
    ])
  }
}
</script>

<style>

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
    background: yellow;
}
#rightScreen .button.createButton:active {
    background: yellow;
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

.list span > span.genre {
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

.list ul li:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1)
}

.list ul li {
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
