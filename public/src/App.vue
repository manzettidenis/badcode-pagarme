<template>
<div class="app">
  <div class="page">
    <router-view></router-view>
  </div>
  <div class="header">
    <nav-bar></nav-bar>
  </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  },
  name: 'app'
}

</script>

<style>
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  background: url('./assets/farm.png') center center /cover no-repeat;
}

.image {
  background: url(./assets/sprites.png);
  width: 160px;
  height: 140px;
  background-repeat: no-repeat;
  background-size: 640px;
  margin: auto;
}

.Pikachu {
  background-position: -150px -22px;
}
.Squirtle {
  background-position: -325px -23px;
}
.Charmander {
  background-position: -471px -23px;
}
.app {
  background: url(./assets/pokedex_dois.png) center center /contain no-repeat;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 1024px;
  height: 744px;
  margin: auto;
}

.header {
  border-bottom: 1px solid #b3b3b3;
  width: 331px;
  padding: 0;
  background: #f1f1f1;
  height: 475px;
  right: 78px;
  position: absolute;
  top: 225px;
  display: flex;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
}

.page {
  width: 359px;
  position: absolute;
  top: 207px;
  left: 74px;
  height: 420px;
  border-radius: 12px;
  background: #FFCC00;
  overflow: hidden;
}

.help-text {
  margin-top: 20px;
  font-size: 12px;
}


@media screen and (max-width: 1400px) {
.paymentMessages {
  height: 130%!important;
}
.list {
    padding-top: 90px;
    text-decoration: none;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 356px;
    width: 106%;
}
  .app {
    width: 824px;
  }
  .home form {
    font-size: 1.1rem!important;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .home form h2 {
    font-size: 1.1rem!important;
  }
  .home {
    height: 340px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 105%;
  }
  .page {
    width: 290px;
    position: absolute;
    top: 238px;
    left: 59px;
    height: 340px;
  }
  .header {
    width: 266px;
    height: 382px;
    overflow: hidden;
    right: 63px;
    top: 253px;
  }
}
</style>
