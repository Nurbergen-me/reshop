<template>
  <div class="registration" @click="closeModal">
      <div class="registration__window" @click.stop="">
        <div class="registration__tabs">
          <div class="registration__tab">Вход</div>
          <div class="registration__tab active">Регистрация</div>
        </div>
        <div class="registration__body">
          <form class="registration__form">
            <input
              type="email"
              class="registration__input input"
              placeholder="E-mail или номер телефона"
            />
            <input
              type="password"
              class="registration__input input"
              placeholder="Пароль"
            />
            <div class="registration__check">
              <input
                class="registration__checkbox"
                type="checkbox"
                id="remember"
              />
              <label for="remember">Запомнить меня</label>
            </div>
            <button type="submit" class="btn registration__submit">
              Войти
            </button>
            <p class="registration__text">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16669 6.5L5.91669 11.25L13.8334 1.75"
                  stroke="#EB681E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Согласен(-на) с <a href="#">Правилами пользования</a>
            </p>
          </form>
        </div>
        <div class="registration__body active">
          <form class="registration__form">
            <input
              type="email"
              class="registration__input input"
              placeholder="E-mail или номер телефона"
            />
            <input
              type="password"
              class="registration__input input"
              placeholder="Придумайте пароль"
            />
            <div class="registration__check">
              <input
                class="registration__checkbox"
                type="checkbox"
                id="remember"
              />
              <label for="remember">Запомнить меня</label>
            </div>
            <button type="submit" class="btn registration__submit">
              Зарегистрироваться
            </button>
            <p class="registration__text">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16669 6.5L5.91669 11.25L13.8334 1.75"
                  stroke="#EB681E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Согласен(-на) с <a href="#">Правилами пользования</a>
            </p>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Auth',

    methods: {
        closeModal() {
            this.$emit('toggleModal', false)
        }
    }
}
</script>

<style>

</style>