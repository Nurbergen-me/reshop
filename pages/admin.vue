<template>
    <main class="admin-page">
      <aside class="menu active">
        <div class="menu__links">
          <nuxt-link to="/admin/settings" class="menu__link">Настройки</nuxt-link>
          <nuxt-link to="/admin/main" class="menu__link">Главная</nuxt-link>
          <nuxt-link to="/admin/pages" class="menu__link">Страница “Всё”</nuxt-link>
          <nuxt-link to="/admin/catalog" class="menu__link">Каталог</nuxt-link>
          <nuxt-link to="/admin/properties" class="menu__link">Менеджер свойств</nuxt-link>
          <nuxt-link to="/admin/innerPages" class="menu__link">Внутренние страницы</nuxt-link>
          <nuxt-link to="/admin/clients" class="menu__link">Клиенты</nuxt-link>
        </div>
      </aside>
      <NuxtChild />
    </main>
</template>

<script>
export default {
    layout: 'AdminLayout',

    mounted() {
      this.$router.push('/admin/settings')
    }
}
</script>

<style scoped>
.admin-page {
    display: flex;
    flex-grow: 1;
    position: relative;
    justify-content: center;
    gap: 10px;
    min-height: calc(100vh - 68px);
}
.nuxt-link-active {
    background: #a9a9a9;
}
</style>