<template>
    <div>
        <button class="btn btn-primary" @click="exibirFormularioCriar">
            <i class="bi bi-plus mr-2"></i>
            <span>Criar</span>
        </button>

        <ul class="list-group">
            <ItemTarefaVue v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa" @concluir="concluirTarefa" @editar="selecionarTarefaParaEdicao" @deletar="deletarTarefa"/>
        </ul>

    <salvar-tarefa-vue
     v-if="exibirFormulario"
     :tarefa="tarefaSelecionada"
     @criar="criarTarefa"
     @editar="editarTarefa" />

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ItemTarefaVue from './ItemTarefa.vue'
import SalvarTarefaVue from './SalvarTarefa.vue'
export default {
    data(){
        return {
            exibirFormulario: false,
            tarefaSelecionada: undefined
        }
    },
    components: {
        ItemTarefaVue,
        SalvarTarefaVue
    },
    created(){
        this.listarTarefas();
    },
    computed: {
        ...mapState('tarefa', ['tarefas']),
        ...mapState('tarefa', ['tarefaLocal'])
    },
    methods: {
        ...mapActions('tarefa', ['listarTarefas']),
        exibirFormularioCriar(){
            this.exibirFormulario = !this.exibirFormulario
            if(this.tarefaSelecionada || this.tarefaLocal) {
                this.tarefaSelecionada = undefined
                this.$store.commit('tarefa/tarefaLocalIndefinida')
                return
            }
        },
        resetar(){
            this.exibirFormulario = false,
            this.$store.commit('tarefa/tarefaLocalIndefinida')
            this.tarefaSelecionada = undefined
        },

        selecionarTarefaParaEdicao(tarefa) {
            this.$store.commit('tarefa/selecionarParaEdicao', tarefa)
            this.tarefaSelecionada = tarefa
            this.exibirFormulario = true
        },
        
        criarTarefa(tarefa) {
            this.$store.dispatch('tarefa/criarTarefas', tarefa)
            this.resetar()
        },
        editarTarefa(tarefa){
            this.$store.dispatch('tarefa/editarTarefas', tarefa)
            this.resetar()
        },
        deletarTarefa(tarefa){
            this.$store.dispatch('tarefa/deletarTarefas', tarefa)
            this.resetar()
        },
        concluirTarefa(tarefa){
            this.$store.dispatch('tarefa/concluirTarefas', tarefa)
        }
    }
}
</script>

<style scoped>
    .list-group {
        width: 100%;
    }
    .container {

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

</style>