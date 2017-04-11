import MainView from 'views/MainView/MainView'
import FooView from 'views/FooView'
import BarView from 'views/BarView'

export default [
  {
    path: '/',
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
