import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/marca',
    name: 'Marca',
    component: () => import(/* webpackChunkName: "about" */ '../views/MarcaView.vue')

  },
  {
    path: '/marca-form/:id',
    name: 'Marca-Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/MarcaFormView.vue')

  },
  {
    path: '/carro',
    name: 'Carro',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarroView.vue')

  },
  {
    path: '/cor',
    name: 'Cor',
    component: () => import(/* webpackChunkName: "about" */ '../views/CorView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
