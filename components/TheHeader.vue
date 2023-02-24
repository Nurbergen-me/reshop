<template>
  <header>
      <div class="header__top">
        <div class="container header__top-container">
          <nuxt-link to="/" class="header__top-city">
            <svg
              width="35"
              height="21"
              viewBox="0 0 35 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0401 10C13.1584 10 10.0001 13.1583 10.0001 17.0356C9.97455 22.7072 16.7725 27.4099 17.0401 27.6C17.0401 27.6 24.1056 22.7072 24.0801 17.04C24.0801 13.1583 20.9217 10 17.0401 10ZM17.0401 20.56C15.0953 20.56 13.5201 18.9848 13.5201 17.04C13.5201 15.0952 15.0953 13.52 17.0401 13.52C18.9849 13.52 20.5601 15.0952 20.5601 17.04C20.5601 18.9848 18.9849 20.56 17.0401 20.56Z"
                fill="black"
              />
            </svg>
            <p>Уфа</p>
          </nuxt-link>
          <nav class="header__top-links">
            <nuxt-link to="/about" class="header__top-link">О компании</nuxt-link>
            <nuxt-link to="/rent" class="header__top-link">Аренда одежды</nuxt-link>
            <nuxt-link to="/howItWorks" class="header__top-link">Как это работает</nuxt-link>
            <nuxt-link to="/howToDonate" class="header__top-link">Как сдать одежду</nuxt-link>
            <nuxt-link to="/delivery" class="header__top-link">Доставка и оплата</nuxt-link>
          </nav>
          <a href="tel:89876542310" class="header__top-phone">
            8 (987) 654-23-10
          </a>
        </div>
      </div>
      <div class="header__inner">
        <div class="container header__inner-container">
          <div class="burger" @click="mobileMenu = !mobileMenu">
            <img src="@/assets/images/burger.svg" alt="" />
          </div>
          <div class="header__inner-left">
            <nuxt-link to="/" class="header__logo">
              <img src="" alt="" />
              <p>ЛОГО</p>
            </nuxt-link>
            <div class="header__slogan">
              Селективный комиссионный магазин трендовой одежды
            </div>
          </div>
          <div class="header__inner-right">
            <form class="header__search">
              <input
                class="header__search-input"
                type="search"
                placeholder="Например, кожаный бомбер"
                v-model="searchInput"
              />
              <button type="submit">
                <img src="@/assets/images/search.svg" alt="" />
              </button>
              <!-- Результат поиска(скрыт) -->
              <div class="search-results" v-if="searchInput">
                <a href="#" class="search-result">
                  <div class="search-result__top">
                    <img
                      src="@/assets/images/category-sm.svg"
                      alt=""
                      class="header-result__icon"
                    />
                    <p class="search-result__category">Сумки</p>
                  </div>
                  <div class="search-result__bottom">
                    <p class="search-result__name">Клатч Gucci</p>
                    <img
                      src="@/assets/images/Arrow-left.svg"
                      alt=""
                      class="search-result__arrow"
                    />
                    <p class="search-result__category--sm">Сумки</p>
                  </div>
                </a>
              </div>
            </form>
            <div class="header__actions">
              <nuxt-link to="/cabinet#favorites" class="header__actions-item">
                <div class="header__actions-icon">
                  <img src="" alt="" />
                </div>
                <p class="header__actions-text">Избранное</p>
              </nuxt-link>
              <nuxt-link to="/cart" class="header__actions-item">
                <div class="header__actions-icon">
                  <img src="" alt="" />
                </div>
                <p class="header__actions-text">Корзина</p>
              </nuxt-link>
              <a v-if="!userToken" class="header__actions-item" @click.prevent="showAuth = true">
                <div class="header__actions-icon">
                  <img src="" alt="" />
                </div>
                <p class="header__actions-text">Войти</p>
              </a>
              <a v-else class="header__actions-item" @click.prevent="logout()">
                <div class="header__actions-icon">
                  <img src="" alt="" />
                </div>
                <p class="header__actions-text">Выйти</p>
              </a>
            </div>
          </div>
          <div class="seacrh-trigger">
            <img src="@/assets/images/search.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="container">
          <div class="header__catalog">
            <a href="#" 
                class="header__catalog-link header__catalog-main"
                @click.prevent="showCatalog = !showCatalog"
              >
              <img src="@/assets/images/burger-sm.svg" alt="" /> Весь каталог</a
            >
            <template v-for="(category, index) in catalog.her.categories[1].subCategories" >
                <nuxt-link 
                  :to="`/category/${category.id}`" 
                  class="header__catalog-link" 
                  :class="{'header__catalog-link-st': category.bold}" 
                  :key="`main-${category.id}`"
                  v-if="index < 7"
                >
                  {{ category.name }}
                </nuxt-link>
            </template>
          </div>
        </div>
        <!-- Полный каталог(Скрытый) Desktop -->
        <div class="window__catalog" :class="{'active': showCatalog}">
          <div class="window__catalog-tabs">
            <a href="#" class="window__catalog-tab" :class="{'active': currentTab === 'her'}" @click.prevent="currentTab = 'her'">ДЛЯ НЕЕ</a>
            <a href="#" class="window__catalog-tab" :class="{'active': currentTab === 'his'}" @click.prevent="currentTab = 'his'">ДЛЯ НЕГО</a>
          </div>
          <div class="window__catalog-body" v-if="currentTab === 'her'">
            <ul class="window__catalog-list" v-for="category in catalog.her.categories" :key="`her-category-${category.id}`">
              <li>
                <nuxt-link :to="`/category/${category.id}`" class="window__catalog-link window__catalog-title">
                  {{ category.name }}
                </nuxt-link>
              </li>
              <li v-for="subcategory in category.subCategories" :key="`her-subcategories-${subcategory.id}`">
                <nuxt-link :to="`/category/${subcategory.id}`" class="window__catalog-link">
                  {{ subcategory.name }}
                </nuxt-link>
              </li>
            </ul>
            <div class="window__catalog-img">
              <img src="@/assets/images/clear.svg" alt="" />
            </div>
          </div>
          <div class="window__catalog-body" v-else-if="currentTab === 'his'">
            <ul class="window__catalog-list" v-for="category in catalog.his.categories" :key="`his-category-${category.id}`">
              <li>
                <nuxt-link :to="`/category/${category.id}`" class="window__catalog-link window__catalog-title">
                  {{ category.name }}
                </nuxt-link>
              </li>
              <li v-for="subcategory in category.subCategories" :key="`his-subcategories-${subcategory.id}`">
                <nuxt-link :to="`/category/${subcategory.id}`" class="window__catalog-link">
                  {{ subcategory.name }}
                </nuxt-link>
              </li>
            </ul>
            <div class="window__catalog-img">
              <img src="@/assets/images/clear.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="mobile" :class="{'active': mobileMenu}">
        <div class="mobile__top">
          <div class="mobile__catalog-tabs">
            <a href="#" class="mobile__catalog-tab" :class="{'active': currentTab === 'her'}" @click.prevent="currentTab = 'her'">ДЛЯ НЕЕ</a>
            <a href="#" class="mobile__catalog-tab" :class="{'active': currentTab === 'his'}" @click.prevent="currentTab = 'his'">ДЛЯ НЕГО</a>
          </div>
          <div class="mobile__catalog-body" v-if="currentTab === 'her'">
            <template v-for="category in catalog.her.categories">
              <ul
                class="mobile__catalog-list"
                :class="{'active': currentCategoryId === category.id}"
                :key="`her-category-m-${category.id}`"
                v-if="!currentCategoryId || currentCategoryId === category.id"
               >
                  <li>
                    <a class="mobile__catalog-title" @click.prevent="toggleMoblieCategory(category.id)">
                      {{ category.name }}
                    </a>
                  </li>
                  <li v-for="subcategory in category.subCategories" :key="`her-subcategories-m-${subcategory.id}`">
                    <nuxt-link :to="`/category/${subcategory.id}`" class="mobile__catalog-link">
                      {{ subcategory.name }}
                    </nuxt-link>
                  </li>
              </ul>
            </template>
          </div>
          <div class="mobile__catalog-body" v-if="currentTab === 'his'">
            <template v-for="category in catalog.his.categories">
              <ul
                class="mobile__catalog-list"
                :class="{'active': currentCategoryId === category.id}"
                :key="`his-category-m-${category.id}`"
                v-if="!currentCategoryId || currentCategoryId === category.id"
               >
                  <li>
                    <a class="mobile__catalog-title" @click.prevent="toggleMoblieCategory(category.id)">
                      {{ category.name }}
                    </a>
                  </li>
                  <li v-for="subcategory in category.subCategories" :key="`his-subcategories-m-${subcategory.id}`">
                    <nuxt-link :to="`/category/${subcategory.id}`" class="mobile__catalog-link">
                      {{ subcategory.name }}
                    </nuxt-link>
                  </li>
              </ul>
            </template>
          </div>
        </div>
        <div class="mobile__bottom" v-if="!currentCategoryId">
          <nav class="mobile-links">
            <nuxt-link to="/about" class="mobile-link">О компании</nuxt-link>
            <nuxt-link to="/rent" class="mobile-link">Аренда одежды</nuxt-link>
            <nuxt-link to="/howItWorks" class="mobile-link">Как это работает</nuxt-link>
            <nuxt-link to="/howToDonate" class="mobile-link">Как сдать одежду</nuxt-link>
            <nuxt-link to="/delivery" class="mobile-link">Доставка и оплата</nuxt-link>
          </nav>
          <div class="mobile__footer">
            <a href="#" class="mobile-city"
              ><svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.04006 0C3.15839 0 7.16712e-05 3.15832 7.16712e-05 7.03559C-0.0254483 12.7072 6.77254 17.4099 7.04006 17.6C7.04006 17.6 14.1056 12.7072 14.0801 7.03999C14.0801 3.15832 10.9217 0 7.04006 0ZM7.04006 10.56C5.09526 10.56 3.52007 8.98479 3.52007 7.03999C3.52007 5.09519 5.09526 3.52 7.04006 3.52C8.98486 3.52 10.5601 5.09519 10.5601 7.03999C10.5601 8.98479 8.98486 10.56 7.04006 10.56Z"
                  fill="black"
                />
              </svg>

              <p>Уфа</p></a
            >
            <a href="tel:89876542310" class="mobile__phone"
              >8 (987) 654-23-10</a
            >
          </div>
        </div>
      </div>
      <!-- Модальное окно поиска(Скрытое) -->
      <div class="search-modal" v-if="search">
        <form class="modal-search__form">
          <input
            class="modal__search-input"
            type="search"
            placeholder="Например, кожаный бомбер"
          />
          <button class="modal__search-submit" type="submit">
            <img src="@/assets/images/search.svg" alt="" />
          </button>
          <!-- Результат поиска(скрыт) -->
          <div class="modal__search-results">
            <a href="#" class="search-result">
              <div class="search-result__top">
                <img
                  src="@/assets/images/category-sm.svg"
                  alt=""
                  class="header-result__icon"
                />
                <p class="search-result__category">Сумки</p>
              </div>
              <div class="search-result__bottom">
                <p class="search-result__name">Клатч Gucci</p>
                <img
                  src="@/assets/images/Arrow-left.svg"
                  alt=""
                  class="search-result__arrow"
                />
                <p class="search-result__category--sm">Сумки</p>
              </div>
            </a>
          </div>
        </form>
      </div>
      <!-- Модальное окно Входа/Регистрации -->
      <Auth v-if="showAuth" @toggleModal="toggleModal" />
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Auth from './Auth.vue'
export default {
  components: { Auth },
    name: 'TheHeader',
    data() {
        return {
            showAuth: false,
            search: false,
            searchInput: '',
            showCatalog: false,
            mobileMenu: false,
            currentTab: 'her',
            currentCategoryId: null,
            categoriesSample: [
              {
                id: 1,
                title: 'Обувь',
                slug: 'shoes',
              },
              {
                id: 2,
                title: 'Сумки',
                slug: 'bags',
              },
              {
                id: 3,
                title: 'Верхняя одежда',
                slug: 'jackets',
              },
              {
                id: 4,
                title: 'Аксессуары',
                slug: 'accessories',
              },
              {
                id: 5,
                title: 'Ювелирные изделия',
                slug: 'jewelerly',
              },
              {
                id: 6,
                title: 'Премиум',
                slug: 'premium',
              },
              {
                id: 7,
                title: 'Спорт',
                slug: 'sport',
              },
              {
                id: 8,
                title: 'SALE',
                slug: 'sale',
                bold: true,
              },
            ],
            catalogSample: {
              his: {
                id: 1,
                categories: [
                  {
                    id: 11,
                    name: 'Популярные бренды',
                    subCategories: [
                      {
                        id: 101,
                        name: 'Loius Vuitton'
                      },
                      {
                        id: 104,
                        name: 'Dolce & Gabanna'
                      },
                      {
                        id: 105,
                        name: 'Gucci'
                      },
                      {
                        id: 106,
                        name: 'Michael Kors'
                      },
                      {
                        id: 107,
                        name: 'Fendi'
                      },
                      {
                        id: 108,
                        name: 'Marc Jacobs'
                      },
                    ]
                  },
                  {
                    id: 21,
                    name: 'Одежда',
                    subCategories: [
                      {
                        id: 202,
                        name: 'Брюки'
                      },
                      {
                        id: 204,
                        name: 'Джемперы и свитшоты'
                      },
                      {
                        id: 205,
                        name: 'Джинсы'
                      },
                      {
                        id: 206,
                        name: 'Кардиганы и кофты'
                      },
                      {
                        id: 207,
                        name: 'Комбинезоны'
                      },
                      {
                        id: 208,
                        name: 'Костюмы'
                      },
                    ]
                  },
                  {
                    id: 31,
                    name: 'Обувь',
                    subCategories: [
                      {
                        id: 301,
                        name: 'Босоножки'
                      },
                      {
                        id: 302,
                        name: 'Ботильоны'
                      },
                      {
                        id: 303,
                        name: 'Ботинки'
                      },
                      {
                        id: 304,
                        name: 'Домашняя обувь'
                      },
                      {
                        id: 305,
                        name: 'Лоферы'
                      },
                    ]
                  },
                  {
                    id: 41,
                    name: 'Верхняя одежда',
                    subCategories: [
                      {
                        id: 401,
                        name: 'Бомбер'
                      },
                      {
                        id: 402,
                        name: 'Ветровки'
                      },
                      {
                        id: 403,
                        name: 'Жилеты'
                      },
                      {
                        id: 404,
                        name: 'Куртки'
                      },
                      {
                        id: 405,
                        name: 'Пальто'
                      },
                      {
                        id: 406,
                        name: 'Парки'
                      },
                      {
                        id: 407,
                        name: 'Плащи, тренчкоты'
                      },
                    ]
                  },
                  {
                    id: 51,
                    name: 'Аксессуары',
                    subCategories: [
                      {
                        id: 503,
                        name: 'Браслеты'
                      },
                      {
                        id: 504,
                        name: 'Броши'
                      },
                      {
                        id: 505,
                        name: 'Головные уборы'
                      },
                      {
                        id: 506,
                        name: 'Зонты'
                      },
                      {
                        id: 507,
                        name: 'Кошельки'
                      },
                      {
                        id: 508,
                        name: 'Носки'
                      },
                    ]
                  },
                ]
              },
              her: {
                id: 1,
                categories: [
                  {
                    id: 11,
                    name: 'Популярные бренды',
                    subCategories: [
                      {
                        id: 101,
                        name: 'Loius Vuitton'
                      },
                      {
                        id: 102,
                        name: 'Chanel'
                      },
                      {
                        id: 103,
                        name: 'Furia'
                      },
                      {
                        id: 104,
                        name: 'Dolce & Gabanna'
                      },
                      {
                        id: 105,
                        name: 'Gucci'
                      },
                      {
                        id: 106,
                        name: 'Michael Kors'
                      },
                      {
                        id: 107,
                        name: 'Fendi'
                      },
                      {
                        id: 108,
                        name: 'Marc Jacobs'
                      },
                    ]
                  },
                  {
                    id: 21,
                    name: 'Одежда',
                    subCategories: [
                      {
                        id: 201,
                        name: 'Блузки и рубашки'
                      },
                      {
                        id: 202,
                        name: 'Брюки'
                      },
                      {
                        id: 203,
                        name: 'Вечерние платья'
                      },
                      {
                        id: 204,
                        name: 'Джемперы и свитшоты'
                      },
                      {
                        id: 205,
                        name: 'Джинсы'
                      },
                      {
                        id: 206,
                        name: 'Кардиганы и кофты'
                      },
                      {
                        id: 207,
                        name: 'Комбинезоны'
                      },
                      {
                        id: 208,
                        name: 'Костюмы'
                      },
                    ]
                  },
                  {
                    id: 31,
                    name: 'Обувь',
                    subCategories: [
                      {
                        id: 301,
                        name: 'Босоножки'
                      },
                      {
                        id: 302,
                        name: 'Ботильоны'
                      },
                      {
                        id: 303,
                        name: 'Ботинки'
                      },
                      {
                        id: 304,
                        name: 'Домашняя обувь'
                      },
                      {
                        id: 305,
                        name: 'Лоферы'
                      },
                      {
                        id: 306,
                        name: 'Мокасины'
                      },
                      {
                        id: 307,
                        name: 'Пантолеты'
                      },
                      {
                        id: 308,
                        name: 'Сабо'
                      },
                    ]
                  },
                  {
                    id: 41,
                    name: 'Верхняя одежда',
                    subCategories: [
                      {
                        id: 401,
                        name: 'Бомбер'
                      },
                      {
                        id: 402,
                        name: 'Ветровки'
                      },
                      {
                        id: 403,
                        name: 'Жилеты'
                      },
                      {
                        id: 404,
                        name: 'Куртки'
                      },
                      {
                        id: 405,
                        name: 'Пальто'
                      },
                      {
                        id: 406,
                        name: 'Парки'
                      },
                      {
                        id: 407,
                        name: 'Плащи, тренчкоты'
                      },
                      {
                        id: 408,
                        name: 'Пончо, накидки'
                      },
                    ]
                  },
                  {
                    id: 51,
                    name: 'Аксессуары',
                    subCategories: [
                      {
                        id: 501,
                        name: 'Аксессуары для волос'
                      },
                      {
                        id: 502,
                        name: 'Аксессуары для сумок'
                      },
                      {
                        id: 503,
                        name: 'Браслеты'
                      },
                      {
                        id: 504,
                        name: 'Броши'
                      },
                      {
                        id: 505,
                        name: 'Головные уборы'
                      },
                      {
                        id: 506,
                        name: 'Зонты'
                      },
                      {
                        id: 507,
                        name: 'Кошельки'
                      },
                      {
                        id: 508,
                        name: 'Носки'
                      },
                    ]
                  },
                ]
              },

            },
        }
    },
    mounted() {
        this.$store.dispatch('auth/init')
        this.$store.dispatch('products/getCategories')
    },
    computed: {
      ...mapGetters({
        userToken: 'auth/userToken',
        catalog: 'products/catalog'
      })
    },
    watch: {
      '$route.path'(newVal) {
        this.mobileMenu = false
        this.showAuth = false
        this.showCatalog = false
      }
    },
    methods: {
      toggleModal(value) {
        this.showAuth = value
      },
      toggleMoblieCategory(categoryId) {
        if (this.currentCategoryId) {
          this.currentCategoryId = null
        } else {
          this.currentCategoryId = categoryId
        }
      },
      logout() {
        this.$store.commit('auth/logout')
      }
    }
}
</script>

<style>
.nuxt-link-active::after  {
    width: 100%;
}
</style>