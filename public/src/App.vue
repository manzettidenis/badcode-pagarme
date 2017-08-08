<style>

body {
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
}

</style>

<template>

<div class="app">
    <div class="page">
        <router-view cenario=cenario></router-view>
        <div class="background"></div>
    </div>
    <div class="header">
        <nav-bar @display="showList"></nav-bar>
    </div>
</div>

</template>

<script>

import NavBar from '@/components/NavBar'
export default {
    data() {
        return {
            cenario: 'firstStep'
        }
    }
    components: {
            NavBar
        },
        methods: {
            changeCenario(arg) {
                this.cenario = arg
                this.$emit('cenarioHasChanged')
            }
            name: 'app'
        }

</script>
