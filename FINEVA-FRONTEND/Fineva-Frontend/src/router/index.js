import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"Home",
      component:()=>import('../components/Home.vue')
    },
    {
      path:"/driverReg",
      name:"driverReg",
      component:()=>import('../components/driverReg.vue')
    },
    {
      path:"/policeReg",
      name:"policeReg",
      component:()=>import('../components/policeReg.vue')
    },
    {
      path:"/signIn",
      name:"signIn",
      component:()=>import('../components/signin.vue')
    }
  ]
})

export default router
