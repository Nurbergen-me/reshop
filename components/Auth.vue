<template>
  <div class="registration" @click="closeModal">
      <div class="registration__window" @click.stop="">
        <div class="registration__tabs">
          <div class="registration__tab" :class="{'active': authStep === 'login'}" @click="authStep = 'login'">Вход</div>
          <div class="registration__tab" :class="{'active': authStep === 'registration'}" @click="authStep = 'registration'">Регистрация</div>
        </div>
        <div class="registration__body" v-if="authStep === 'login'">
          <form class="registration__form">
            <input
              type="email"
              v-model="auth.email"
              class="registration__input input"
              placeholder="E-mail или номер телефона"
            />
            <input
              type="password"
              v-model="auth.password"
              class="registration__input input"
              placeholder="Пароль"
            />
            <div class="registration__check">
              <input
                class="registration__checkbox"
                type="checkbox"
                v-model="auth.remember"
                id="remember"
              />
              <label for="remember">Запомнить меня</label>
            </div>
            <button type="submit" class="btn registration__submit" @click.prevent="login()">
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
        <div class="registration__body" v-if="authStep === 'registration'">
          <form class="registration__form">
            <input
              type="email"
              v-model="auth.email"
              class="registration__input input"
              placeholder="E-mail или номер телефона"
            />
            <input
              type="password"
              v-model="auth.password"
              class="registration__input input"
              placeholder="Придумайте пароль"
            />
            <div class="registration__check">
              <input
                class="registration__checkbox"
                type="checkbox"
                v-model="auth.remember"
                id="remember"
              />
              <label for="remember">Запомнить меня</label>
            </div>
            <button type="submit" class="btn registration__submit" @click.prevent="signup()">
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
import auth from '../api'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Auth',
    data() {
      return {
        authStep: 'login',
        auth: {
          remember: false,
          name: '',
          email: '',
          phone: '',
          password: ''
        }
      }
    },

    mounted() {
        const userData = this.$store.getters['auth/user']
        this.auth.name = userData.name
        this.auth.email = userData.email
        this.auth.password = userData.password
        if (userData.email) {
          this.auth.remember = true
        }
    },

    methods: {
        closeModal() {
            this.$emit('toggleModal', false)
        },

        login() {
          this.$store.dispatch('auth/login', this.auth)
        },

        signup() {
          this.$store.dispatch('auth/signup', this.auth)
        }
    }
}
</script>

<style>

</style>