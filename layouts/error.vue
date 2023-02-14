<template>
  <div class="container">
      <div class="error">
        <div class="error__num">404</div>
        <h1 class="error__title">Упс! Такой страницы не существует :(</h1>
        <a href="/" class="btn btn-r error__btn">На главную</a>
        <div class="error__bottom">
          <div class="error__text">Либо воспользуйтесь поиском:</div>
          <form class="search">
            <input
              class="search-input"
              type="search"
              placeholder="Например, кожаный бомбер"
            />
            <button type="submit">
              <img src="@/assets/images/search.svg" alt="" />
            </button>
            <!-- Результат поиска(скрыт) -->
            <div style="display: none" class="search-results">
              <a href="#" class="search-result">
                <div class="search-result__top">
                  <img
                    src="@/assets/images/category-sm.svg"
                    alt=""
                    class="result__icon"
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
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style src="@/assets/css/404.css"></style>