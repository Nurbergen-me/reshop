<template>
    <div class="content">
        <div class="content__page">
          <h1 class="content__title">Главная</h1>
          <div class="content__top">
            <div class="content__tabs">
              <a class="content__tab" :class="{'active': currentTab === 0}" @click="currentTab = 0">Слайдер</a>
              <a class="content__tab" :class="{'active': currentTab === 1}" @click="currentTab = 1">Подборки</a>
              <a class="content__tab" :class="{'active': currentTab === 2}" @click="currentTab = 2">Reshop - это</a>
              <a class="content__tab" :class="{'active': currentTab === 3}" @click="currentTab = 3">Как это работает?</a>
              <a class="content__tab" :class="{'active': currentTab === 4}" @click="currentTab = 4">Почему мы берем комиссию?</a>
              <a class="content__tab" :class="{'active': currentTab === 5}" @click="currentTab = 5">Отзывы</a>
              <a class="content__tab" :class="{'active': currentTab === 6}" @click="currentTab = 6">SEO</a>
            </div>
            <a class="content__save btn">Сохранить</a>
          </div>
          <div class="content__body" v-if="currentTab === 0">
            <div class="accordion">
              <div class="accordion__item active">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Слайд 1</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action"
                      ><img src="@/assets/images/trash-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input
                        type="text"
                        class="content__form-input content__form-input--lg"
                      />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Название кнопки</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label"
                        >Ссылка для кнопки</label
                      >
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Картинка</label>
                      <div class="add-img">
                        <label class="add-img__label">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-big-img.svg" alt="" />
                        </label>
                        <a class="content__form-link">Загрузить изображение</a>
                        <a class="content__form-link">Редактировать</a>
                        <a class="content__form-link">Удалить</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Слайд 2</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action"
                      ><img src="@/assets/images/trash-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Название кнопки</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label"
                        >Ссылка для кнопки</label
                      >
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Картинка</label>
                      <div class="add-img">
                        <label class="add-img__label">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-big-img.svg" alt="" />
                        </label>
                        <a class="content__form-link">Загрузить изображение</a>
                        <a class="content__form-link">Редактировать</a>
                        <a class="content__form-link">Удалить</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <a class="accordion__add"> + добавить</a>
            </div>
          </div>
          <div class="content__body" v-if="currentTab === 1">
            <div class="accordion accordion-special">
              <div class="accordion__item active">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Новинки</div>
                    <a class="accordion__edit">
                      <img src="@/assets/images/accordion-pen.svg" alt="" />
                    </a>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <div class="content__products">
                    <div class="content__products-item">
                      <div class="content__products-left">
                        <div class="content__products-img">
                          <img src="" alt="" />
                        </div>
                        <div class="content__products-info">
                          <div class="content__products-name">
                            Мужская рубашка Mustang
                          </div>
                          <div class="content__products-price">1500p</div>
                        </div>
                      </div>
                      <div
                        class="accordion__top-actions accordion__top-actions--products"
                      >
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/eye-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                    <div class="content__products-item">
                      <div class="content__products-left">
                        <div class="content__products-img">
                          <img src="" alt="" />
                        </div>
                        <div class="content__products-info">
                          <div class="content__products-name">
                            Мужская рубашка Mustang
                          </div>
                          <div class="content__products-price">1500p</div>
                        </div>
                      </div>
                      <div
                        class="accordion__top-actions accordion__top-actions--products"
                      >
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/eye-light.svg" alt=""
                        /></a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/trash-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                    <div class="content__products-item">
                      <div class="content__products-left">
                        <div class="content__products-img">
                          <img src="" alt="" />
                        </div>
                        <div class="content__products-info">
                          <div class="content__products-name">
                            Мужская рубашка Mustang
                          </div>
                          <div class="content__products-price">1500p</div>
                        </div>
                      </div>
                      <div
                        class="accordion__top-actions accordion__top-actions--products"
                      >
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/eye-light.svg" alt=""
                        /></a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/trash-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                    <a class="accordion__add"> + добавить</a>
                  </div>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">ТОП за неделю</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <div class="content__products">
                    <div class="content__products-item">
                      <div class="content__products-left">
                        <div class="content__products-img">
                          <img src="" alt="" />
                        </div>
                        <div class="content__products-info">
                          <div class="content__products-name">
                            Мужская рубашка Mustang
                          </div>
                          <div class="content__products-price">1500p</div>
                        </div>
                      </div>
                      <div
                        class="accordion__top-actions accordion__top-actions--products"
                      >
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/eye-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                    <div class="content__products-item">
                      <div class="content__products-left">
                        <div class="content__products-img">
                          <img src="" alt="" />
                        </div>
                        <div class="content__products-info">
                          <div class="content__products-name">
                            Мужская рубашка Mustang
                          </div>
                          <div class="content__products-price">1500p</div>
                        </div>
                      </div>
                      <div
                        class="accordion__top-actions accordion__top-actions--products"
                      >
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/eye-light.svg" alt=""
                        /></a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/trash-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                    <div class="content__products-item">
                      <div class="content__products-left">
                        <div class="content__products-img">
                          <img src="" alt="" />
                        </div>
                        <div class="content__products-info">
                          <div class="content__products-name">
                            Мужская рубашка Mustang
                          </div>
                          <div class="content__products-price">1500p</div>
                        </div>
                      </div>
                      <div
                        class="accordion__top-actions accordion__top-actions--products"
                      >
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/eye-light.svg" alt=""
                        /></a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/trash-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                    <a class="accordion__add"> + добавить</a>
                  </div>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Премиум</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <div class="content__products">
                    <div class="content__products-item">
                      <div class="content__products-left">
                        <div class="content__products-img">
                          <img src="" alt="" />
                        </div>
                        <div class="content__products-info">
                          <div class="content__products-name">
                            Мужская рубашка Mustang
                          </div>
                          <div class="content__products-price">1500p</div>
                        </div>
                      </div>
                      <div
                        class="accordion__top-actions accordion__top-actions--products"
                      >
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/eye-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                    <div class="content__products-item">
                      <div class="content__products-left">
                        <div class="content__products-img">
                          <img src="" alt="" />
                        </div>
                        <div class="content__products-info">
                          <div class="content__products-name">
                            Мужская рубашка Mustang
                          </div>
                          <div class="content__products-price">1500p</div>
                        </div>
                      </div>
                      <div
                        class="accordion__top-actions accordion__top-actions--products"
                      >
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/eye-light.svg" alt=""
                        /></a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/trash-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                    <div class="content__products-item">
                      <div class="content__products-left">
                        <div class="content__products-img">
                          <img src="" alt="" />
                        </div>
                        <div class="content__products-info">
                          <div class="content__products-name">
                            Мужская рубашка Mustang
                          </div>
                          <div class="content__products-price">1500p</div>
                        </div>
                      </div>
                      <div
                        class="accordion__top-actions accordion__top-actions--products"
                      >
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/eye-light.svg" alt=""
                        /></a>
                        <a class="accordion__top-action"
                          ><img src="@/assets/images/trash-light.svg" alt=""
                        /></a>
                      </div>
                    </div>
                    <a class="accordion__add"> + добавить</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content__body" v-if="currentTab === 2">
            <form class="content__form">
              <div class="content__form-field">
                <label class="content__form-label">Заголовок блока</label>
                <input
                  type="text"
                  class="content__form-input content__form-input--lg"
                />
              </div>
              <div class="content__form-field content__form-field--mb">
                <label class="content__form-label">Картинка 1</label>
                <div class="add-img">
                  <label class="add-img__label">
                    <input class="add-img__input" type="file" />
                    <img src="@/assets/images/admin-big-img.svg" alt="" />
                  </label>
                  <a class="content__form-link">Загрузить изображение</a>
                  <a class="content__form-link">Редактировать</a>
                  <a class="content__form-link">Удалить</a>
                </div>
              </div>
              <div class="content__form-field content__form-field--mb">
                <label class="content__form-label">Картинка 1</label>
                <div class="add-img">
                  <label class="add-img__label">
                    <input class="add-img__input" type="file" />
                    <img src="@/assets/images/admin-big-img.svg" alt="" />
                  </label>
                  <a class="content__form-link">Загрузить изображение</a>
                  <a class="content__form-link">Редактировать</a>
                  <a class="content__form-link">Удалить</a>
                </div>
              </div>
            </form>
            <div class="accordion">
              <div class="accordion__item active">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Преимущество 1</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Преимущество 2</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Преимущество 3</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Преимущество 4</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Преимущество 5</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="content__body" v-if="currentTab === 3">
            <form class="content__form">
              <div class="content__form-field">
                <label class="content__form-label">Заголовок блока</label>
                <input
                  type="text"
                  class="content__form-input content__form-input--lg"
                />
              </div>
            </form>
            <div class="content__top content__top--mt">
              <div class="content__tabs">
                <a class="content__tab active">Для продавца</a>
                <a class="content__tab">Для покупателя</a>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion__item active">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Шаг 1</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Шаг 2</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Шаг 3</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Шаг 4</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Шаг 5</div>
                  </div>
                  <div class="accordion__top-actions">
                    <a class="accordion__top-action">Вверх</a>
                    <a class="accordion__top-action">Вниз</a>
                    <a class="accordion__top-action close"
                      ><img src="@/assets/images/eye-light.svg" alt=""
                    /></a>
                    <a class="accordion__top-action collapse"
                      ><img src="@/assets/images/arrow-up-light.png" alt=""
                    /></a>
                  </div>
                </div>
                <div class="accordion__body">
                  <form class="content__form">
                    <div class="content__form-field">
                      <label class="content__form-label">Заголовок</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Описание</label>
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label class="content__form-label">Иконка</label>
                      <div class="add-img">
                        <label class="add-img__label add-img__label--favicon">
                          <input class="add-img__input" type="file" />
                          <img src="@/assets/images/admin-sm-img.svg" alt="" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="content__body" v-if="currentTab === 4">
            <form class="content__form">
              <div class="content__form-field content__form-field--mb">
                <label class="content__form-label">Заголовок блока</label>
                <input
                  type="text"
                  class="content__form-input content__form-input--lg"
                />
              </div>
              <div class="content__form-field content__form-field--mb">
                <label class="content__form-label">Описание</label>
                <textarea
                  class="content__form-textarea content__form-textarea--lg"
                ></textarea>
              </div>
              <div class="content__form-field content__form-field--mb">
                <label class="content__form-label">Картинка</label>
                <div class="add-img">
                  <label class="add-img__label">
                    <input class="add-img__input" type="file" />
                    <img src="@/assets/images/admin-big-img.svg" alt="" />
                  </label>
                  <a class="content__form-link">Загрузить изображение</a>
                  <a class="content__form-link">Редактировать</a>
                  <a class="content__form-link">Удалить</a>
                </div>
              </div>
            </form>
          </div>
          <div class="content__body" v-if="currentTab === 5">
            <form class="content__form">
              <div class="content__form-field">
                <label class="content__form-label">Заголовок блока</label>
                <input
                  type="text"
                  class="content__form-input content__form-input--lg"
                />
              </div>
              <div class="content__form-field">
                <label class="content__form-label">Подпись клиента</label>
                <input
                  type="text"
                  class="content__form-input content__form-input--lg"
                />
              </div>
              <div class="content__top">
                <div class="content__tabs">
                  <a class="content__tab">VK</a>
                  <a class="content__tab">Flamp</a>
                  <a class="content__tab">Отзовик</a>
                  <a class="content__tab">2гис</a>
                  <a class="content__tab active">Яндекс</a>
                  <a class="content__tab-edit">
                    <img src="@/assets/images/accordion-pen.svg" alt="" />
                  </a>
                </div>
              </div>
              <div class="content__tabs--light">
                <a class="content__tab--light active">Вставка кода</a>
                <a class="content__tab--light">Вставка фотографий</a>
              </div>
              <textarea
                class="content__html content__body"
                placeholder="Вставьте html-код сюда"
              ></textarea>
              <div class="content__body active">
                <div class="content__form-field">
                  <div class="add-photos">
                    <div class="add-photos__img">
                      <img src="@/assets/images/admin-sm-img.svg" alt="" />
                      <div class="add-photos__actions">
                        <a class="add-photos__action">
                          <img src="@/assets/images/photo-pen.svg" alt="" />
                        </a>
                        <a class="add-photos__action">
                          <img src="@/assets/images/photo-eye.svg" alt="" />
                        </a>
                        <a class="add-photos__action">
                          <img src="@/assets/images/photo-trash.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div class="add-photos__img">
                      <img src="@/assets/images/admin-sm-img.svg" alt="" />
                      <div class="add-photos__actions">
                        <a class="add-photos__action">
                          <img src="@/assets/images/photo-pen.svg" alt="" />
                        </a>
                        <a class="add-photos__action">
                          <img src="@/assets/images/photo-eye.svg" alt="" />
                        </a>
                        <a class="add-photos__action">
                          <img src="@/assets/images/photo-trash.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div class="add-photos__img">
                      <img src="@/assets/images/admin-sm-img.svg" alt="" />
                      <div class="add-photos__actions">
                        <a class="add-photos__action">
                          <img src="@/assets/images/photo-pen.svg" alt="" />
                        </a>
                        <a class="add-photos__action">
                          <img src="@/assets/images/photo-eye.svg" alt="" />
                        </a>
                        <a class="add-photos__action">
                          <img src="@/assets/images/photo-trash.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <label class="add-photos__label">
                      <input type="file" />
                      <img src="@/assets/images/+.svg" alt="" />
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="content__body" v-if="currentTab === 6">
            <form class="content__form">
              <div class="checkbox-light">
                <input
                  class="checkbox-light__input"
                  type="checkbox"
                  name=""
                  id="use"
                />
                <label for="use" class="content__form-ch"
                  >Использовать теги по умолчанию
                </label>
              </div>

              <div class="content__form-field">
                <label class="content__form-label content__form-label--light"
                  >Title</label
                >
                <input type="text" class="content__form-input" />
              </div>
              <div class="content__form-field">
                <label class="content__form-label content__form-label--light"
                  >H1</label
                >
                <input type="text" class="content__form-input" />
              </div>
              <div class="content__form-field">
                <label class="content__form-label content__form-label--light"
                  >Ключевые слова</label
                >
                <input type="text" class="content__form-input" />
              </div>
              <div class="content__form-field">
                <label class="content__form-label content__form-label--light"
                  >Description</label
                >
                <input type="text" class="content__form-input" />
              </div>
            </form>
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