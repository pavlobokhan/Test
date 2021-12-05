import List from '@/pages/List'
import Price from '@/pages/Price'

export default [
  {
    path: '/',
    name: 'list',
    component: List,
    meta: {
      layout: 'Default',
    }
  },
  {
    path: '/price',
    name: 'price',
    component: Price,
    meta: {
      layout: 'Default',
    }
  }
]
