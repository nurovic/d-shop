import { createStore } from 'vuex'
import product from './ProductStore'
import orderCard from './OrderCardStore'

const store = createStore({
  state: {
    product: product.state,
    orderCard: orderCard.state
  },
  actions: {},
  mutations:{},
  getters:{
    hello(state) {
      return "hi"
},
  },
  modules: {
    product,
    orderCard
  },
})

export default store;