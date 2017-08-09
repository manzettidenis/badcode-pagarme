<template>
  <div :on="this" class="product-item">
    <router-link to="/shop" class="back-link">BACK</router-link>
    <div class="image" v-bind:class="renderPokemon(pokemon)"></div>
    <div class="product-title">{{ pokemon.name }}</div>
    <div class="product-subtitle">Nickname: <span>{{ pokemon.nickname }}</span></div>
    <div class="product-subtitle">Level: <span>{{ pokemon.level }}</span></div>
    <div class="product-subtitle">gender: <span>{{ pokemon.gender }}</span></div>
    <div class="product-subtitle">Price: <span>${{ pokemon.price }}</span></div>
    <div class="product-details">
      <div class="inventory">In Stock: {{ pokemon.stock }}</div>
      <button v-on:click="buyPokemon({pokemon:pokemon, trainer:trainer})" class="add-button" v-if="where === 'shop'">
        {{ pokemon.stock > 0 ? "Buy Pokemon" : "Out Of Stock" }}
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        where: this.$route.params.where
      }
    },
    mounted () {
      if (this.trainer.nickname.length < 1) this.getOut()
    },
    computed: {
      ...mapGetters({
        trainer: 'trainerData',
        shops: 'shopsPokemons',
        pokemons: 'myPokemons'
      }),
      pokemon () {
        let id = parseInt(this.$route.params.id)
        if (this.where === 'pokedex') {
          return this.pokemons.find((p) => p.id === id) || {}
        } else {
          return this.shops.find((p) => p.id === id) || {}
        }
      }
    },
    watch: {
        pokemon.name: () => {
          console.log('watcher')
        }
      }
      }
    },
    methods: {
      ...mapActions([
        'getMyPokemons',
        'buyPokemon'
      ]),
      renderPokemon (pokemon) {
        return pokemon.name
      },
      getList () {
        console.log('entrou no getlist')
      }
      getOut () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
.product-item {
  margin: 10px 10px;
  width: 100%;
  height: 400px;
  border-bottom: 1px solid #aaa;
}

.back-link {
  font-size: 20px;
}

.product-title {
  text-align: center;
  margin: 0 auto;
  font-size: 26px;
}
.product-subtitle {
  padding: 7px 0;
  margin: 0px auto;
  font-size: 15px;
  border-bottom: 1px solid rgba(0,0,0,0.1)
}
.product-subtitle span {
  font-weight: 900;
}

.product-details {
  margin-top: 20px;
  display: flex;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.inventory {
  float: left;
  font-size: 20px;
  margin-top: 15px;
}
.add-button {
  cursor: pointer;
      transition: all .2s;
      border-width: 0px 0 4px 4px;
      width: auto;
      padding: 15px 10px;
      border-radius: 10px;
      text-transform: uppercase;
      outline: none;
      font-weight: 900;
      color: #fff;
      border-color: #a90c0c;
      border-style: solid;
      font-size: 12px;
      background: #fb0505;
}
.add-button:hover  {
    border-width: 0px 0 5px 5px;
    background: #ff3535;
}
.add-button:active {
  margin-top: 3px;
  margin-right: 3px;
    background: #d40101;
    border-width: 0px 0 2px 2px;

}

.add-button {
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

</style>
