import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeMenu from '@/components/HomeMenu'
import AddUser from '@/components/AddUser'
import DialogBox from '@/components/DialogBox'
import TableData from '@/components/TableData'
import Login from '@/components/Login'
import Music from '@/components/Music'
import Menu from '@/components/Menu'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/dialogBox',
      name: 'DialogBox',
      component: DialogBox
    }
    ,{
      path: '/addUser',
      name: 'AddUser',
      component: AddUser
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
    ,{
      path: '/music',
      name: 'Music',
      component: Music
    }
    ,{
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
