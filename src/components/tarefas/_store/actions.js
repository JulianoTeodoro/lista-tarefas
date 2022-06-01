import axios from '@/axios'

export default {
    listarTarefas: async({commit}) => {
        setTimeout(() => {
            axios.get(`/tarefas`).then(response => {
                console.log(response.data);
                commit("listarTarefas", response.data);

            })
        }, 1000)
    },

    criarTarefas: ({commit}, tarefa) => {
        console.log(tarefa);
        axios.request({
            method: 'post',
            url: `/tarefas`,
            data: tarefa
        }).then(response => {
            commit("criacao", response.data)
        })
    },

    editarTarefas: ({commit}, tarefa) => {
        axios.request({
            method: 'put',
            url: `/tarefas/${tarefa.id}`,
            data: tarefa
        }).then((response) => {
            commit("edicao", response.data)
        })
    
    },

    deletarTarefas: ({commit}, tarefa) => {
        const confirm = window.confirm(`Deseja apagar a tarefa: ${tarefa.nome}`)
        if(confirm) {
            axios.request({
                method: 'delete',
                url: `/tarefas/${tarefa.id}`,
                data: tarefa
            }).then(response => {
                commit("delecao", response.data)
                return
            })    
        }
        window.alert('Tarefa não removida');
    },
    concluirTarefas: ({commit}, tarefa) => {
        const conf = tarefa.concluido ? 'refazer' : 'concluir';
        const confirm = window.confirm(`Deseja ${conf} a tarefa? ${tarefa.nome}`)
        if(confirm) {
            tarefa.concluido = !tarefa.concluido
            axios.request({
                method: 'put',
                url: `/tarefas/${tarefa.id}`,
                data: tarefa
            }).then(response => {
                commit("edicao", response.data)
            })
        }
    }

}