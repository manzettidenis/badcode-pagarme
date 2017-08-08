<template>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        pokemons: 'shopPokemons'
      }),
      checkoutStatus () {
        return this.$store.state.cart.lastCheckout
      },
      total () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      ...mapActions([
        'checkout'
      ])
    }
  }
</script>

<style>

.cart {
  width: 600px;
}
.checkout-table {
  width: 100%;
}

.checkout-table th {
  text-align: left;
  padding: 15px 0px;
  border-bottom: 1px solid #aaa;
}

.checkout-table td {
  padding: 8px 0px;
}

.checkout-button {
  float: right;
  width: 120px;
  height: 40px;
  margin-top: 20px;
}

.total td {
  border-top: 1px solid #aaa;
  padding-top: 10px;
}
</style>
