import axios from 'axios'

export const actions = {
  nuxtServerInit({ commit }) {
    return axios
      .get(`${process.env.API_DOMAIN}/wp-json/rest-api/v1/menu`)
      .then(({ data }) => {
        commit('menus/SET_MENUS', { data })
        return data
      })
  }
}
