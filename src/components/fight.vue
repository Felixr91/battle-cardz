<template>
  <div class="">
    <h1>Click to Attack!</h1>
    <button v-show="oppCardId && playerCardId" @click="attack">Attack!</button>
    <!-- <div class="row">
      <div class="col-12">
        <h1>Select Cards for Battle!</h1>
      </div>
    </div> -->
    <h1 v-if="gameOver()">Game Over!</h1>
  </div>
</template>

<script>
  export default {
    name: 'cardSelect',
    data() {
      return {

      }
    },
    computed: {
      oppCardId() {
        console.log('activeCards computed running')
        // return this.$store.state.activeCards
        return this.$store.state.opponentCardId
      },
      playerCardId() {
        return this.$store.state.playerCardId
      },
      gameId() {
        return this.$store.state.game.id
      },
      gameOver() {
        console.log(this.$store.state.game.over)
        return this.$store.state.game.over
      }
    },
    methods: {
      attack() {
        let payload = {
          gameId: this.gameId,
          // cards: this.activeCards
          attackObject: {
            playerCardId: this.playerCardId,//set this equal to the playerCardId,
            opponentCardId: this.oppCardId//set this equal to the opponentCardId
          }
        }
        this.$store.dispatch('attack', payload)
      }
    }
  }

</script>

<style>


</style>