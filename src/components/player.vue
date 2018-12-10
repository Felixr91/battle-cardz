<template>
  <div class="">
    <div class="row">
      <div class="col">
        <!-- player is referring to the computed method -->
        <h4>Player Name:{{game.player.name}}</h4>
      </div>
    </div>
    <div class="row mt-5 justify-content-around">
      <!-- <div class="col-2" v-for=(c,hand) in opponenet.hand></div> -->
      <!-- {{player.hand[0]}} -->
      <!-- <div v-for="card in player.hand">
        <p>{{card.name}}</p>
      </div> -->
      <div class="card" v-for="card in game.player.hand" style="width: 12rem;">
        <div class="card-body playercard">
          <h6 class="card-title">{{card.name}}</h6>
          <h6 class="card-image"><img class="image-size" :src="card.img" alt=""></h6>
          <div class="d-flex justify-content-around">
            <p class="card-text"><i class="fas fa-heart"></i> : {{card.health}}</p>
            <p class="card-text"><i class="fas fa-fist-raised"></i> : {{card.attack}}</p>
            <p class="card-text"> <i class="fas fa-shield-alt"></i> : {{card.defense}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {

      }
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {

    }
  }

</script>

<style>
  .image-size {
    height: 100px;
    width: auto
  }

  .playercard {
    background-color: aquamarine;
  }
</style>