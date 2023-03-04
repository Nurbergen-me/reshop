import axios from 'axios'


export const state = () => ({
    categories: [],
    catalog: {
        her: {
          id: 1,
          categories: [
            {
              id: 11,
              name: 'Популярные бренды',
              subCategories: []
            },
            {
              id: 12,
              name: 'Нижнее белье',
              subCategories: []
            },
          ]
        },
        his: {
          id: 2,
          categories: []
        }
      }
})

export const getters = {
    catalog:(state) => state.catalog,
    categories:(state) => state.categories,
    getCategoryData: (state) => (categoryId) => {
        console.log(categoryId)
        return state.catalog.her.categories[1].subCategories.find(item => item.id === Number(categoryId))
    }
}   

export const mutations = {
    setCategories(state, data) {
        state.catalog.her.categories[1].subCategories = data
    }
}   

export const actions = {
    getCategories({ commit }) {
        this.$api.get('categories/parents')
        .then(res => {
            commit('setCategories', res.data.response.categories)
        })
    }
}
