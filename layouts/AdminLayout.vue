<template>
  <div>
    <header class="admin-header">
      <div class="admin-header__left">
        <a class="burger">
          <img src="@/assets/images/admin-burger.svg" alt="" />
        </a>
        <a href="#" class="admin-header__logo">ReShop</a>
      </div>
      <div class="admin-header__right">
        <nuxt-link to="/" class="admin-header__btn btn">Перейти в магазин</nuxt-link>
        <a href="#" class="admin-header__exit">
          <span class="admin-header__exit-text">Выйти</span>
          <img src="@/assets/images/exit.svg" alt="" class="admin-header__exit-img" />
        </a>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style src="@/assets/css/admin.css"></style>