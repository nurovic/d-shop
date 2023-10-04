import axios from 'axios'
import {useToast} from 'vue-toast-notification';
const toast = useToast()

export default {
    namespaced: true,
    state: {
        productList : [],
        productDetail: {},
        isLoading: true
    },
    mutations: {
        GET_ALL_PRODUCTS: function (state, payload) {
            state.productList = payload;
        },
        GET_PRODUCT_DETAIL: function (state, payload) {
            state.isLoading = true
            state.productDetail = payload;
            state.isLoading = false
        },

    },
    actions: {
        // incrementCounter: async function  ({commit}) {
        //     const res = await axios.get("https://frontend.dvebdemo.com.tr/fakeapi/index.php?products=all")
        //     console.log(res)
        //     toast.success('You did it!', {
        //         position: 'top-right'
        //     });
        // },
         async getProducts  ({commit}) {
            const res = await axios.get("https://frontend.dvebdemo.com.tr/fakeapi/index.php?products=all")
            return commit("GET_ALL_PRODUCTS", res.data);
        },
         async getProductDetail  ({commit}, payload) {
            const res = await axios.get(`https://frontend.dvebdemo.com.tr/fakeapi/index.php?product_id=${payload}`)
            return commit("GET_PRODUCT_DETAIL", res.data);
        }
    }
}