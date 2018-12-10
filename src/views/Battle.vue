<template>
  <div class="battle">
    <h2>Let's get ready to rumble!</h2>

    <opponent></opponent>
    <fight></fight>
    <player></player>


  </div>
</template>

<script>
  import opponent from '@/components/opponent.vue'
  import player from '@/components/player.vue'
  import fight from '@/components/fight.vue'

  export default {
    name: 'Battle',
    mounted() {
      this.$store.dispatch('getGameById', this.$route.params.gameId)
    },
    data() {
      return {

      }
    },
    components: {
      opponent,
      player,
      fight
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


</style>
d