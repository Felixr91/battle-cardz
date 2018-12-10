import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let gameApi = axios.create({
  baseURL: "https://battlecardz.herokuapp.com/api/",
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    // activeCards: {
    //   opponentCardId: "",
    //   playerCardId: ""
    // },
    opponentCardId: '',
    playerCardId: '',
  },
  mutations: {
    CREATEGAME(state, game) {
      state.game = game
    },
    activeOpp(state, id) {
      console.log('opp mutation')
      // state.activeCards.opponentCardId = id
      state.opponentCardId = id
      // Vue.set(state.activeCards, 'opponentCardId', id)
    },
    activePlayer(state, id) {
      console.log('player mutation')
      state.playerCardId = id
    }
  },

  actions: {
    getGame({ commit }, game) {
      gameApi.post("games", game)
        .then(res => {
          console.log(res.data.game)
          commit('CREATEGAME', res.data.game)
          router.push({ name: 'battle', params: { gameId: res.data.game.id } })
        })
        .catch(err => {
          console.log("Unable to create game")
        })
    },
    getGameById({ commit }, gameId) {
      gameApi.get("games/" + gameId)
        .then(res => {
          console.log("look at this", res.data.data)
          commit("CREATEGAME", res.data.data)
        })
    },
    setActiveOpponent({ commit }, id) {
      commit("activeOpp", id)
    },
    setActivePlayerCard({ commit }, id) {
      commit("activePlayer", id)
    },
    attack({ commit }, payload) {
      gameApi.put("games/" + payload.gameId, payload.attackObject)
        .then(res => {
          commit("CREATEGAME", res.data.game)
        })
    }
  }
})
