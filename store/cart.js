import { createStore } from 'vuex'
import axios from 'axios'


export const state = () => ({
    brands: [],
    cartItems: [],
    totalQuantity: 0,
    totalDiscount: 0,
    totalPrice: 0,
    isCartPage: false
})

export const getters = {
    brands:(state) => state.brands,
    cartItems:(state) => state.cartItems,
    totalQuantity: (state) => state.totalQuantity,
    totalPrice: (state) => state.totalPrice,
    totalDiscount: (state) => state.totalDiscount,
    isCartPage: (state) => state.isCartPage,
}

export const mutations = {
    addToCart(state, product) {
        console.log('hi')
        const currentItem = state.cartItems.find((item) => item.id === product.id)

        if (currentItem) {
            currentItem.quantity++
        } else {
            state.cartItems.push({... product, quantity: 1})
        }
        state.totalPrice += product.newPrice
        state.totalDiscount += product.oldPrice - product.newPrice
        state.totalQuantity += 1
    },
    
    removeFromCart(state, product) {
        const currentItem = state.cartItems.find((item) => item.id === product.id)

        if (currentItem?.quantity > 1) {
            state.cartItems = state.cartItems.map((item) => {
                if (currentItem.id === item.id) {
                    return {...currentItem, quantity: currentItem?.quantity - 1}
                }
                return item
            })
            state.totalPrice -= currentItem.regular_price.value
            state.totalQuantity -= 1
        }
    },

    deleteFromCart(state, product) {
        state.cartItems = state.cartItems.filter((item) => item.id !== product.id)
        state.totalPrice -= product.newPrice * product.quantity
        state.totalDiscount -= (product.oldPrice - product.newPrice) * product.quantity
        state.totalQuantity -= product.quantity
    },

    setIsCartPage(state, isCartPage) {
        state.isCartPage = isCartPage
    }
}

export const actions = {
    async fetchBrands({ state }) {
        // const { data } = await axios.get('brands.json')
        // state.brands = data
    }
}
