<template>
  <main>
      <section class="category">
        <div class="container">
          <div class="category__top">
            <div class="category__top-left">
              <div class="breadcrumb">
                <a href="#">Главная</a>
                <a href="#">Категория</a>
              </div>
              <h1 class="category__title">
                {{ category?.name }}
                <span class="category__title-amount">156 штук</span>
              </h1>
            </div>
            <p class="category__slogan">
              Все вещи тщательно отбираются и проходят термическую обработку.
              Однако, они не являются новыми и могут иметь незначительные
              дефекты
            </p>
          </div>
          <div class="category__container">
            <aside class="filter">
              <form class="filter__form">
                <div class="filter__form-field">
                  <div class="filter__form-top">
                    <div class="filter__form-title"><p>Цена, &#8381;</p></div>
                    <a class="filter__form-collapse">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"
                          fill="#959595"
                        />
                      </svg>
                    </a>
                  </div>
                  <div class="filter__form-range">
                    <label>
                      <span>От</span>
                      <input
                        class="filter__form-range--first"
                        type="number"
                        placeholder="5460"
                        v-model="filter.priceFrom"
                      />
                    </label>
                    <label>
                      <span>До</span>
                      <input type="number" placeholder="9000" v-model="filter.priceTo" />
                    </label>
                  </div>
                </div>
                <div class="filter__form-field">
                  <div class="filter__form-top">
                    <div class="filter__form-title">
                      <p>Бренд</p>
                      <a href="#" class="filter__form-reset filter__form-link"
                        >Сбросить</a
                      >
                    </div>
                    <a class="filter__form-collapse">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"
                          fill="#959595"
                        />
                      </svg>
                    </a>
                  </div>
                  <input
                    type="search"
                    class="filter__form-search"
                    placeholder="Поиск..."
                    v-model="filter.brandsSearch"
                  />
                  <fieldset class="filter__form-fieldset">
                    <div class="filter__form-check" v-for="brand in brands" :key="brand.id">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                        :checked="isInFilters(brand, 'brands')"
                        @click="toggleFilter(brand, 'brands')"
                      />
                      <label for="">{{ brand.title }}</label>
                    </div>
                  </fieldset>
                  <a class="filter__form-link filter__form-link--desc"
                    >Очистить фильтр</a
                  >
                </div>
                <div class="filter__form-field">
                  <div class="filter__form-top">
                    <div class="filter__form-title">
                      <p>Размер</p>
                      <a href="#" class="filter__form-reset filter__form-link"
                        >Сбросить</a
                      >
                    </div>
                    <a class="filter__form-collapse">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"
                          fill="#959595"
                        />
                      </svg>
                    </a>
                  </div>
                  <input
                    type="search"
                    class="filter__form-search"
                    placeholder="Поиск..."
                    v-model="filter.sizesSearch"
                  />
                  <fieldset class="filter__form-fieldset">
                    <div class="filter__form-check" v-for="size in sizes" :key="size.id">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                        :checked="isInFilters(size, 'sizes')"
                        @click="toggleFilter(size, 'sizes')"
                      />
                      <label for=""> {{ size.title }} </label>
                    </div>
                  </fieldset>
                  <a class="filter__form-link filter__form-link--desc"
                    >Очистить фильтр</a
                  >
                </div>
                <div class="filter__form-field">
                  <div class="filter__form-top">
                    <div class="filter__form-title">
                      <p>Сезон</p>
                      <a href="#" class="filter__form-reset filter__form-link"
                        >Сбросить</a
                      >
                    </div>
                    <a class="filter__form-collapse">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"
                          fill="#959595"
                        />
                      </svg>
                    </a>
                  </div>
                  <input
                    type="search"
                    class="filter__form-search"
                    placeholder="Поиск..."
                    v-model="filter.seasonsSearch"
                  />
                  <fieldset class="filter__form-fieldset">
                    <div class="filter__form-check" v-for="season in seasons" :key="season.id">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                        :checked="isInFilters(season, 'seasons')"
                        @click="toggleFilter(season, 'seasons')"
                      />
                      <label for=""> {{ season.title }} </label>
                    </div>
                  </fieldset>
                </div>
                <div class="filter__form-field">
                  <div class="filter__form-top">
                    <div class="filter__form-title">
                      <p>Состояние</p>
                      <a href="#" class="filter__form-reset filter__form-link"
                        >Сбросить</a
                      >
                    </div>
                    <a class="filter__form-collapse">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"
                          fill="#959595"
                        />
                      </svg>
                    </a>
                  </div>
                  <fieldset class="filter__form-fieldset">
                    <div class="filter__form-check">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                      />
                      <label for="">Хорошее</label>
                    </div>
                    <div class="filter__form-check">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                      />
                      <label for="">Отличное</label>
                    </div>
                    <div class="filter__form-check">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                      />
                      <label for="">Отличное</label>
                    </div>
                  </fieldset>
                </div>
                <div class="filter__form-field">
                  <div class="filter__form-top">
                    <div class="filter__form-title">
                      <p>Размер</p>
                      <a href="#" class="filter__form-reset filter__form-link"
                        >Сбросить</a
                      >
                    </div>
                    <a class="filter__form-collapse">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"
                          fill="#959595"
                        />
                      </svg>
                    </a>
                  </div>
                  <input
                    type="search"
                    class="filter__form-search"
                    placeholder="Поиск..."
                  />
                  <fieldset class="filter__form-fieldset">
                    <div class="filter__form-check">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                      />
                      <label for="">Хлопок</label>
                    </div>
                    <div class="filter__form-check">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                      />
                      <label for="">Лён</label>
                    </div>
                    <div class="filter__form-check">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                      />
                      <label for="">Шелк</label>
                    </div>
                    <div class="filter__form-check">
                      <input
                        id=""
                        type="checkbox"
                        class="filter__form-checkbox"
                      />
                      <label for="">Кашемир</label>
                    </div>
                  </fieldset>
                </div>
                <div class="filter__form-field">
                  <div class="filter__form-top">
                    <div class="filter__form-title">
                      <p>Цвет</p>
                    </div>
                    <a class="filter__form-collapse">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"
                          fill="#959595"
                        />
                      </svg>
                    </a>
                  </div>
                  <fieldset class="filter__form-colorset">
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox yellow"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox red"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox black"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox white"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox blue"
                      />
                      <label></label>
                    </div>
                  </fieldset>
                  <a class="filter__form-link">Очистить фильтр</a>
                </div>
                <button class="filter__form-btn btn">
                  Показать 65 товаров
                </button>
              </form>
            </aside>
            <div class="category__products">
              <div class="category__sort">
                <p class="category__sort-text">Сортировать по:</p>
                <a class="category__sort-link" :class="{'active': sortBy === 'price'}" @click="sortBy = 'price'">Цене</a>
                <a class="category__sort-link" :class="{'active': sortBy === 'discount'}" @click="sortBy = 'discount'">Скидке</a>
                <a class="category__sort-link" :class="{'active': sortBy === 'date'}" @click="sortBy = 'date'">Дате</a>
              </div>
              <div class="mob__sort">
                <div class="mob__sort-filter">
                  <p>Фильтры</p>
                  <img src="@/assets/images/fillter.svg" alt="" />
                </div>
                <a class="category__sort-link--mob">Цене</a>
              </div>
              <div class="category__selected">
                <a class="category__selected-item" v-for="filter in selectedFilters.brands" @click="toggleFilter(filter, 'brands')">
                  <span> {{ filter.title }} </span>
                  <img src="@/assets/images/white-close.svg" alt=""/>
                </a>
                <a class="category__selected-item" v-for="filter in selectedFilters.seasons" @click="toggleFilter(filter, 'seasons')">
                  <span> {{ filter.title }} </span>
                  <img src="@/assets/images/white-close.svg" alt=""/>
                </a>
                <a class="category__selected-item" v-for="filter in selectedFilters.sizes" @click="toggleFilter(filter, 'sizes')">
                  <span> {{ filter.title }} </span>
                  <img src="@/assets/images/white-close.svg" alt=""/>
                </a>
              </div>
              <p class="category__products-text">
                Здесь может быть какое-то важное предложение
              </p>
              <div class="category__products-cards cards">
                <Card v-for="product in categoryProducts" :cardData="product" :key="product.id" />
              </div>
              <p class="category__products-text">
                Чем отличается свитер от свитшота? Джемпер от пуловера? Худи от
                толстовки? Разбираться в тонкостях наименований современной
                модной одежды полезно и интересно, но зачастую не так уж просто.
                ... Свитера, джемпера, толстовки и все остальные плечевые
                предметы вязаной одежды зачастую ошибочно называют кофтой.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'
import CatalogVue from '../Catalog.vue'
export default {
  name: 'Category',

  // async fetch({ params, $api }) {
  //   const data = await $api.get(`categories/${params.slug}/products`).then(res => res.response)
  //   this.categoryProducts = data?.products
  // },

  data() {
    return {
      sortBy: 'price',
      category: null,
      filter: {
        priceFrom: 100,
        priceTo: '',
        brandsSearch: '',
        sizesSearch: '',
        seasonsSearch: ''
      },
      selectedFilters: {
        brands: [],
        seasons: [],
        sizes: [],
      },
      brands: [
        {
          id: 101,
          title: 'Marc Jacobs'
        },
        {
          id: 102,
          title: 'Valentino'
        },
        {
          id: 103,
          title: 'Guess'
        },
        {
          id: 104,
          title: 'Dior'
        },
        {
          id: 105,
          title: 'Furia'
        },
        {
          id: 106,
          title: 'Dolce & Gabanna'
        },
      ],
      seasons: [
        {
          id: 201,
          title: 'Лето'
        },
        {
          id: 202,
          title: 'Осень'
        },
        {
          id: 203,
          title: 'Зима'
        },
        {
          id: 204,
          title: 'Весна'
        }
      ],
      sizes: [
        {
          id: 301,
          title: '40 (Don’t know)'
        },
        {
          id: 302,
          title: '42 (XXS)'
        },
        {
          id: 303,
          title: '44 (XS)'
        },
        {
          id: 304,
          title: '46 (S)'
        },
        {
          id: 305,
          title: '48 (M)'
        },
      ],
      categoryProducts: [],

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
    }
  },

  mounted() {
    this.getProducts()
    const category = this.categoryData(this.$route.params.slug)
    this.category = category
  },

  computed: {
    ...mapGetters({
      categoryData: 'products/getCategoryData'
    })
  },

  methods: {
    async getProducts() {
        const data = await this.$api.get(`categories/${this.$route.params.slug}/products`)
        this.categoryProducts = data?.data?.response.products
    },
    toggleFilter(item, type) {
      if (!this.selectedFilters[type]) return

      if (this.isInFilters(item, type)) {
        this.selectedFilters[type] = this.selectedFilters[type].filter((selectedItem) => selectedItem.id !== item.id)
      } else {
        this.selectedFilters[type].push(item)
      }
    },
    isInFilters(item, type) {
      return !!this.selectedFilters[type].find(selectedItem => selectedItem.id === item.id)
    }
  }
}
</script>

<style src="@/assets/css/category-page.css"></style>