<style>

</style>

<template>

  <form id="loginForm" action="index.html" method="post">
      <label for="nickname" >Welcome to Poke Far.me</label>
      <input type="text" name="nickname" v-model="trainer.nickname"  placeholder="Your nick">
      <input type="text" name="name" v-model="trainer.name" placeholder="Your name">
      <input type="text" name="lastname" v-model="trainer.lastname" placeholder="Your lastname">
      <button type="button" v-on:click="pager('secondStep', trainer)" name="button">Next</button>
  </form>

</template>

<script>

export default {
    name: 'loginForm',
    methods: {
      pager(arg, data) {
          return this.$parent.Pager(arg, data);
      }
    },
    data() {
        return {
          trainer: {}
        }
    }
}

</script>
