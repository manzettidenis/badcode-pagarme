<template>
  <div v-if="pokemon" class="product-item">
    <router-link to="/shop" class="back-link">BACK</router-link>
    <form v-on:submit="buyPokemon({pokemon:pokemonTemp, trainer:trainer})">

    <div class="image" v-bind:class="renderPokemon(pokemonTemp)"></div>
    <div class="product-title">{{ pokemonTemp.name }}</div>
    <div class="product-subtitle">Nickname:
      <input v-if="$route.params.where === 'shop'" type="text" v-model="pokemonTemp.nickname" placeholder="Choose a nickname" class="pokemonNickname">
      <span v-if="$route.params.where === 'pokedex'" >{{pokemonTemp.nickname}}</span>
    </div>
    <div class="product-subtitle">Level: <span>{{ pokemonTemp.level }}</span></div>
    <div class="product-subtitle">gender: <span>{{ pokemonTemp.gender }}</span></div>
    <div class="product-subtitle">Price: <span>${{ pokemonTemp.price }}</span></div>
    <div class="product-details">
      <div class="inventory">In Stock: {{ pokemonTemp.stock }}</div>
      <button v-bind:disabled=" this.buyButton === false" type="submit" class="add-button" v-if="this.$route.params.where === 'shop'">
        {{ pokemonTemp.stock > 0 ? "Buy Pokemon" : "Out Of Stock" }}
      </button>
    </div>
  </form>
  <div class="paymentMessages" v-bind:class="{show: this.payment !== 'stand-by'}">
    <div v-bind:class="{show: this.payment === 'processing'}">
      <p>
        Processing payment
      </p>
    </div>
    <div v-bind:class="{show: this.payment === 'refused' }">
      <p class="refused">
        Payment refused.
      </p>
      <button class="add-button leave" v-on:click="getOutToRegister()">Leave</button>
    </div>
  </div>

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        pokemonTemp: {},
        buyButton: false
      }
    },
    watch: {
      isBought: function () {
        return this.$router.push('/shop')
      },
      'pokemonTemp.nickname': function () {
        if (this.pokemonTemp.nickname.length < 3) {
          this.buyButton = false
          return this.buyButton
        } else {
          this.buyButton = true
          return this.buyButton
        }
      }
    },
    mounted () {
      if (this.trainer.id === '') this.getOut()
      this.getList()
      this.paymentStatus = this.payment
      this.pokemonTemp = this.pokemon
      this.pokemonTemp.trainerID = this.trainer.id
      if (this.$route.params.where === 'shop') {
        this.pokemonTemp.nickname = ''
      }
    },
    computed: {
      ...mapGetters({
        trainer: 'trainerData',
        shops: 'shopsPokemons',
        pokemon: 'detailsOfPokemon',
        isBought: 'itsWasBought',
        payment: 'paymentStatus'
      })
    },
    methods: {
      ...mapActions([
        'getMyPokemons',
        'buyPokemon',
        'getDetailPokemons'
      ]),
      renderPokemon (pokemon) {
        return pokemon.name
      },
      getOutToRegister () {
        location.reload()
      },
      getList () {
        let data = {
          id: parseInt(this.$route.params.id),
          where: this.$route.params.where
        }
        this.getDetailPokemons(data)
      },
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
.paymentMessages p {
  font-weight: 500;
  font-size: 1.2rem;
}
.paymentMessages p.refused {
  color: red;
  font-weight: 900;
}
.paymentMessages.show {
  display: flex!important
}
.paymentMessages.show div.show {
  display: flex!important
}

.paymentMessages div {
  display: none;
}
.paymentMessages div {
  display: none;
  width: 100%;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.paymentMessages {
  display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.62);
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
