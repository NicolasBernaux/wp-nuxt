import axios from 'axios'

const singles = {}

export default {
  async setSingle({ commit }, path) {
    if (singles[path]) {
      return singles[path]
    }

    try {
      const response = await axios.get(
        `${process.env.API_DOMAIN}/wp-json/rest-api/v1/slug/${path}`
      )
      singles[path] = response.data
      commit('ADD_SINGLE', { path, data: singles[path] })
    } catch (error) {
      return { error }
    }
  }
}
