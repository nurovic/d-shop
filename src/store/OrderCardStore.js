import axios from 'axios'
import {useToast} from 'vue-toast-notification';
const toast = useToast()
const OrderCardLocal = JSON.parse(localStorage.getItem("orderCard"))
export default {
    namespaced: true,
    state: {
        orderCardList: localStorage.getItem("orderCard") ? JSON.parse(localStorage.getItem("orderCard")) : [],
        totalPrice: {
            price: 0,
            productLength: 0
        }
    },
    mutations: {
        ADD_TO_CARD (state, payload) {
            const checkItem = state.orderCardList.some(x =>( x.id == payload.id))
            if(!checkItem){
                const obj = {...payload, count: 1}
                state.orderCardList.push(obj);
                localStorage.setItem("orderCard", JSON.stringify(state.orderCardList))
                toast.success('Ürün Sepete Eklendi', {
                    position:'top-right'
                })

            }else {
                const index = state.orderCardList.findIndex(x =>( x.id == payload.id))
                state.orderCardList[index].count += 1
                toast.success(`Ürünün Sepetteki Adedi ${state.orderCardList[index].count} oldu`, {
                    position:'top-right'
                })
                localStorage.setItem("orderCard", JSON.stringify(state.orderCardList))
            }
        },
        HANDLE_PIECE(state, payload){
            const product =  state.orderCardList?.find(x =>( x.id == payload.productId))
            payload.state === 1 ? product.count += 1 : product.count -= 1 
            if(product.count == 0 ){
                const index = state.orderCardList?.findIndex((val) => val.id === payload.productId)
                state.orderCardList?.splice(index, 1)
                toast.info("Ürün Sepetten Kaldırıldı.", {
                    position:'top-right'
                })
            } 
            localStorage.setItem("orderCard", JSON.stringify(state.orderCardList))
        },
        CLEAR_ORDER_CARD(state){
            localStorage.clear();
            toast.success("Siparişiniz Onaylanmıştır.", {
                position:'top-right'
            })
            state.orderCardList = []
        }
    },
    actions: {},
    getters: {
        getOrderCardCal(state) {
            let total = 0
                for (let i = 0; i < state.orderCardList.length; i++) {
                    const urun = state.orderCardList[i];
                    total += urun.price * urun.count;
                }
                state.totalPrice.productLength = state.orderCardList.length;
                state.totalPrice.price = total
                return state.totalPrice
        },
    }
}