import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import generalinformation from '../views/generalinformation.vue'
import keynoteProgrammes from '../views/keynoteProgrammes.vue'
import posterSessions from '../views/posterSessions.vue'
import registration from '../views/registration.vue'
import sponsorship from '../views/sponsorship.vue'
import submission from '../views/submission.vue'
import technicalSubForums from '../views/technicalSubForums.vue'
import venue from '../views/venue.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/generalinformation',
      name: 'generalinformation',
      component: generalinformation,
    },
        {
      path: '/keynoteProgrammes',
      name: 'keynoteProgrammes',
      component: keynoteProgrammes,
    },
        {
      path: '/posterSessions',
      name: 'posterSessions',
      component: posterSessions,
    },
        {
      path: '/sponsorship',
      name: 'sponsorship',
      component: sponsorship,
    },
        {
      path: '/submission',
      name: 'submission',
      component: submission,
    },
        {
      path: '/technicalSubForums',
      name: 'technicalSubForums',
      component: technicalSubForums,
    },
            {
      path: '/registration',
      name: 'registration',
      component: registration,
    },
            {
      path: '/venue',
      name: 'venue',
      component: venue,
    },
  
  ],
})

export default router
