<template>
<div class="shop">
  <h2>Welcome to Shop</h2>
  <div class="shoplist">
      <ul v-for="p in pokemons" >
        <router-link :to="{name: 'details', params: {where:'shop', name: p.name, id: p.id}}" class="title">
          <li>
              <span class="name">{{p.name}}</span>
              <span>gender:
                <span v-if="p.gender==='male'"class="gender">♂</span>
                <span v-if="p.gender==='female'"class="gender">♀</span>
              </span>
              <span>Level: <span>{{p.level}}</span></span>
              <span>Price: <span>${{p.price}}</span></span>
          </li>
        </router-link>

      </ul>
  </div>
</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    mounted () {
      if (this.trainer.id === '') this.getOut()
    },
    watch: {
      isRegistered: function () {
        return this.$router.push('/shop')
      }
    },
    computed: {
      ...mapGetters({
        pokemons: 'shopsPokemons',
        trainer: 'trainerData',
        isRegistered: 'itWasRegistered'
      })
    },
    methods: {
      ...mapActions([
        'buyPokemon'
      ]),
      getOut () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>

.shoplist {
  text-decoration: none;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 356px;
  width: 105%;

}

.shop h2 {
  font-weight: 900;
  text-transform: uppercase;
  margin: 10px 0 15px;
  color: #3e3ec2;
  text-align: center;
  padding: 10px 0;
  font-size: 23px;
  border-bottom: 6px solid #d1a90c;
  border-top: 6px solid #d1a90c;
}

.shoplist span {
    font-size: .8rem;
}
.shoplist span.name {
  font-size: 1.1rem
}

.shoplist span > span {
    font-size: 1rem;
    display: flex;
    margin-top: 5px;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: auto;
}

.shoplist span > span.gender {
    font: 900 2rem/1rem 'Arial';
}

.shoplist span > span.nickname {
    font: 100 1rem 'Arial';
    font-style: italic;
}

.shoplist ul {
    list-style: none;
    padding: 0;
}

.shoplist ul li:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1)
}

.shoplist ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    font-weight: 900;
    color: #333;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

</style>
