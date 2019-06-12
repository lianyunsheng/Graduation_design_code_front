import Home from '@/views/Home.vue'
import homePage from '@/views/homePage/homePage.vue'
import aboutMe from '@/views/aboutMe/aboutMe.vue'
import connectUs from '@/views/connectUs/connectUs.vue'
import joinUs_social from '@/views/joinUs/social.vue'
import joinUs_school from '@/views/joinUs/school.vue'
import newsCenter from '@/views/newsCenter/newsCenter.vue'
import productsCenter from '@/views/productsCenter/productsCenter.vue'
export default [
  {
    path: '/',
    name: 'home',
    redirect:{name:'homePage'},
    component: Home,
    children:[
      {
        path:'homePage',
        name:'homePage',
        component:homePage
      },
      {
        path:'aboutMe',
        name:'aboutMe',
        component:aboutMe
      },
      {
        path:'connectUs',
        name:'connectUs',
        component:connectUs
      },
      {
        path:'joinUs_social',
        name:'joinUs_social',
        component:joinUs_social
      },
      {
        path:'joinUs_school',
        name:'joinUs_school',
        component:joinUs_school
      },
      {
        path:'newsCenter',
        name:'newsCenter',
        component:newsCenter
      },
      {
        path:'productsCenter',
        name:'productsCenter',
        component:productsCenter
      },
    ]
  },
]