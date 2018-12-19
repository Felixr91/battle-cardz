<template>
  <div class="home">
    <!-- <img alt="" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="row">
      <h1 class="title col-12 justify-content-center">Battle Cardz!</h1>
      <p class="titlesmall col-12 justify-content-center">Enter a name and click "Play!"</p>
    </div>
    <form @submit.prevent="getGame">
      <input type="text" v-model="gameConfig.playerName">
      <div class="mt-4">
        <button type="submit">Play!</button>
      </div>
    </form>
    <!-- <img src="/src/assets/robot.png" alt=""> -->
    <h4 class="mt-5 mb-2">How to play</h4>
    <p>Enter a name to begin. In game view, adversary cards are dealt face down
      and
      revealed once they have been attacked. To commence an attack, select an opponent card, then select one of your
      cards
      and click on the "FIGHT!" button, adn the two cards will attack each other simulatenously. The cards have health,
      attack
      and
      defense levels printed on them. Any incoming attack in excess of a card's defense value will decrement its
      health. Once
      a card reaches zero health, it is considered dead and removed from the game. Each player is dealt tens cards to
      start
      the game. The last player with cards remaining is the winner.</p>

    <p>This game was built during Week 6 of the Boise Codeworks Full-Stack Immersive Course. The purpose was to gain
      experience using Vue.js as a front-end framework. The application utilizes an API built by the Boise Codeworks
      faculty
      and hosted on Heroku. Graphics are downloaded from Robohash.org</p>
  </div>


</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    data() {
      return {
        gameConfig: {
          playerName: "",
          set: 1
        }
      }
    },
    components: {
      HelloWorld
    },
    methods: {
      getGame() {
        this.$store.dispatch('getGame', this.gameConfig)
      }
    }
  }
</script>

<style>
  .title {
    font-family: 'Major Mono Display', monospace;
    font-size: 80px;
    color: crimson;
  }

  .titlesmall {
    font-family: 'Major Mono Display', monospace;
  }

  body {
    background-color: rgb(251, 198, 133);
  }

  p {
    font-size: 1rem;
    padding-left: 30px;
    padding-right: 30px;

  }
</style>