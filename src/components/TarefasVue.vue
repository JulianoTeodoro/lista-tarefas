<template>
    <div class="container">
        <h1 class="h11 text-black text-xl-center font-weight-light">Lista de tarefas</h1>
            <ListaTarefasVue/>

    </div>
</template>

<script>
import ListaTarefasVue from './tarefas/ListaTarefas.vue'
export default {
    components: {
        ListaTarefasVue
    }
}
</script>

<style scoped>

    .h11{
        padding: 50px 0px 0px 0px;
    }
    .container {

        justify-content: center;
        align-items: center;
}


</style>