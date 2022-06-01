import actions from "./actions"
import mutations from "./mutations"

const state = {
    tarefaLocal: [],
    tarefas: []    

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}