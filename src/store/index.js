import { createStore } from 'vuex'
import axios from '@/plugin/axios'

export default createStore({

  state: {
    posts: [],
    price: [
      { id: 0, price: 3, date: '01-12-2021'},
      { id: 1, price: 24, date: '02-12-2021'},
      { id: 2, price: 45, date: '03-12-2021'},
      { id: 3, price: 32, date: '04-12-2021'},
      { id: 4, price: 62, date: '05-12-2021'},
      { id: 5, price: 23, date: '06-12-2021'},
      { id: 6, price: 75, date: '07-12-2021'},
      { id: 7, price: 74, date: '08-12-2021'},
      { id: 8, price: 24, date: '09-12-2021'},
      { id: 9, price: 63, date: '10-12-2021'},
      { id: 10, price: 92, date: '11-12-2021'},
      { id: 11, price: 13, date: '12-12-2021'},
      { id: 12, price: 54, date: '13-12-2021'},
      { id: 13, price: 35, date: '14-12-2021'},
      { id: 14, price: 52, date: '15-12-2021'},
      { id: 15, price: 13, date: '16-12-2021'},
      { id: 16, price: 63, date: '17-12-2021'},
      { id: 17, price: 62, date: '18-12-2021'},
      { id: 18, price: 21, date: '19-12-2021'},
      { id: 19, price: 41, date: '20-12-2021'},
    ]
  },

  getters: {
    posts: state => state.posts,
    price: state => state.price,
  },

  mutations: {
    setPosts: (data, state) => state.posts = data
  },

  actions: {
    fetchPosts({commit}) {
      return new Promise((resolve, reject) => {
        return axios.get('/posts')
          .then(res => {
            commit('setPosts', res)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    fetchPosts(id) {
      return new Promise((resolve, reject) => {
        return axios.get(`/posts/${id}`)
          .then(res => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
