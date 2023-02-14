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
            <nuxt-link to="/howToDonate" class="header__top-link"
              >Как сдать одежду</nuxt-link
            >
            <nuxt-link to="/delivery" class="header__top-link"
              >Доставка и оплата</nuxt-link
            >
          </nav>
          <a href="tel:89876542310" class="header__top-phone">
            8 (987) 654-23-10
          </a>
        </div>
      </div>
      <div class="header__inner">
        <div class="container header__inner-container">
          <div class="burger">
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
              <a class="header__actions-item" @click="showAuth = true">
                <div class="header__actions-icon">
                  <img src="" alt="" />
                </div>
                <p class="header__actions-text">Войти</p>
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
            <nuxt-link :to="`/category/${category.slug}`" class="header__catalog-link" :class="{'header__catalog-link-st': category.bold}" v-for="category in categories" :key="category.id">
              {{ category.title }}
            </nuxt-link>
          </div>
        </div>
        <!-- Полный каталог(Скрытый) Desktop -->
        <div class="window__catalog" :class="{'active': showCatalog}">
          <div class="window__catalog-tabs">
            <a href="#" class="window__catalog-tab active">ДЛЯ НЕЕ</a>
            <a href="#" class="window__catalog-tab">ДЛЯ НЕГО</a>
          </div>
          <div class="window__catalog-body">
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title"
                  >Популярные бренды</a
                >
              </li>
              <li>
                <a class="window__catalog-link">Loius Vuitton</a>
              </li>
              <li>
                <a class="window__catalog-link">Chanel</a>
              </li>
              <li>
                <a class="window__catalog-link">Dior</a>
              </li>
              <li>
                <a class="window__catalog-link">Furia</a>
              </li>
              <li>
                <a class="window__catalog-link">Dolce & Gabanna</a>
              </li>
              <li>
                <a class="window__catalog-link">Gucci</a>
              </li>
              <li>
                <a class="window__catalog-link">Michael Kors</a>
              </li>
              <li>
                <a class="window__catalog-link">Fendi</a>
              </li>
              <li>
                <a class="window__catalog-link">Marc Jacobs</a>
              </li>
              <li>
                <a class="window__catalog-link">Valentino</a>
              </li>
              <li>
                <a class="window__catalog-link">Guess</a>
              </li>
              <li>
                <a class="window__catalog-link">Hermes</a>
              </li>
            </ul>
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title">Одежда</a>
              </li>
              <li>
                <a class="window__catalog-link">Брюки</a>
              </li>
              <li>
                <a class="window__catalog-link">Джинсы</a>
              </li>
              <li>
                <a class="window__catalog-link">Кардиганы и кофты</a>
              </li>
              <li>
                <a class="window__catalog-link">Костюмы</a>
              </li>
              <li>
                <a class="window__catalog-link">Нижнее белье</a>
              </li>
              <li>
                <a class="window__catalog-link">Пиджаки</a>
              </li>
              <li>
                <a class="window__catalog-link">Плавки</a>
              </li>
              <li>
                <a class="window__catalog-link">Рубашки</a>
              </li>
              <li>
                <a class="window__catalog-link">Футболки и поло</a>
              </li>
              <li>
                <a class="window__catalog-link">Шорты, бермуды</a>
              </li>
              <li>
                <a class="window__catalog-link">Спортивная одежда</a>
              </li>
            </ul>
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title">Обувь</a>
              </li>
              <li>
                <a class="window__catalog-link">Ботинки</a>
              </li>
              <li>
                <a class="window__catalog-link">Мокасины</a>
              </li>
              <li>
                <a class="window__catalog-link">Пантолеты</a>
              </li>
              <li>
                <a class="window__catalog-link">Сандали</a>
              </li>
              <li>
                <a class="window__catalog-link">Сапоги</a>
              </li>
              <li>
                <a class="window__catalog-link">Слипоны</a>
              </li>
              <li>
                <a class="window__catalog-link">Спортивная обувь</a>
              </li>
              <li>
                <a class="window__catalog-link">Туфли</a>
              </li>
              <li>
                <a class="window__catalog-link">Угги</a>
              </li>
              <li>
                <a class="window__catalog-link">Шлепанцы</a>
              </li>
            </ul>
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title"
                  >Верхняя одежда</a
                >
              </li>
              <li>
                <a class="window__catalog-link">Дубленки</a>
              </li>
              <li>
                <a class="window__catalog-link">Куртки, пуховики</a>
              </li>
              <li>
                <a class="window__catalog-link">Парки</a>
              </li>
              <li>
                <a class="window__catalog-link">Плащи, пальто</a>
              </li>
              <li>
                <a class="window__catalog-link">Жилеты</a>
              </li>
            </ul>
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title"
                  >Аксессуары</a
                >
              </li>
              <li>
                <a class="window__catalog-link">Галстуки</a>
              </li>
              <li>
                <a class="window__catalog-link">Головные уборы</a>
              </li>
              <li>
                <a class="window__catalog-link">Запонки</a>
              </li>
              <li>
                <a class="window__catalog-link">Зонты</a>
              </li>
              <li>
                <a class="window__catalog-link">Кошельки. портмоне</a>
              </li>
              <li>
                <a class="window__catalog-link">Оправы</a>
              </li>
              <li>
                <a class="window__catalog-link">Перчатки</a>
              </li>
              <li>
                <a class="window__catalog-link">Платки</a>
              </li>
              <li>
                <a class="window__catalog-link">Прочее</a>
              </li>
              <li>
                <a class="window__catalog-link">Ремни</a>
              </li>
              <li>
                <a class="window__catalog-link">Солнцезащитные очки</a>
              </li>
              <li>
                <a class="window__catalog-link">Часы</a>
              </li>
              <li>
                <a class="window__catalog-link">Чехлы</a>
              </li>
              <li>
                <a class="window__catalog-link">Шарфы</a>
              </li>
              <li>
                <a class="window__catalog-link">Экзотическая кожа</a>
              </li>
            </ul>
            <div class="window__catalog-img">
              <img src="@/assets/images/clear.svg" alt="" />
            </div>
          </div>
          <div class="window__catalog-body active">
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title"
                  >Популярные бренды</a
                >
              </li>
              <li>
                <a class="window__catalog-link">Loius Vuitton</a>
              </li>
              <li>
                <a class="window__catalog-link">Chanel</a>
              </li>
              <li>
                <a class="window__catalog-link">Dior</a>
              </li>
              <li>
                <a class="window__catalog-link">Furia</a>
              </li>
              <li>
                <a class="window__catalog-link">Dolce & Gabanna</a>
              </li>
              <li>
                <a class="window__catalog-link">Gucci</a>
              </li>
              <li>
                <a class="window__catalog-link">Michael Kors</a>
              </li>
              <li>
                <a class="window__catalog-link">Fendi</a>
              </li>
              <li>
                <a class="window__catalog-link">Marc Jacobs</a>
              </li>
              <li>
                <a class="window__catalog-link">Valentino</a>
              </li>
              <li>
                <a class="window__catalog-link">Guess</a>
              </li>
              <li>
                <a class="window__catalog-link">Hermes</a>
              </li>
            </ul>
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title">Одежда</a>
              </li>
              <li>
                <a class="window__catalog-link">Блузки и рубашки</a>
              </li>
              <li>
                <a class="window__catalog-link">Брюки</a>
              </li>
              <li>
                <a class="window__catalog-link">Вечерние платья</a>
              </li>
              <li>
                <a class="window__catalog-link">Джемперы и свитшоты</a>
              </li>
              <li>
                <a class="window__catalog-link">Джинсы</a>
              </li>
              <li>
                <a class="window__catalog-link">Кардиганы и кофты</a>
              </li>
              <li>
                <a class="window__catalog-link">Комбинезоны</a>
              </li>
              <li>
                <a class="window__catalog-link">Костюмы</a>
              </li>
              <li>
                <a class="window__catalog-link">Купальники</a>
              </li>
              <li>
                <a class="window__catalog-link">Леггинсы</a>
              </li>
              <li>
                <a class="window__catalog-link">Нижнее белье</a>
              </li>
              <li>
                <a class="window__catalog-link">Пиджаки и жакеты</a>
              </li>
              <li>
                <a class="window__catalog-link">Платья</a>
              </li>
              <li>
                <a class="window__catalog-link">Топы</a>
              </li>
              <li>
                <a class="window__catalog-link">Туники</a>
              </li>
              <li>
                <a class="window__catalog-link">Футболки и поло</a>
              </li>
            </ul>
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title">Обувь</a>
              </li>
              <li>
                <a class="window__catalog-link">Балетки</a>
              </li>
              <li>
                <a class="window__catalog-link">Босоножки</a>
              </li>
              <li>
                <a class="window__catalog-link">Ботильоны</a>
              </li>
              <li>
                <a class="window__catalog-link">Ботинки</a>
              </li>
              <li>
                <a class="window__catalog-link">Домашняя обувь</a>
              </li>
              <li>
                <a class="window__catalog-link">Лоферы</a>
              </li>
              <li>
                <a class="window__catalog-link">Мокасины</a>
              </li>
              <li>
                <a class="window__catalog-link">Пантолеты</a>
              </li>
              <li>
                <a class="window__catalog-link">Сабо</a>
              </li>
              <li>
                <a class="window__catalog-link">Сандали</a>
              </li>
              <li>
                <a class="window__catalog-link">Сапоги</a>
              </li>
              <li>
                <a class="window__catalog-link">Слипоны</a>
              </li>
              <li>
                <a class="window__catalog-link">Со шнуровкой</a>
              </li>
              <li>
                <a class="window__catalog-link">Спортивная обувь</a>
              </li>
              <li>
                <a class="window__catalog-link">Туфли</a>
              </li>
              <li>
                <a class="window__catalog-link">Угги</a>
              </li>
            </ul>
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title"
                  >Верхняя одежда</a
                >
              </li>
              <li>
                <a class="window__catalog-link">Бомбер</a>
              </li>
              <li>
                <a class="window__catalog-link">Ветровки</a>
              </li>
              <li>
                <a class="window__catalog-link">Жилеты</a>
              </li>
              <li>
                <a class="window__catalog-link">Куртки</a>
              </li>
              <li>
                <a class="window__catalog-link">Пальто</a>
              </li>
              <li>
                <a class="window__catalog-link">Парки</a>
              </li>
              <li>
                <a class="window__catalog-link">Плащи, тренчкоты</a>
              </li>
              <li>
                <a class="window__catalog-link">Пончо, накидки</a>
              </li>
              <li>
                <a class="window__catalog-link">Пуховики</a>
              </li>
              <li>
                <a class="window__catalog-link">Шубы, дубленки</a>
              </li>
            </ul>
            <ul class="window__catalog-list">
              <li>
                <a class="window__catalog-link window__catalog-title"
                  >Аксессуары</a
                >
              </li>
              <li>
                <a class="window__catalog-link">Аксессуары для волос</a>
              </li>
              <li>
                <a class="window__catalog-link">Аксессуары для сумок</a>
              </li>
              <li>
                <a class="window__catalog-link">Браслеты</a>
              </li>
              <li>
                <a class="window__catalog-link">Броши</a>
              </li>
              <li>
                <a class="window__catalog-link">Головные уборы</a>
              </li>
              <li>
                <a class="window__catalog-link">Зонты</a>
              </li>
              <li>
                <a class="window__catalog-link">Кошельки</a>
              </li>
              <li>
                <a class="window__catalog-link">Носки</a>
              </li>
              <li>
                <a class="window__catalog-link">Оправы</a>
              </li>
              <li>
                <a class="window__catalog-link">Палантины</a>
              </li>
            </ul>
            <div class="window__catalog-img">
              <img src="@/assets/images/clear.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="mobile">
        <div class="mobile__top">
          <div class="mobile__catalog-tabs">
            <a href="#" class="mobile__catalog-tab active">ДЛЯ НЕЕ</a>
            <a href="#" class="mobile__catalog-tab">ДЛЯ НЕГО</a>
          </div>
          <div class="mobile__catalog-body active">
            <ul class="mobile__catalog-list active">
              <li>
                <a class="mobile__catalog-title">Популярные бренды</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Loius Vuitton</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Chanel</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Dior</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Furia</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Dolce & Gabanna</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Gucci</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Michael Kors</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Fendi</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Marc Jacobs</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Valentino</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Guess</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Hermes</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Одежда</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Брюки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Джинсы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Кардиганы и кофты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Костюмы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Нижнее белье</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пиджаки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Плавки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Рубашки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Футболки и поло</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Шорты, бермуды</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Спортивная одежда</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ботинки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Мокасины</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пантолеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сандали</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сапоги</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Слипоны</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Спортивная обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Туфли</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Угги</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Шлепанцы</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Верхняя одежда</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Дубленки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Куртки, пуховики</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Парки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Плащи, пальто</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Жилеты</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Аксессуары</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Галстуки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Головные уборы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Запонки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Зонты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Кошельки. портмоне</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Оправы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Перчатки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Платки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Прочее</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ремни</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Солнцезащитные очки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Часы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Чехлы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Шарфы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Экзотическая кожа</a>
              </li>
            </ul>
          </div>
          <div class="mobile__catalog-body">
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Популярные бренды</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Loius Vuitton</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Chanel</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Dior</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Furia</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Dolce & Gabanna</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Gucci</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Michael Kors</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Fendi</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Marc Jacobs</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Valentino</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Guess</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Hermes</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Одежда</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Блузки и рубашки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Брюки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Вечерние платья</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Джемперы и свитшоты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Джинсы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Кардиганы и кофты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Комбинезоны</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Костюмы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Купальники</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Леггинсы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Нижнее белье</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пиджаки и жакеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Платья</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Топы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Туники</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Футболки и поло</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Балетки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Босоножки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ботильоны</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ботинки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Домашняя обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Лоферы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Мокасины</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пантолеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сабо</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сандали</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Сапоги</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Слипоны</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Со шнуровкой</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Спортивная обувь</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Туфли</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Угги</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Верхняя одежда</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Бомбер</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Ветровки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Жилеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Куртки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пальто</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Парки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Плащи, тренчкоты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пончо, накидки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Пуховики</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Шубы, дубленки</a>
              </li>
            </ul>
            <ul class="mobile__catalog-list">
              <li>
                <a class="mobile__catalog-title">Аксессуары</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Аксессуары для волос</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Аксессуары для сумок</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Браслеты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Броши</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Головные уборы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Зонты</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Кошельки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Носки</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Оправы</a>
              </li>
              <li>
                <a class="mobile__catalog-link">Палантины</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mobile__bottom">
          <nav class="mobile-links">
            <a href="#" class="mobile-link">О компании</a>
            <a href="#" class="mobile-link">Аренда одежды</a>
            <a href="#" class="mobile-link">Как это работает</a>
            <a href="#" class="mobile-link">Как сдать одежду</a>
            <a href="#" class="mobile-link">Доставка и оплата</a>
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
            categories: [
              {
                id: 1,
                title: 'Обувь',
                slug: 'shoees',
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
            ]
        }
    },
    methods: {
      toggleModal(value) {
        this.showAuth = value
      }
    }
}
</script>

<style>
.nuxt-link-active::after  {
    width: 100%;
}
</style>