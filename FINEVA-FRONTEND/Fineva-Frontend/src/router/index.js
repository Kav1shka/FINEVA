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
      path:"/driverSignIn",
      name:"driverSignIn",
      component:()=>import('../views/driverSignIn.vue')
    },
    {
      path:"/policeSignIn",
      name:"policeSignIn",
      component:()=>import('../views/policeSignIn.vue')
    },
    {
      path:"/signIn",
      name:"signIn",
      component:()=>import('../views/signin.vue')
    }
  ]
})

export default router
