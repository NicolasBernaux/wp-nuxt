export default {
  SET_MENUS(state, { data }) {
    if (data) {
      state.menus = { ...state.menu, ...data }
    }
  }
}
