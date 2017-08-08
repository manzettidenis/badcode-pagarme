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
  name: 'app',
  mounted () {
  }
}

</script>

<style>
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  background: url('./assets/farm.png') center center /cover no-repeat;
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

}

.help-text {
  margin-top: 20px;
  font-size: 12px;
}
</style>
