export default {
    listarTarefas(state, tarefas) {
        state.tarefas = tarefas
    },
    selecionarParaEdicao(state, tarefa) {
        state.tarefaLocal = tarefa
    },
    tarefaLocalIndefinida(state) {
        state.tarefaLocal = []
    }

}