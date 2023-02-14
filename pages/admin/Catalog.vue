<template>
    <div class="content">
        <div class="catalog__page">
          <h1 class="content__title">Каталог</h1>
          <div class="catalog">
            <div class="catalog__menu">
              <div class="catalog__menu-top">
                <div class="catalog__menu-title">Категории</div>
                <ul class="catalog__menu-list">
                  <li class="catalog__menu-item">
                    <div class="catalog__menu-body">
                      <div class="catalog__menu-name">Для него</div>
                      <span>5/7</span>
                    </div>
                    <ul class="catalog__menu-sublist">
                      <li class="catalog__menu-item active">
                        <div class="catalog__menu-body">
                          <div class="catalog__menu-name">Обувь</div>
                          <span>1/3</span>
                        </div>
                        <ul class="catalog__menu-sublist"></ul>
                      </li>
                      <li class="catalog__menu-item">
                        <div class="catalog__menu-body">
                          <div class="catalog__menu-name">Свитеры</div>
                          <span>4/4</span>
                        </div>
                        <ul class="catalog__menu-sublist"></ul>
                      </li>
                    </ul>
                  </li>
                  <li class="catalog__menu-item">
                    <div class="catalog__menu-body">
                      <div class="catalog__menu-name">Для неё</div>
                      <span>14/14</span>
                    </div>
                    <ul class="catalog__menu-sublist"></ul>
                  </li>
                </ul>
              </div>
              <a class="catalog__menu-link">+ Добавить категорию</a>
            </div>
            <div class="catalog__content">
              <div class="catalog__block">
                <div class="catalog__block-top">
                  <div>
                    <div class="catalog__block-title">Обувь</div>
                    <div class="breadcrumbs">
                      <a href="#">Для него</a>
                      <a href="#">Обувь</a>
                    </div>
                  </div>
                  <a class="catalog__block-btn btn">Редактировать</a>
                </div>
              </div>
              <div class="catalog__block">
                <div class="catalog__block-top">
                  <div>
                    <div class="catalog__block-title">Товары</div>
                    <div class="breadcrumbs">
                      <a href="#">Для него</a>
                      <a href="#">Обувь</a>
                    </div>
                  </div>
                  <a class="catalog__block-btn btn">Добавить товар</a>
                </div>
                <input
                  type="search"
                  class="catalog__search"
                  placeholder="Поиск по названию и артикулу"
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
                    <p>Арт.</p>
                    <p class="catalog-actions-2">Фото</p>
                    <p class="catalog-actions-8">Название</p>
                    <p class="catalog-actions-2">Цена</p>
                    <p class="catalog-actions-2">Порядок</p>
                    <p class="catalog-actions-2">Активность</p>
                  </div>
                  <div
                    class="catalog__actions-top catalog__actions-top--pressed"
                  >
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
                      <div class="catalog__checkbox--item">
                        <div class="catalog__checkbox">
                          <input
                            class="catalog__checkbox-input"
                            type="checkbox"
                            id="check-all"
                          />
                          <label for="check-all"></label>
                        </div>
                      </div>
                      <div class="catalog__actions-art">0435</div>
                      <div class="catalog__actions-imgbox">
                        <div class="catalog__actions-img">
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </div>
                      </div>
                      <div class="catalog__actions-name">
                        Челси из натуральной кожи Henderson
                      </div>
                      <div class="catalog__actions-price">
                        <input
                          class="catalog__actions-input"
                          type="text"
                          readonly
                          value="4500"
                        />
                      </div>
                      <div class="catalog__actions-order">
                        <input
                          class="catalog__actions-input"
                          type="text"
                          readonly
                          value="2"
                        />
                      </div>
                      <div class="catalog__checkbox--trash">
                        <div class="catalog__checkbox-trash">
                          <input
                            class="catalog__checkbox-input catalog__checkbox-input--trash"
                            type="checkbox"
                            id=""
                          />
                          <label for=""
                            ><img src="@/assets/images/trash-light.svg" alt=""
                          /></label>
                        </div>
                      </div>
                    </div>
                    <div class="catalog__actions-item item-edit">
                      <div class="catalog__checkbox--item">
                        <div class="catalog__checkbox">
                          <input
                            class="catalog__checkbox-input"
                            type="checkbox"
                            id="check-all"
                          />
                          <label for="check-all"></label>
                        </div>
                      </div>
                      <div class="catalog__actions-art">052</div>
                      <div class="catalog__actions-imgbox">
                        <div class="catalog__actions-img">
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </div>
                      </div>
                      <div class="catalog__actions-name">
                        Броги коричневые из замши GEOX
                      </div>
                      <div class="catalog__actions-price">
                        <input
                          class="catalog__actions-input"
                          type="text"
                          value="1500"
                        />
                      </div>
                      <div class="catalog__actions-order">
                        <input
                          class="catalog__actions-input"
                          type="text"
                          value="1"
                        />
                      </div>
                      <div class="catalog__checkbox--trash">
                        <div class="catalog__checkbox-trash">
                          <input
                            class="catalog__checkbox-input catalog__checkbox-input--trash"
                            type="checkbox"
                            id=""
                          />
                          <label for=""
                            ><img src="@/assets/images/trash-light.svg" alt=""
                          /></label>
                        </div>
                      </div>
                    </div>
                    <div class="catalog__actions-item">
                      <div class="catalog__checkbox--item">
                        <div class="catalog__checkbox">
                          <input
                            class="catalog__checkbox-input catalog__item-checkbox"
                            type="checkbox"
                            checked
                            id="check-all"
                          />
                          <label for="check-all"></label>
                        </div>
                      </div>
                      <div class="catalog__actions-art">5567</div>
                      <div class="catalog__actions-imgbox">
                        <div class="catalog__actions-img">
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </div>
                      </div>
                      <div class="catalog__actions-name">
                        Туфли классические ECCO
                      </div>
                      <div class="catalog__actions-price">
                        <input
                          class="catalog__actions-input"
                          type="text"
                          readonly
                          value="4500"
                        />
                      </div>
                      <div class="catalog__actions-order">
                        <input
                          class="catalog__actions-input"
                          type="text"
                          readonly
                          value="8"
                        />
                      </div>
                      <div class="catalog__checkbox--trash">
                        <div class="catalog__checkbox-trash">
                          <input
                            class="catalog__checkbox-input catalog__checkbox-input--trash"
                            type="checkbox"
                            id=""
                          />
                          <label for=""
                            ><img src="@/assets/images/trash-light.svg" alt=""
                          /></label>
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
          </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>