import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"Home",
      component:()=>import('../views/Home.vue')
    },
    {
      path:"/driverReg",
      name:"driverReg",
      component:()=>import('../views/driverReg.vue')
    },
    {
      path:"/policeReg",
      name:"policeReg",
      component:()=>import('../views/policeReg.vue')
    },
    {
      path:"/signIn",
      name:"signIn",
      component:()=>import('../views/signin.vue')
    }
  ]
})

export default router
