<template>
  <div class="body-wrapper">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<style src="@/assets/css/style.css"></style>
<style scoped>
.body-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>