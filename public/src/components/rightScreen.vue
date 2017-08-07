<style scoped>

#rightScreen {
    overflow: hidden;
    width: 315px;
    height: 454px;
    background: #60607b;
    position: absolute;
    right: 86px;
    top: 214px;
    border-radius: 10px;
}

.controllers {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 5%;
}

#rightScreen button:hover {
    opacity: 1;
}

#rightScreen button {
    cursor: pointer;
    transition: all .5s;
    width: auto;
    height: 50px;
    padding: 0 10px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
    opacity: .7;
}

.createButton {
    background: #ed7f15
}

.buyButton {
    background: #3f3f55
}

.rightNavbar {
    border-bottom: 1px solid yellow;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 45px;
}

.rightNavbar ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 90%;
    align-items: center;
    color: yellow;
    padding: 0 5%;
    justify-content: space-between;
}

.list {
    margin-top: 60px;
}

.list h2 {
    text-align: center;
    color: #fff;
}

.list span {
    font-size: .8rem;
}

.list span > span {
    font-size: 1rem;
    display: flex;
    margin-top: 5px;
    align-items: flex-start;
    ;
    justify-content: space-between;
    flex-direction: column;
    width: auto;
}

.list span > span.genre {
    font: 900 2rem/1rem 'Arial';
}

.list span > span.nickname {
    font: 100 1rem 'Arial';
    font-style: italic;
}

.list ul {
    list-style: none;
    padding: 0;
}

.list ul li:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1)
}

.list ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    ;
    justify-content: space-between;
    padding: 15px 10px;
    font-weight: 900;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

</style>

<template>

<div id="rightScreen">
    <div class="rightNavbar">
        <ul>
            <li>Money: $1.000</li>
            <li>Pokemons: 3</li>
        </ul>
    </div>
    <div class="list">
        <h2>Trainer's Pokemons</h2>
        <ul>
            <li>
                <span>Pikachu <span class="nickname">Mal de choke</span></span>
                <span>Genre:<span class="genre">♂</span></span>
                <span>Level: <span>23</span></span>
            </li>
        </ul>
    </div>
    <div class="controllers">
        <button class="createButton" type="button" name="button">Buy Pokemon</button>
        <button class="buyButton" type="button" name="button">Create Pokemon</button>
    </div>

</div>

</template>

<script>

export default {
    name: 'rightScreen',
    methods : {
      up(arg) {
        this.$parent.updateTrainerInfo(arg)
      },
      data() {
        return {
          pokemons: [
            {
              name: "Pikachua",
              nickname: "MataRayo",
              genre: "male",
              level: 1,
              price: 450
            }
          ]
        }
      }
    }
}

</script>
