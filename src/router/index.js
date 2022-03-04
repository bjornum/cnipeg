import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Newss from '../views/News.vue'
import TrainingModules from '../views/TrainingModules.vue'
import DigitalLearningDesign from '../views/DigitalLearningDesign.vue'
import DigitalPedagogicalStrategy from '../views/DigitalPedagogicalStrategy.vue'
import Resources from '../views/Resources.vue'
import RSSfeed from '../views/RssFeed.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/news', name: 'News', component: Newss },
  { path: '/trainingmodules', name: 'TrainingModules', component: TrainingModules },
  { path: '/digitallearningdesign', name: 'DigitalLearningDesign', component: DigitalLearningDesign },
  { path: '/digitalpedagogicalstrategy', name: 'DigitalPedagogicalStrategy', component: DigitalPedagogicalStrategy },
  { path: '/resources', name: 'Resources', component: Resources },
  { path: '/rss', name: 'RSS', component: RSSfeed },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
