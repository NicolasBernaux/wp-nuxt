export default {
  getSingles: (state) => {
    return state.singles
  },
  getSingleByPath: (state) => (path) => {
    return state.singles[path]
  }
}
