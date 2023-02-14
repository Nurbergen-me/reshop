<template>
  <section class="recommend">
    <div class="container">
        <div class="recommend__tabs">
        <div class="recommend__tab bold" :class="{'active': recommends.currentTab === 'new'}" @click="changeRecommends('new')">Новинки</div>
        <div class="recommend__tab" :class="{'active': recommends.currentTab === 'weekly'}" @click="changeRecommends('weekly')">ТОП за неделю</div>
        <div class="recommend__tab" :class="{'active': recommends.currentTab === 'premium'}" @click="changeRecommends('premium')">Премиум</div>
        </div>
        <div class="recommend__body cards">
            <Card v-for="product in getReccomendCategoryProducts()" :cardData="product" :key="product.id" />
        </div>
    </div>
    </section>
</template>

<script>
import Card from '../Card.vue'
export default {
  components: { Card },

  data() {
    return {
        recommends: {
            currentTab: 'new',
            new: {
                slug: 'new',
                products: [
                    {
                        id: 1,
                        title: 'Мужская рубашка Mustang',
                        newPrice: 1500,
                        oldPrice: 4500,
                        favorite: false,
                        inCart: false,
                        sign: 'Отличное',
                        image: 'product.svg',
                    },
                    {
                        id: 2,
                        title: 'Мужская рубашка Mustang 2',
                        newPrice: 2500,
                        oldPrice: 4500,
                        favorite: false,
                        inCart: false,
                        sign: 'Супер',
                        image: 'product.svg',
                    },
                    {
                        id: 3,
                        title: 'Мужская рубашка Mustang 3',
                        newPrice: 3500,
                        oldPrice: 4500,
                        favorite: false,
                        inCart: false,
                        sign: 'Отличное',
                        image: 'product.svg',
                    }
                ]
            },
            weekly: {
                slug: 'new',
                products: [
                    {
                        id: 1,
                        title: 'Мужская рубашка Mustang 4',
                        newPrice: 1500,
                        oldPrice: 4500,
                        favorite: false,
                        inCart: false,
                        sign: 'Отличное',
                        image: 'product.svg',
                    },
                    {
                        id: 2,
                        title: 'Мужская рубашка Mustang 5',
                        newPrice: 2500,
                        oldPrice: 4500,
                        favorite: false,
                        inCart: false,
                        sign: 'Отличное',
                        image: 'product.svg',
                    },
                ]
            },
            premium: {
                slug: 'new',
                products: [
                    {
                        id: 1,
                        title: 'Мужская рубашка Mustang',
                        newPrice: 1500,
                        oldPrice: 4500,
                        favorite: false,
                        inCart: false,
                        sign: 'Отличное',
                        image: 'product.svg',
                    }
                ]
            } 
        }
    }
  },

  methods: {
    changeRecommends(category) {
        this.recommends.currentTab = category
    },
    getReccomendCategoryProducts() {
        return this.recommends[this.recommends.currentTab]?.products
    }
  }

}
</script>

<style>

</style>