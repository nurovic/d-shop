import { createStore } from 'vuex'
import product from './ProductStore'

const store = createStore({
  state: {product: product.state},
  actions: {},
  mutations:{},
  getters:{},
  modules: {
    product
  },
})

export default store;