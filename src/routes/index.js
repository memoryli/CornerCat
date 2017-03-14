import MainView from 'views/MainView'
import FooView from 'views/FooView'
import BarView from 'views/BarView'
import PhotoView from 'views/PhotoView'
import TravelView from 'views/TravelView'

export default [
  {
    path: '/',
    component: MainView
  },
  {
    path: '/home',
    component: MainView,
    childRoutes: [
      {
        path: '/photo',
        component: PhotoView
      },
      {
        path: '/travel',
        component: TravelView
      }
    ]
  }
]
