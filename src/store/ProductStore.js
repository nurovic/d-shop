import axios from 'axios'
import {useToast} from 'vue-toast-notification';
const toast = useToast()

export default {
    namespaced: true,
    state: {
        productList : []
    },
    mutations: {
        GET_ALL_PRODUCTS: function (state, payload) {
            state.productList = payload;
        },

    },
    actions: {
        incrementCounter: async function  ({commit}) {
            const res = await axios.get("https://frontend.dvebdemo.com.tr/fakeapi/index.php?products=all")
            console.log(res)
            toast.success('You did it!', {
                position: 'top-right'
            });
        },
         async getPeoducts  ({commit}) {
            const res = await axios.get("https://frontend.dvebdemo.com.tr/fakeapi/index.php?products=all")
            return commit("GET_ALL_PRODUCTS", res.data);
        },
        incrementCounterBy: function ({commit}, payload) {
            return commit("INCR_COUNTER_BY", payload);
        },
    }
}