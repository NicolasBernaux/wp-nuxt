export default {
  ADD_SINGLE(state, { path, data }) {
    state.singles[path] = data
  }
}
