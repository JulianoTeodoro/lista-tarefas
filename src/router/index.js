import Vue from 'vue'
import VueRouter from 'vue-router'
import TarefasVue from '@/components/TarefasVue.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: TarefasVue
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router