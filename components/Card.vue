<template>
  <div class="recommend__card card">
    <nuxt-link to="/product/forever21" class="recommend__card-img card-img">
        <img :src="require(`@/assets/images/${cardData.image}`)" alt="" />
        <div class="recommend__card-sign card-sign"> {{ cardData.sign}} </div>
        <div class="recommend__actions card-actions">
            <a href="" class="recommend__actions-left" @click.prevent="addToCart(cardData)">В корзину</a>
            <div class="recommend__actions-right card-actions-right">
            <a
                href="#"
                class="recommend__actions-icon card-actions-icon"
            >
                <img src="@/assets/images/eye.svg" alt="" />
            </a>
            <a
                href="#"
                class="recommend__actions-icon card-actions-icon"
            >
                <img src="@/assets/images/like.svg" alt="" />
            </a>
            </div>
        </div>
        </nuxt-link>

        <p class="recommend__card-name">
            {{ cardData.title }}
        </p>
        <div class="recommend__card-prices">
        <div class="recommend__card-newprice">{{ cardData.newPrice}} руб</div>
        <div class="recommend__card-oldprice">{{ cardData.oldPrice }} руб</div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Card',
    props: ['cardData'],

    methods: {
      ...mapMutations({
        addToCart: 'cart/addToCart'
      })
    }
}
</script>

<style>

</style>