<template>
    <main>
      <section class="cart" v-if="totalQuantity > 0">
        <div class="container">
          <div class="cart__title">
            Корзина <span class="cart__amount"> {{ totalQuantity}} </span>
          </div>
          <div class="cart__wrapper">
            <div class="cart__list">
              <div class="cart__list-top">
                <p class="cart__top-text">
                  Каждый товар в единственном экземпляре. Торопись купить!
                </p>
                <div class="cart__all-check">
                  <input
                    class="cart__all-checkbox"
                    type="checkbox"
                    id="select-all"
                  />
                  <label for="select-all">Выбрать всё</label>
                </div>
              </div>
              <div class="cart__item" v-for="product in cartProducts" :key="product.id">
                <div class="cart__item-check">
                  <input type="checkbox" class="cart__item-checkbox" />
                  <label></label>
                </div>
                <div class="cart__item-img">
                  <img src="@/assets/images/cart-img.svg" alt="" />
                </div>
                <div class="cart__item-info">
                  <div class="cart__item-prices--mob">
                    <div class="cart__item-newprice--mob">{{ product.oldPrice }} р.</div>
                    <div class="cart__item-oldprice--mob">{{ product.newPrice }} р.</div>
                  </div>
                  <a href="#" class="cart__item-name"
                    >{{ product.title }}</a
                  >
                  <div class="cart__item-wrapper">
                    <div class="cart__item-desc">
                      <p>Размер: {{ product.size }}</p>
                      <p>Состояние: отличное</p>
                      <p>Материал: {{ product.material }}</p>
                    </div>
                    <div class="cart__item-actions">
                      <a class="cart__item-icon" @click.prevent="deleteFromCart(product)">
                        <img src="@/assets/images/trash.svg" alt="" />
                      </a>
                      <a class="cart__item-icon">
                        <img src="@/assets/images/like.svg" alt="" />
                      </a>
                    </div>
                    <div class="cart__item-prices">
                      <div class="cart__item-oldprice">{{ product.oldPrice }} р.</div>
                      <div class="cart__item-newprice">{{ product.newPrice }} р.</div>
                    </div>
                  </div>
                  <div class="cart__item-viewers">
                    Этот товар сейчас смотрят: 14 человек
                  </div>
                </div>
              </div>

              <div class="cart__promo">
                <label class="cart__promo-label"
                  ><span>Введите промокод, если есть</span>
                  <input
                    class="cart__promo-input"
                    type="text"
                    placeholder="Промокод"
                  />
                </label>
                <p class="cart__promo-text">
                  Каждый товар в единственном экземпляре. Торопись купить!
                </p>
              </div>

              <form class="cart__form">
                <h2 class="cart__form-title">Способ доставки</h2>
                <a href="#" class="cart__form-link">Выберите адрес доставки</a>
                <h2 class="cart__form-title">Способ оплаты</h2>
                <fieldset class="cart__form-fieldset--pay">
                  <div class="group-radio">
                    <input
                      type="radio"
                      name="group1"
                      class="cart__form-radio"
                      id="pay1"
                    />
                    <label for="pay1"
                      >Онлайн картой (Visa, MasterCard или МИР)</label
                    >
                  </div>
                  <div class="group-radio">
                    <input
                      type="radio"
                      name="group1"
                      class="cart__form-radio"
                      id="pay2"
                    />
                    <label for="pay2">WebMoney</label>
                  </div>
                  <div class="group-radio">
                    <input
                      type="radio"
                      name="group1"
                      class="cart__form-radio"
                      id="pay3"
                    />
                    <label for="pay3">Яндекс.Деньги</label>
                  </div>
                  <div class="group-radio">
                    <input
                      type="radio"
                      name="group1"
                      class="cart__form-radio"
                      id="pay4"
                    />
                    <label for="pay4">Qiwi</label>
                  </div>
                </fieldset>

                <h2 class="cart__form-title">Ваши данные</h2>
                <fieldset class="cart__form-fieldset">
                  <div class="group-radio">
                    <input
                      type="radio"
                      name="group2"
                      class="cart__form-radio"
                      id="who1"
                    />
                    <label for="who1">Физическое лицо</label>
                  </div>
                  <div class="group-radio">
                    <input
                      type="radio"
                      name="group2"
                      class="cart__form-radio"
                      id="who2"
                    />
                    <label for="who2">Юридическое лицо</label>
                  </div>
                </fieldset>
                <input
                  type="text"
                  class="cart__form-input"
                  placeholder="Имя, Фамилия"
                />
                <input
                  type="text"
                  class="cart__form-input"
                  placeholder="Телефон"
                />
                <input
                  type="text"
                  class="cart__form-input"
                  placeholder="E-mail"
                />
                <div class="cart__form-check">
                  <input id="" type="checkbox" class="cart__form-checkbox" />
                  <label for=""
                    >Подписаться на рассылку выгодных предложений</label
                  >
                </div>
              </form>
            </div>
            <div class="check">
              <h2 class="check__title">Итого</h2>
              <ul class="check__list">
                <li class="check__item">
                  <div class="check__item-left">Товары, 4 шт.</div>
                  <div class="check__item-right">{{ totalPrice }} р.</div>
                </li>
                <li class="check__item">
                  <div class="check__item-left">Скидка</div>
                  <div class="check__item-right">{{ totalDiscount }} р.</div>
                </li>
                <li class="check__item">
                  <div class="check__item-left">Доставка</div>
                  <div class="check__item-right">500 р.</div>
                </li>
              </ul>
              <div class="check__subtitle">Доставка: самовывоз</div>
              <p class="check__text">
                ТЦ "Галерея АРТ" (Чернышевского, 75) второй этаж по эскалатору,
                вывеска RESHOP. Каждый день 12.00-21.00
              </p>
              <div class="check__subtitle">Оплата: картой</div>
              <a href="" class="check__btn btn">Оплатить заказ</a>
              <div class="check__agreement">
                <img src="@/assets/images/orange-tick.svg" alt="" />
                <p class="check__agreement-text">
                  Согласен(-на) с <a href="#">Правилами пользования</a>
                </p>
              </div>
              <div class="check__timer">
                Оплатите товары за <span>4:49</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cart" v-else>
        <div class="container">
          <div class="breadcrumb">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to="/cart">Корзина</nuxt-link>
          </div>
          <div class="cart__title">Корзина</div>
          <div class="cart__empty">
            <img src="@/assets/images/cart.svg" alt="" />
            <div class="cart__empty-title">Ваша корзина пуста</div>
            <p class="cart__empty-text">
              <nuxt-link to="/">Нажмите здесь</nuxt-link>, чтобы начать покупки
            </p>
          </div>
        </div>
      </section>
      <!-- Выбор способа доставки -->
      <div class="deliver">
        <div class="deliver__window">
          <div class="deliver__tabs">
            <a class="deliver__tab">Самовывоз</a>
            <a class="deliver__tab active">Курьером</a>
          </div>
          <div class="deliver__body active">
            <form class="deliver__form">
              <p class="deliver__form-text">Введите адрес доставки</p>
              <input type="text" placeholder="Название населенного пункта" />
              <input
                type="text"
                class="deliver__form-street"
                placeholder="Улица"
              />
              <input
                class="deliver__form-house"
                type="text"
                placeholder="дом"
              />
              <input class="deliver__form-house" type="text" placeholder="кв" />
              <p class="deliver__form-text">Информация для курьера</p>
              <input
                type="text"
                class="deliver__form-number"
                placeholder="Подъезд"
              />
              <input
                type="text"
                class="deliver__form-number"
                placeholder="Домофон"
              />
              <input
                type="text"
                class="deliver__form-number"
                placeholder="Этаж"
              />
              <button type="submit" class="deliver__form-btn btn">
                Сохранить
              </button>
            </form>
          </div>
          <div class="deliver__body">
            <a class="deliver__phone" href="tel:+8 (987) 654-23-10"
              >8 (987) 654-23-10</a
            >
            <div class="deliver__info">
              г. Уфа, ТЦ "Галерея АРТ" (Чернышевского, 75) второй этаж по
              эскалатору, вывеска RESHOP <br />
              Каждый день с 12.00 до 21.00
            </div>
            <div class="deliver__map">карта</div>
          </div>
        </div>
      </div>
      <!-- Модальное окно ошибки -->
      <div class="modal-error">
        <div class="modal-error__window">
          <div class="modal-error__content">
            <div class="modal-error__title">К сожалению, вы опоздали:(</div>
            <p class="modal-error__text modal-error__text--sm">
              Кто-то только что начал оплачивать данный товар
            </p>
            <p class="modal-error__text">
              Вы можете вернуться к оплате через несколько минут на случай, если
              текущий клиент прервёт оплату
            </p>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Cart',

    computed: {
        ...mapGetters({
          cartProducts: 'cart/cartItems',
          totalPrice: 'cart/totalPrice',
          totalDiscount: 'cart/totalDiscount',
          totalQuantity: 'cart/totalQuantity',
        })
    },

    methods: {
      ...mapMutations({
          deleteFromCart: 'cart/deleteFromCart',
      })
    }

}
</script>
<style src="@/assets/css/cart.css"></style>
<style src="@/assets/css/empty-cart.css"></style>