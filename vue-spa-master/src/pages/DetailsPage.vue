<template>
  <div class="product-item">
    <router-link to="/" class="back-link">BACK</router-link>
    <div class="product-title">{{ pokemon.name }}</div>
    <div class="image">

    </div>
    <div class="product-details">
      <div class="inventory">In Stock: {{ pokemon.stock }}</div>
      <button class="add-button"
        :disabled="!pokemon.inventory"
        @click="addToCart(product)">{{ pokemon.stock > 0 ? "Add to cart" : "Out Of Stock" }}
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    mounted () {
      this.getAllPokemons()
    },
    computed: {
      ...mapGetters([
        'allPokemons'
      ]),
      pokemon () {
        let id = parseInt(this.$route.params.id)
        return this.allPokemons.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllPokemons',
        'addToCart'
      ])
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
  padding-top: 120px;
  text-align: center;
  margin: 0 auto;
  font-size: 26px;
}

.product-details {
  margin-top: 120px;
}

.inventory {
  float: left;
  font-size: 20px;
  margin-top: 15px;
}
.add-button {
  float: right;
  width: 140px;
  height: 50px;
}
</style>
