<template>
  <div class="">
    <p v-show="oppCardId && playerCardId">Click to Attack!</p>
    <button v-show="oppCardId && playerCardId" @click="attack">Attack!</button>
    <!-- <div class="row">
      <div class="col-12">
        <h1>Select Cards for Battle!</h1>
      </div>
    </div> -->
    <h1 v-if="gameStatus">Game Over!</h1>
    <!-- <h1 v-if="winner==playerName">You Win!</h1>
    <h1 v-if="winner==oppName">You Lose!</h1> -->
    <h1 v-if="winner">{{winner}} wins!</h1>

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
        console.log('this.$store.state.opponentCardId')
        // return this.$store.state.activeCards
        return this.$store.state.opponentCardId
      },
      playerCardId() {
        return this.$store.state.playerCardId
      },
      // playerName() {
      //   this.$store.state.game.player.name
      // },
      // oppName() {
      //   this.$store.state.game.opponenet.name
      // },

      gameId() {
        return this.$store.state.game.id
      },
      winner() {
        console.log(this.$store.state.game.winner)
        return this.$store.state.game.winner
      },
      gameStatus() {
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