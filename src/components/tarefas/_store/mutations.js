export default {
    listarTarefas(state, tarefas) {
        state.tarefas = tarefas
    },
    selecionarParaEdicao(state, tarefa) {
        state.tarefaLocal = tarefa
    },
    tarefaLocalIndefinida(state) {
        state.tarefaLocal = []
    },
    criacao(state, tarefa){
        state.tarefas.push(tarefa)
    },
    edicao(state, tarefa) {
        const indice = state.tarefas.findIndex(t => t.id === tarefa.id);
        state.tarefas.splice(indice, 1, tarefa);
    },
    delecao(state, tarefa) {
        const indice = state.tarefas.findIndex(t => t.id === tarefa.id);
        state.tarefas.splice(indice, 1);
    }

}