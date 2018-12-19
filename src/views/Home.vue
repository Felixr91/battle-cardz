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
</style>