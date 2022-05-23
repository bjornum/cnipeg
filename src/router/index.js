import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Partners from '../views/Partner.vue'
import TrainingModules from '../views/TrainingModules.vue'
import Resources from '../views/Resources.vue'
import RSSfeed from '../views/RssFeed.vue'

// Testing Pages
import TestingPage from '../views/Testing.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/partners', name: 'Partner', component: Partners },
  { path: '/news', name: 'News', component: News },
  { path: '/trainingmodules', name: 'TrainingModules', component: TrainingModules },
  { path: '/resources', name: 'Resources', component: Resources },
  { path: '/rss', name: 'RSS', component: RSSfeed },
  { path: '/test', name: 'Test', component: TestingPage },
  { path: '/profile', name: 'Profile', component: Profile },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
