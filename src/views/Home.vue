<template>
  <div class="home">
    <!-- <img alt="" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Battle Cardz!</h1>
    <form @submit.prevent="getGame">
      <input type="text" v-model="gameConfig.playerName">
      <button type="submit">Play!</button>
    </form>
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