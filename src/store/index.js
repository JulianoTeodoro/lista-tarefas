import Vuex from 'vuex'
import Vue from 'vue'
import tarefa from '@/components/tarefas/_store/index'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        tarefa
    }
})

