import IndexView from 'views/IndexView/IndexView'
import MainView from 'views/MainView/MainView'
import FooView from 'views/FooView'
import BarView from 'views/BarView'

export default [
  {
    path: '/',
    component: IndexView,
    childRoutes: [
      {
        path: '/home',
        component: MainView,
        childRoutes: [
         {
           path: '/foo',
           component: FooView
         },
         {
           path: '/bar',
           component: BarView
         }
       ]
      }
    ]
  }
]
