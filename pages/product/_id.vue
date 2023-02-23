<template>
  <main>
      <section class="product-page" v-if="product">
        <div class="container">
          <div class="product-page__breadcrumb breadcrumb">
            <a href="#">Главная</a>
            <a href="#">Родительская категория</a>
            <a href="#">Дочерняя категория</a>
          </div>
          <div class="product-page__wrapper">
            <div class="product-page__images">
              <div class="product-page__top-slider">
                <div class="product-page__top-wrapper">
                  <client-only placeholder="Loading...">
                    <agile ref="carousel" @after-change="e => currentSlide = e.currentSlide">
                        
                        <div class="product-page__top-img active" v-for="productImage in fullPhotos" :key="`slide-${productImage}`">
                          <img :src="productImage" alt="" />
                        </div>
                    </agile>
                </client-only>
                </div>
              </div>
              <div class="product-page__bottom-slider">
                <div class="product-page__bottom-wrapper">
                  <div class="product-page__bottom-img" v-for="(productImage, index) in fullPhotos" :key="productImage" @click="$refs.carousel.goTo(index)">
                    <img :src="productImage" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="product-page__info">
              <div class="product-page__info-viewers">
                Этот товар сейчас смотрят: 14 человек
              </div>
              <h1 class="product-page__info-name"> {{ product.name }} </h1>
              <div class="product-page__info-light"> {{ product.id }} </div>
              <div class="product-page__info-light">Артикул: {{ product.barcode }} </div>
              <div class="product-page__sizes">
                <div class="product-page__sizes-text">Размер:</div>
                <div class="product-page__sizes-items">
                  <div class="product-page__sizes-item"> {{ product.sizes[0] }} </div>
                </div>
              </div>
              <p class="product-page__info-text">Материал: {{ product.material}}.</p>
              <p class="product-page__info-text">
                {{ product.description }}
              </p>
              <div class="product-page__actions">
                <div class="product-page__prices">
                  <div class="product-page__newprice">{{ product.lowerPrice.value }} р.</div>
                  <div v-if="product.oldPrice" class="product-page__oldprice">{{ product.oldPrice }} р.</div>
                </div>
                <a href="#" class="product-page__actions-like">
                  <img src="@/assets/images/like.svg" alt="" />
                </a>
                <a href="#" class="product-page__actions-whatsapp">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.28 18C35.28 27.5435 27.5435 35.28 18 35.28C8.45652 35.28 0.72 27.5435 0.72 18C0.72 8.45652 8.45652 0.72 18 0.72C27.5435 0.72 35.28 8.45652 35.28 18Z"
                      stroke="#010101"
                      stroke-width="1.44"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.043 27.7326C16.3268 27.7326 14.7144 27.2939 13.3116 26.5241L7.89258 28.2461L9.65912 23.0351C8.7681 21.5713 8.25479 19.8549 8.25479 18.0201C8.25479 12.656 12.637 8.30762 18.0432 8.30762C23.4488 8.30762 27.831 12.656 27.831 18.0201C27.831 23.3842 23.449 27.7326 18.043 27.7326ZM18.043 9.8544C13.505 9.8544 9.81376 13.5175 9.81376 18.0201C9.81376 19.8068 10.3962 21.4615 11.3811 22.8078L10.3532 25.8402L13.5154 24.8351C14.815 25.6882 16.3715 26.1858 18.043 26.1858C22.5803 26.1858 26.2723 22.5229 26.2723 18.0203C26.2723 13.5178 22.5803 9.8544 18.043 9.8544ZM22.9855 20.257C22.9253 20.1579 22.7653 20.0981 22.5258 19.9792C22.2857 19.8602 21.1058 19.284 20.8862 19.2049C20.666 19.1256 20.5058 19.0855 20.3461 19.3238C20.1864 19.5622 19.7265 20.0981 19.5862 20.257C19.4462 20.416 19.3064 20.436 19.0665 20.3168C18.8268 20.1978 18.0536 19.9464 17.1369 19.1353C16.4238 18.5044 15.9422 17.7254 15.8024 17.4868C15.6624 17.2487 15.7875 17.12 15.9076 17.0015C16.0155 16.8947 16.1475 16.7234 16.2676 16.5845C16.3877 16.4454 16.4276 16.3464 16.5073 16.1873C16.5875 16.0285 16.5474 15.8896 16.4874 15.7701C16.4273 15.6512 15.9473 14.4797 15.7474 14.0029C15.5476 13.5266 15.348 13.6059 15.2078 13.6059C15.0678 13.6059 14.9078 13.586 14.7479 13.586C14.5879 13.586 14.3278 13.6456 14.1078 13.8837C13.8881 14.1221 13.2684 14.6981 13.2684 15.8694C13.2684 17.0409 14.1278 18.1727 14.2481 18.3313C14.3679 18.49 15.9074 20.9721 18.3463 21.9254C20.7861 22.8784 20.7861 22.5605 21.2261 22.5209C21.6654 22.4812 22.645 21.9451 22.8455 21.3892C23.0451 20.833 23.0451 20.3562 22.9855 20.257Z"
                      fill="black"
                    />
                  </svg>
                  <p>Задать вопрос в Whats’app</p>
                </a>
              </div>
              <a href="#" class="product-page__discount">Запросить скидку</a>
              <div class="product-page__info-buttons">
                <a href="" class="product-page__info-btn" @click.prevent="addToCart(product)">В корзину</a>
                <a href="" class="product-page__info-btn light" @click.prevent="buyNow(product)"
                  >Купить сейчас</a
                >
              </div>
              <p class="product-page__info-light">
                *Согласно правилам комиссионного магазина одежда, обувь и
                аксессуары обмену и возврату не подлежат
              </p>
            </div>
          </div>
          <div class="product-page__desc">
            <div class="product-page__desc-item active">
              <a class="product-page__desc-tab">Дополнительная информация</a>
              <div class="product-page__desc-body active">
                <ul class="product-page__desc-list">
                  <li>
                    <div class="product-page__desc-key">Вид застежки</div>
                    <div class="product-page__desc-value">пуговицы</div>
                  </li>
                  <li>
                    <div class="product-page__desc-key">Воротник</div>
                    <div class="product-page__desc-value">
                      V-образный вырез воротника
                    </div>
                  </li>
                  <li>
                    <div class="product-page__desc-key">
                      Название характеристики
                    </div>
                    <div class="product-page__desc-value">Значение</div>
                  </li>
                  <li>
                    <div class="product-page__desc-key">
                      Название характеристики
                    </div>
                    <div class="product-page__desc-value">Значение</div>
                  </li>
                  <li>
                    <div class="product-page__desc-key">
                      Название характеристики
                    </div>
                    <div class="product-page__desc-value">Значение</div>
                  </li>
                  <li>
                    <div class="product-page__desc-key">
                      Название характеристики
                    </div>
                    <div class="product-page__desc-value">Значение</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-page__desc-item">
              <a class="product-page__desc-tab">Доставка, оплата, возврат</a>
              <div class="product-page__desc-body">
                <p>Здесь будет текст условий доставки, оплаты и возврата</p>
              </div>
            </div>
          </div>
          <h1 class="product-page__title">С этим товаром в луке</h1>
          <div class="product-page__cards cards">
            <div class="card">
              <div class="card-img">
                <img src="@/assets/images/product.svg" alt="" />
                <div class="card-sign">Отличное</div>
                <div class="card-actions">
                  <a href="" class="card-actions-left">В корзину</a>
                  <div class="card-actions-right">
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/eye.svg" alt="" />
                    </a>
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/like.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <p class="card-name">Мужская рубашка Mustang</p>
              <div class="card-prices">
                <div class="card-newprice">1500 руб</div>
                <div class="card-oldprice">4500 руб</div>
              </div>
            </div>
            <div class="card">
              <div class="card-img">
                <img src="@/assets/images/product.svg" alt="" />
                <div class="card-sign">Отличное</div>
                <div class="card-actions active">
                  <a href="" class="card-actions-left">В корзину</a>
                  <div class="card-actions-right">
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/eye.svg" alt="" />
                    </a>
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/like.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <p class="card-name">Мужская рубашка Mustang</p>
              <div class="card-prices">
                <div class="card-newprice">1500 руб</div>
                <div class="card-oldprice">4500 руб</div>
              </div>
            </div>

            <div class="card">
              <div class="card-img">
                <img src="@/assets/images/product.svg" alt="" />
                <div class="card-sign">Отличное</div>
                <div class="card-actions">
                  <a href="" class="card-actions-left">В корзину</a>
                  <div class="card-actions-right">
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/eye.svg" alt="" />
                    </a>
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/like.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <p class="card-name">Мужская рубашка Mustang</p>
              <div class="card-prices">
                <div class="card-newprice">1500 руб</div>
                <div class="card-oldprice">4500 руб</div>
              </div>
            </div>
            <div class="card">
              <div class="card-img">
                <img src="@/assets/images/product.svg" alt="" />
                <div class="card-sign">Отличное</div>
                <div class="card-actions">
                  <a href="" class="card-actions-left">В корзину</a>
                  <div class="card-actions-right">
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/eye.svg" alt="" />
                    </a>
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/like.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <p class="card-name">Мужская рубашка Mustang</p>
              <div class="card-prices">
                <div class="card-newprice">1500 руб</div>
                <div class="card-oldprice">4500 руб</div>
              </div>
            </div>
          </div>
          <h1 class="product-page__title">Выбор Решоп</h1>
          <div class="product-page__cards cards">
            <div class="card">
              <div class="card-img">
                <img src="@/assets/images/product.svg" alt="" />
                <div class="card-sign">Отличное</div>
                <div class="card-actions">
                  <a href="" class="card-actions-left">В корзину</a>
                  <div class="card-actions-right">
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/eye.svg" alt="" />
                    </a>
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/like.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <p class="card-name">Мужская рубашка Mustang</p>
              <div class="card-prices">
                <div class="card-newprice">1500 руб</div>
                <div class="card-oldprice">4500 руб</div>
              </div>
            </div>
            <div class="card">
              <div class="card-img">
                <img src="@/assets/images/product.svg" alt="" />
                <div class="card-sign">Отличное</div>
                <div class="card-actions active">
                  <a href="" class="card-actions-left">В корзину</a>
                  <div class="card-actions-right">
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/eye.svg" alt="" />
                    </a>
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/like.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <p class="card-name">Мужская рубашка Mustang</p>
              <div class="card-prices">
                <div class="card-newprice">1500 руб</div>
                <div class="card-oldprice">4500 руб</div>
              </div>
            </div>

            <div class="card">
              <div class="card-img">
                <img src="@/assets/images/product.svg" alt="" />
                <div class="card-sign">Отличное</div>
                <div class="card-actions">
                  <a href="" class="card-actions-left">В корзину</a>
                  <div class="card-actions-right">
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/eye.svg" alt="" />
                    </a>
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/like.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <p class="card-name">Мужская рубашка Mustang</p>
              <div class="card-prices">
                <div class="card-newprice">1500 руб</div>
                <div class="card-oldprice">4500 руб</div>
              </div>
            </div>
            <div class="card">
              <div class="card-img">
                <img src="@/assets/images/product.svg" alt="" />
                <div class="card-sign">Отличное</div>
                <div class="card-actions">
                  <div href="#" class="card-actions-left" @click.prevent="addToCart()">В корзину</div>
                  <div class="card-actions-right">
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/eye.svg" alt="" />
                    </a>
                    <a href="#" class="card-actions-icon">
                      <img src="@/assets/images/like.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <p class="card-name">Мужская рубашка Mustang</p>
              <div class="card-prices">
                <div class="card-newprice">1500 руб</div>
                <div class="card-oldprice">4500 руб</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'ProductPage',

    // async fetch({ params, $api}) {
    //     const productData = await $api.get(`products/${params.id}`)
    //     const fullPhotos = await $api.get(`products/${params.id}/full-photos`)
    //     this.productData = productData.data.response
    //     this.fullPhotos = fullPhotos.data
    // },
    
    data() {
      return {
        currentSlide: 0,
        product: null,
        productData: null,
        fullPhotos: []
      }
    },

    mounted() {
      this.getProduct()
    },

    methods: {
      ...mapMutations({
        addToCart: 'cart/addToCart'
      }),
      async getProduct() {
        const productData = await this.$api.get(`products/${this.$route.params.id}`)
        const fullPhotos = await this.$api.get(`products/${this.$route.params.id}/full-photos`)
        this.productData = productData.data.response
        this.product = productData.data.response.product
        this.fullPhotos = fullPhotos.data
        console.log(productData.data.response)
      },
      buyNow(product) {
        this.addToCart(product)
        this.$router.push('/cart')
      }
    }


}
</script>

<style src="@/assets/css/product-content.css"></style>
<style scoped>
/* .product-page__top-img {
  width: 570px;
} */
.agile--ssr .agile__slides > * {
  overflow: hidden;
  width: 0
}
.agile--ssr .agile__slides > *:first-child {
  width: 570px
}
</style>