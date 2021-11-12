type State = {
  showSidebar: boolean
  showTaskbar: boolean
  showAgentbar: boolean
}

export const state = () => ({
  showSidebar: false,
  showTaskbar: false,
  showAgentbar: false,
})

export const mutations = {
  toggleSidebar(state: State) {
    state.showSidebar = !state.showSidebar
  },
  toggleTaskbar(state: State) {
    state.showTaskbar = !state.showTaskbar
  },
  toggleAgentbar(state: State) {
    state.showAgentbar = !state.showAgentbar
  },
}
