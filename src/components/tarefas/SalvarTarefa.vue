<template>
    <div class="container">
            <form @submit.prevent="salvar">
                <span>Escreva a tarefa a ser salva</span>
                <label for="nome" class="form-label"></label>
                <input type="text" name="nome" class="form-control form-control-sm" v-model="tarefaLocal.nome">
                <label>Tarefa Concluida?</label>
                <button class="btn btn-sm d-block" @click="tarefaLocal.concluido = !tarefaLocal.concluido">
                    <i class="bi bi-check"></i>
                </button>

                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
    </div>
</template>

<script>
export default {
    props: {
        tarefa: {
            type: Object
        }
    },    
    data(){
        return {
            tarefaLocal: Object.assign({}, {nome: '', concluido: false}, this.tarefa)
        }
    },
    methods: {
        salvar(){
            const operacao = !this.tarefa 
            ? 'criar'
            : 'editar'
            this.$emit(operacao, this.tarefaLocal)
            console.log(operacao)
        },

    }
}
</script>