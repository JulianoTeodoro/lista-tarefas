import axios from '@/axios'

export default {
    listarTarefas: async({commit}) => {
        setTimeout(() => {
            const tarefas = axios.get(`/tarefas`).then(response => {
                console.log(response.data);
                commit("listarTarefas", response.data);

            })
            return tarefas;
        }, 1000)
    },

    criarTarefas: (state, tarefa) => {
        console.log(tarefa);
        axios.request({
            method: 'post',
            url: `/tarefas`,
            data: tarefa
        }).then(response => {
            console.log(response)
            state.tarefas.push(response.data)
        })
    },

    editarTarefas: (state, tarefa) => {
        axios.request({
            method: 'put',
            url: `/tarefas/${tarefa.id}`,
            data: tarefa
        }).then((response) => {
            console.log(response);
            const indice = state.tarefas.findIndex(t => t.id === tarefa.id);
            state.tarefas.splice(indice, 1, tarefa);
        })
    
    }

}