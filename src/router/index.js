import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeTravel from '@/components/HomeTravel.vue'
import CategoryList from '@/components/CategoryList.vue'
import TravelerList from '@/components/TravelerList.vue'
import Destinations from '@/components/Destinations.vue'
import AddDestination from '@/components/AddDestination.vue'
import UpdateDestination from '@/components/UpdateDestination.vue'
import axios from 'axios'
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost:4000/api/'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeTravel
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoryList
  },
  {
    path: '/view',
    name: 'view',
    component: Destinations
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: TravelerList
  },
  {
    path: '/destinations',
    name: 'destinations',
    component: Destinations
  },
  {
    path: '/destinations/add',
    name: 'addDestination',
    component: AddDestination
  },
  {
    path: '/destinations/:id',
    name: 'updateDestination',
    component: UpdateDestination,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
