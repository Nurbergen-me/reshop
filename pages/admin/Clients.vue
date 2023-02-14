<template>
    <div class="content">
        <div class="catalog__page">
          <h1 class="content__title">Клиенты</h1>
          <div class="content__top">
            <div class="content__tabs">
              <a class="content__tab" :class="{'active': currentTab === 0}" @click="currentTab = 0">Все заказы</a>
              <a class="content__tab" :class="{'active': currentTab === 1}" @click="currentTab = 1">Оплаченные</a>
              <a class="content__tab" :class="{'active': currentTab === 2}" @click="currentTab = 2">Неоплаченные</a>
            </div>
            <a class="content__save btn">Сохранить</a>
          </div>
          <div class="content__body" v-if="currentTab === 0">
            <div class="clients__block">
              <input
                type="search"
                class="catalog__search"
                placeholder="Поиск по имени"
              />
              <div class="catalog__actions">
                <div class="catalog__actions-top">
                  <div class="catalog__checkbox--top">
                    <div class="catalog__checkbox">
                      <input
                        class="catalog__checkbox-input"
                        type="checkbox"
                        id="check-all"
                      />
                      <label for="check-all"></label>
                    </div>
                  </div>
                  <p>Номер</p>
                  <p class="catalog-actions-3">Статус</p>
                  <p class="catalog-actions-5">ФИО</p>
                  <p class="catalog-actions-2">Сумма</p>
                  <p class="catalog-actions-2">Оплачено</p>
                  <p class="catalog-actions-2">Дата и время</p>
                  <p class="catalog-actions-2"></p>
                </div>
                <div class="catalog__actions-top catalog__actions-top--pressed">
                  <div class="catalog__checkbox--top">
                    <div class="catalog__checkbox">
                      <input
                        class="catalog__checkbox-input"
                        type="checkbox"
                        id="check-all"
                      />
                      <label for="check-all"></label>
                    </div>
                  </div>
                  <div class="catalog__select">
                    <div class="catalog__select-top">Выберите действие</div>
                    <div class="catalog__select-list">
                      <a href="#">Удалить выделенное</a>
                      <a href="#"> Перенести товары в другую категорию </a>
                      <a href="#"> Добавить товары в другую категорию </a>
                      <a href="#">Сделать активными</a>
                      <a href="#">Сделать неактивными</a>
                      <a href="#">Дублировать</a>
                      <a href="#">Добавить товарам свойство</a>
                    </div>
                  </div>
                  <div class="catalog__choosed">Выделено строк: 1</div>
                </div>
                <div class="catalog__actions-list">
                  <div class="catalog__actions-item">
                    <div class="catalog__checkbox--item catalog-actions-1">
                      <div class="catalog__checkbox">
                        <input
                          class="catalog__checkbox-input"
                          type="checkbox"
                          id="check-all"
                        />
                        <label for="check-all"></label>
                      </div>
                    </div>
                    <div class="catalog__actions-number catalog-actions-1">
                      01
                    </div>
                    <div class="catalog__actions-status catalog-actions-3">
                      Доставлено
                    </div>
                    <div class="catalog__actions-name catalog-actions-5">
                      Иванов И.И.
                    </div>
                    <div class="catalog__actions-price">
                      <input
                        class="catalog__actions-input"
                        type="text"
                        readonly
                        value="4500"
                      />
                    </div>
                    <div class="catalog__checkbox--item catalog-actions-2">
                      <div class="catalog__checkbox">
                        <input
                          class="catalog__checkbox-input"
                          type="checkbox"
                          id="check-all"
                        />
                        <label for="check-all"></label>
                      </div>
                    </div>
                    <div class="catalog__actions-date catalog-actions-2">
                      <span>23.11.2022</span>
                      <span>18:28 </span>
                    </div>
                    <div class="catalog__checkbox--trash catalog-actions-last">
                      <div class="catalog__checkbox-trash">
                        <a
                          ><img src="@/assets/images/trash-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div class="catalog__actions-item">
                    <div class="catalog__checkbox--item catalog-actions-1">
                      <div class="catalog__checkbox">
                        <input
                          class="catalog__checkbox-input"
                          type="checkbox"
                          id="check-all"
                        />
                        <label for="check-all"></label>
                      </div>
                    </div>
                    <div class="catalog__actions-number catalog-actions-1">
                      02
                    </div>
                    <div class="catalog__actions-status catalog-actions-3">
                      Отправлен
                    </div>
                    <div class="catalog__actions-name catalog-actions-5">
                      Сидоров
                    </div>
                    <div class="catalog__actions-price">
                      <input
                        class="catalog__actions-input"
                        type="text"
                        readonly
                        value="4500"
                      />
                    </div>
                    <div class="catalog__checkbox--item catalog-actions-2">
                      <div class="catalog__checkbox">
                        <input
                          class="catalog__checkbox-input"
                          type="checkbox"
                          id="check-all"
                        />
                        <label for="check-all"></label>
                      </div>
                    </div>
                    <div class="catalog__actions-date catalog-actions-2">
                      <span>29.11.2022</span>
                      <span>10:28 </span>
                    </div>
                    <div class="catalog__checkbox--trash catalog-actions-last">
                      <div class="catalog__checkbox-trash">
                        <a
                          ><img src="@/assets/images/trash-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div class="catalog__actions-item">
                    <div class="catalog__checkbox--item catalog-actions-1">
                      <div class="catalog__checkbox">
                        <input
                          class="catalog__checkbox-input"
                          type="checkbox"
                          id="check-all"
                        />
                        <label for="check-all"></label>
                      </div>
                    </div>
                    <div class="catalog__actions-number catalog-actions-1">
                      03
                    </div>
                    <div class="catalog__actions-status catalog-actions-3">
                      В обработке
                    </div>
                    <div class="catalog__actions-name catalog-actions-5">
                      Петров
                    </div>
                    <div class="catalog__actions-price">
                      <input
                        class="catalog__actions-input"
                        type="text"
                        readonly
                        value="4500"
                      />
                    </div>
                    <div class="catalog__checkbox--item catalog-actions-2">
                      <div class="catalog__checkbox">
                        <input
                          class="catalog__checkbox-input"
                          type="checkbox"
                          id="check-all"
                        />
                        <label for="check-all"></label>
                      </div>
                    </div>
                    <div class="catalog__actions-date catalog-actions-2">
                      <span>28.11.2022</span>
                      <span>18:28 </span>
                    </div>
                    <div class="catalog__checkbox--trash catalog-actions-last">
                      <div class="catalog__checkbox-trash">
                        <a
                          ><img src="@/assets/images/trash-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="catalog__block-footer">
                <div class="catalog__pagination">
                  <a class="catalog__pagination-link">
                    <img src="@/assets/images/two-back.svg" alt="" />
                  </a>
                  <a class="catalog__pagination-link">
                    <img src="@/assets/images/one-back.svg" alt="" />
                  </a>
                  <a class="catalog__pagination-link"> 1 </a>
                  <a class="catalog__pagination-link">
                    <img src="@/assets/images/one-next.svg" alt="" />
                  </a>
                  <a class="catalog__pagination-link">
                    <img src="@/assets/images/two-next.svg" alt="" />
                  </a>
                </div>
                <div class="catalog__amount">
                  <span class="catalog__amount-text">Найдено товаров: 3</span>
                  <div class="catalog__amount-select">10</div>
                </div>
              </div>
            </div>
          </div>
          <div class="content__body" v-if="currentTab === 1">
            <div class="clients__block">
              <input
                type="search"
                class="catalog__search"
                placeholder="Поиск по имени"
              />
              <div class="catalog__actions">
                <div class="catalog__actions-top">
                  <div class="catalog__checkbox--top">
                    <div class="catalog__checkbox">
                      <input
                        class="catalog__checkbox-input"
                        type="checkbox"
                        id="check-all"
                      />
                      <label for="check-all"></label>
                    </div>
                  </div>
                  <p>Номер</p>
                  <p class="catalog-actions-3">ФИО</p>
                  <p class="catalog-actions-4">Дата регистрации</p>
                  <p class="catalog-actions-3">Сумма покупок</p>
                  <p class="catalog-actions-3">Сумма продаж</p>
                  <p class="catalog-actions-3"></p>
                </div>
                <div class="catalog__actions-top catalog__actions-top--pressed">
                  <div class="catalog__checkbox--top">
                    <div class="catalog__checkbox">
                      <input
                        class="catalog__checkbox-input"
                        type="checkbox"
                        id="check-all"
                      />
                      <label for="check-all"></label>
                    </div>
                  </div>
                  <div class="catalog__select">
                    <div class="catalog__select-top">Выберите действие</div>
                    <div class="catalog__select-list">
                      <a href="#">Удалить выделенное</a>
                      <a href="#"> Перенести товары в другую категорию </a>
                      <a href="#"> Добавить товары в другую категорию </a>
                      <a href="#">Сделать активными</a>
                      <a href="#">Сделать неактивными</a>
                      <a href="#">Дублировать</a>
                      <a href="#">Добавить товарам свойство</a>
                    </div>
                  </div>
                  <div class="catalog__choosed">Выделено строк: 1</div>
                </div>
                <div class="catalog__actions-list">
                  <div class="catalog__actions-item">
                    <div class="catalog__checkbox--item catalog-actions-1">
                      <div class="catalog__checkbox">
                        <input
                          class="catalog__checkbox-input"
                          type="checkbox"
                          id="check-all"
                        />
                        <label for="check-all"></label>
                      </div>
                    </div>
                    <div class="catalog__actions-number catalog-actions-1">
                      01
                    </div>
                    <div class="catalog__actions-name catalog-actions-3">
                      Иванов И.И.
                    </div>
                    <div class="catalog__actions-date catalog-actions-4">
                      <span>23.11.2022 </span>
                    </div>
                    <div class="catalog__actions-price catalog-actions-3">
                      <input
                        class="catalog__actions-input"
                        type="text"
                        readonly
                        value="9850"
                      />
					  
                    </div>
					<div class="catalog__actions-price catalog-actions-3">
						<input
						  class="catalog__actions-input"
						  type="text"
						  readonly
						  value="11400"
						/>
                  </div>
				  <div class="catalog__checkbox--trash catalog-actions-3">
					<div class="catalog__checkbox-icons">
						<a
						><img src="@/assets/images/ban.svg" alt=""
					  /></a>
					  <a
						><img src="@/assets/images/trash-light.svg" alt=""
					  /></a>
					</div>
				  </div>
                </div>
				<div class="catalog__actions-item">
                    <div class="catalog__checkbox--item catalog-actions-1">
                      <div class="catalog__checkbox">
                        <input
                          class="catalog__checkbox-input"
                          type="checkbox"
                          id="check-all"
                        />
                        <label for="check-all"></label>
                      </div>
                    </div>
                    <div class="catalog__actions-number catalog-actions-1">
                      01
                    </div>
                    <div class="catalog__actions-name catalog-actions-3">
						Кабанов А.А.
                    </div>
                    <div class="catalog__actions-date catalog-actions-4">
                      <span>23.11.2022 </span>
                    </div>
                    <div class="catalog__actions-price catalog-actions-3">
                      <input
                        class="catalog__actions-input"
                        type="text"
                        readonly
                        value="9850"
                      />
					  
                    </div>
					<div class="catalog__actions-price catalog-actions-3">
						<input
						  class="catalog__actions-input"
						  type="text"
						  readonly
						  value="11400"
						/>
                  </div>
				  <div class="catalog__checkbox--trash catalog-actions-3">
					<div class="catalog__checkbox-icons">
						<a
						><img src="@/assets/images/ban.svg" alt=""
					  /></a>
					  <a
						><img src="@/assets/images/trash-light.svg" alt=""
					  /></a>
					</div>
				  </div>
                </div>
				<div class="catalog__actions-item">
                    <div class="catalog__checkbox--item catalog-actions-1">
                      <div class="catalog__checkbox">
                        <input
                          class="catalog__checkbox-input"
                          type="checkbox"
                          id="check-all"
                        />
                        <label for="check-all"></label>
                      </div>
                    </div>
                    <div class="catalog__actions-number catalog-actions-1">
                      01
                    </div>
                    <div class="catalog__actions-name catalog-actions-3">
						Алексеев
                    </div>
                    <div class="catalog__actions-date catalog-actions-4">
                      <span>23.11.2022 </span>
                    </div>
                    <div class="catalog__actions-price catalog-actions-3">
                      <input
                        class="catalog__actions-input"
                        type="text"
                        readonly
                        value="9850"
                      />
					  
                    </div>
					<div class="catalog__actions-price catalog-actions-3">
						<input
						  class="catalog__actions-input"
						  type="text"
						  readonly
						  value="11400"
						/>
                  </div>
				  <div class="catalog__checkbox--trash catalog-actions-3">
					<div class="catalog__checkbox-icons">
						<a
						><img src="@/assets/images/ban.svg" alt=""
					  /></a>
					  <a
						><img src="@/assets/images/trash-light.svg" alt=""
					  /></a>
					</div>
				  </div>
                </div>
              </div>
              <div class="catalog__block-footer">
                <div class="catalog__pagination">
                  <a class="catalog__pagination-link">
                    <img src="@/assets/images/two-back.svg" alt="" />
                  </a>
                  <a class="catalog__pagination-link">
                    <img src="@/assets/images/one-back.svg" alt="" />
                  </a>
                  <a class="catalog__pagination-link"> 1 </a>
                  <a class="catalog__pagination-link">
                    <img src="@/assets/images/one-next.svg" alt="" />
                  </a>
                  <a class="catalog__pagination-link">
                    <img src="@/assets/images/two-next.svg" alt="" />
                  </a>
                </div>
                <div class="catalog__amount">
                  <span class="catalog__amount-text">Найдено товаров: 3</span>
                  <div class="catalog__amount-select">10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

    data() {
      return {
        currentTab: 0
      }
    }
}
</script>

<style>

</style>