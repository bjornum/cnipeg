import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage/Home.vue'
import About from '../views/AboutPage/About.vue'
import News from '../views/NewsPage/News.vue'
import Partners from '../views/PartnerPage/Partner.vue'
import TrainingModules from '../views/TrainingModulePage/TrainingModules.vue'
import DigitalLearningDesign from '../views/DigitalLearningPage/DigitalLearningDesign.vue'
import DigitalPedagogicalStrategy from '../views/DigitalPedagogPage/DigitalPedagogicalStrategy.vue'
import Resources from '../views/RessourcePage/Resources.vue'
import RSSfeed from '../views/RssPage/RssFeed.vue'

// Testing Pages
// import ResourcesSMAB from '../views/RessourcePage/SmabResources.vue'
import HomeEntrepreneurshipSystem from '../views/HomePage/EntrepreneurSystemHome.vue'
import TheBoard from '../views/TheBoardPage/TheBoard.vue'
import TestingPage from '../views/TestingPage/Testing.vue'
import Profile from '../views/ProfilePage/Profile.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/partners', name: 'Partner', component: Partners },
  { path: '/news', name: 'News', component: News },
  { path: '/trainingmodules', name: 'TrainingModules', component: TrainingModules },
  { path: '/digitallearningdesign', name: 'DigitalLearningDesign', component: DigitalLearningDesign },
  { path: '/digitalpedagogicalstrategy', name: 'DigitalPedagogicalStrategy', component: DigitalPedagogicalStrategy },
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
