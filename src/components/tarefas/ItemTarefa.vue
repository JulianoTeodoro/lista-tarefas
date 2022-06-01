<template>
    <li class="list-group-item">
        <span>{{tarefa.nome}}</span>
        <span class="espacar"></span>
        <button class="btn btn-primary" @click="$emit('editar', tarefa)">
            <i class="bi bi-pencil-fill"></i>
        </button>
        <button class="btn btn-danger" @click="$emit('deletar', tarefa)">
            <i class="bi bi-trash-fill"></i>
        </button>
        <button :class="concluido" @click.prevent="$emit('concluir', tarefa)">
            <i class="bi bi-check2"></i>
        </button>

    </li>
</template>

<script>
export default {
    props: {
        tarefa: {
            type: Object,
            required: true
        }
    },
    computed: {
        concluido() {
            return this.tarefa.concluido ? 'btn btn-success' : 'btn btn-outline-success'
        }
    }
}
</script>

<style scoped>

    .list-group-item{
        margin: 10px solid black;
        justify-content: center;
        align-content: center;
        
    }
     .espacar{
     flex: 1 1 auto;
    }

    button{
        float: right;
    }


</style>