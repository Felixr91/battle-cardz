<template>
  <div class="">
    <div class="row">
      <div class="col">
        <!-- opponent is referring to the computed method -->
        <h4>Opponent Name:{{game.opponent.name}}</h4>
      </div>
    </div>

    <div>
      <div class="row mt-5 justify-content-around">
        <div @click=" setActiveCard(card.id)" class="card" v-if="activeOppCard" v-for="card in game.opponent.hand" :key="card.id"
          style="width: 12rem;" :class="setBorder(card.id)">
          <!-- v-if for when active player show card -->
          <img src="../assets/gamecard.png" class="fill" alt="" v-if="!card.visible">

          <div class="card-body oppcard border rounded m-2 " v-else>
            <!-- v-else above -->
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


  </div>
</template>

<script>
  export default {
    name: 'opponent',
    data() {
      return {
        activeOppCard: {
          id: -1,
          selected: false
        },
        bordercolor: '3px'
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      setBorder(id) {
        if (id == this.activeCardId) {
          return "active-card";
        }
      },
      setActiveCard(id) {
        this.$store.dispatch("setActiveOpponent", id);
      }
    }
  }

</script>

<style>
  .image-size {
    height: 100px;
    width: auto
  }

  .oppcard {
    background-color: mediumvioletred;
  }

  .redborder {
    border-style: solid;
    border-color: red;
  }

  .active-card {
    outline: 4px solid green;
  }

  .fill {
    height: 300px;
    width: auto
  }
</style>