<style>

#login form {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-start;
}

#login form label {
    font-weight: 900;
    text-transform: uppercase;
    margin: 10px 0 30px;
    color: #3e3ec2;
    padding: 10px 0;
    font-size: 23px;
    border-bottom: 6px solid #d1a90c;
    border-top: 6px solid #d1a90c;
}

#login form input {
    font-weight: 900;
    text-transform: uppercase;
    margin: 10px 0 20px;
    font-size: 19px;
    color: #000;
    padding: 5px 10px;
    letter-spacing: 4px;
}

#login form button {
    background: #121266;
    border: none;
    width: 200px;
    cursor: pointer;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
    padding: 20px;
    font-size: 21px;
    margin-top: 21px;
}

</style>

<template>

<div id="login">

    <loginForm v-if="this.cenario === 'firstStep'"></loginForm>
    <creditCardForm v-if="this.cenario === 'secondStep'"></creditCardForm>
    <choosePokemon v-if="this.cenario === 'thirdStep'"></choosePokemon>
</div>

</template>

<script>

import loginForm from './loginForm.vue';
import creditCardForm from './creditCardForm.vue';
import choosePokemon from './choosePokemon.vue';

export default {
    name: 'login',
    components: {
        loginForm,
        creditCardForm,
        choosePokemon,
    },
    methods: {
        Pager(arg) {
          this.cenario = arg;
          console.log(this.cenario)
        }

    },
    data() {
        return {
            page: 0,
            cenario: 'firstStep',
            home: false
        }
    }
}

</script>
