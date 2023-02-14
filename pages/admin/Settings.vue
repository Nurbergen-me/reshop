<template>
    <div class="content">
        <div class="content__page">
          <div class="setting">
            <h1 class="content__title">Настройки</h1>
            <div class="content__top">
              <div class="content__tabs">
                <a class="content__tab" :class="{'active': currentTab === 0}" @click="currentTab = 0">Основные настройки</a>
                <a class="content__tab" :class="{'active': currentTab === 1}" @click="currentTab = 1">Контакты</a>
                <a class="content__tab" :class="{'active': currentTab === 2}" @click="currentTab = 2">Доставка</a>
                <a class="content__tab" :class="{'active': currentTab === 3}" @click="currentTab = 3">Оплата</a>
                <a class="content__tab" :class="{'active': currentTab === 4}" @click="currentTab = 4">Меню</a>
                <a class="content__tab" :class="{'active': currentTab === 5}" @click="currentTab = 5">Страница успеха</a>
                <a class="content__tab" :class="{'active': currentTab === 6}" @click="currentTab = 6">Страница 404</a>
              </div>
              <a class="content__save btn">Сохранить</a>
            </div>
            <div class="content__body" v-if="currentTab === 0">
              <form class="content__form">
                <div class="content__form-field">
                  <label class="content__form-label">Название магазина</label>
                  <input type="text" class="content__form-input" />
                </div>
                <div class="content__form-field">
                  <label class="content__form-label">URL магазина</label>
                  <input type="text" class="content__form-input" />
                </div>
                <div class="content__form-field">
                  <label class="content__form-label"
                    >Логотип на главной странице</label
                  >
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
                <div class="content__form-field">
                  <label class="content__form-label">Favicon</label>
                  <div class="add-img">
                    <label class="add-img__label add-img__label--favicon">
                      <input class="add-img__input" type="file" />
                      <img src="@/assets/images/admin-sm-img.svg" alt="" />
                    </label>
                    <a class="content__form-link">Загрузить изображение</a>
                    <a class="content__form-link">Удалить</a>
                  </div>
                </div>
              </form>
            </div>
            <div class="content__body" v-if="currentTab === 1">
              <div class="accordion">
                <div class="accordion__item active">
                  <div class="accordion__top">
                    <div class="accordion__top-left">
                      <div class="accordion__name">Уфа</div>
                      <a class="accordion__edit">
                        <img src="@/assets/images/accordion-pen.svg" alt="" />
                      </a>
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
                    <div class="content__form">
                      <div class="content__form-field">
                        <label class="content__form-label">Телефон</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Адрес</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Режим работы</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label"
                          >Тelegram (логин)</label
                        >
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label"
                          >Whats’app (номер)</label
                        >
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Фотографии</label>
                        <div class="add-photos">
                          <div class="add-photos__img">
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                            <div class="add-photos__actions">
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-pen.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-eye.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-trash.svg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="add-photos__img">
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                            <div class="add-photos__actions">
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-pen.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-eye.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-trash.svg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="add-photos__img">
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                            <div class="add-photos__actions">
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-pen.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-eye.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-trash.svg"
                                  alt=""
                                />
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
                  </div>
                </div>
                <div class="accordion__item">
                  <div class="accordion__top">
                    <div class="accordion__top-left">
                      <div class="accordion__name">Казань</div>
                      <a class="accordion__edit">
                        <img src="@/assets/images/accordion-pen.svg" alt="" />
                      </a>
                    </div>
                    <div class="accordion__top-actions">
                      <a class="accordion__top-action">Вверх</a>
                      <a class="accordion__top-action">Вниз</a>
                      <a class="accordion__top-action close"
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
                    <div class="content__form">
                      <div class="content__form-field">
                        <label class="content__form-label">Телефон</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Адрес</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Режим работы</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label"
                          >Тelegram (логин)</label
                        >
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label"
                          >Whats’app (номер)</label
                        >
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Фотографии</label>
                        <div class="add-photos">
                          <div class="add-photos__img">
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                            <div class="add-photos__actions">
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-pen.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-eye.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-trash.svg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="add-photos__img">
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                            <div class="add-photos__actions">
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-pen.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-eye.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-trash.svg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="add-photos__img">
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                            <div class="add-photos__actions">
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-pen.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-eye.svg"
                                  alt=""
                                />
                              </a>
                              <a class="add-photos__action">
                                <img
                                  src="@/assets/images/photo-trash.svg"
                                  alt=""
                                />
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
                  </div>
                </div>
                <a class="accordion__add"> + добавить</a>
              </div>
            </div>
            <div class="content__body" v-if="currentTab === 2">
              <div class="accordion">
                <div class="accordion__item active">
                  <div class="accordion__top">
                    <div class="accordion__top-left">
                      <div class="accordion__name">Курьером</div>
                      <a class="accordion__edit">
                        <img src="@/assets/images/accordion-pen.svg" alt="" />
                      </a>
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
                    <div class="content__form">
                      <div class="content__form-field">
                        <label class="content__form-label"
                          >Активно для городов:</label
                        >
                        <div class="cities">
                          <div class="cities__item">
                            <p class="cities__item-text">Уфа</p>
                            <a class="cities__item-close">
                              <img src="@/assets/images/close-city.svg" alt="" />
                            </a>
                          </div>
                          <div class="cities__item">
                            <p class="cities__item-text">Казань</p>
                            <a class="cities__item-close">
                              <img src="@/assets/images/close-city.svg" alt="" />
                            </a>
                          </div>
                          <a class="add__city"
                            ><img src="@/assets/images/white-close.svg" alt=""
                          /></a>
                        </div>
                      </div>

                      <div class="content__form-field">
                        <label class="content__form-label">Заголовок</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Описание</label>
                        <textarea class="content__form-textarea"></textarea>
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Срок доставки</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Цена, руб</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Иконка</label>
                        <div class="add-img">
                          <label class="add-img__label add-img__label--favicon">
                            <input class="add-img__input" type="file" />
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                          </label>
                          <a class="content__form-link"
                            >Загрузить изображение</a
                          >
                          <a class="content__form-link">Удалить</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion__item">
                  <div class="accordion__top">
                    <div class="accordion__top-left">
                      <div class="accordion__name">Самовывоз</div>
                      <a class="accordion__edit">
                        <img src="@/assets/images/accordion-pen.svg" alt="" />
                      </a>
                    </div>
                    <div class="accordion__top-actions">
                      <a class="accordion__top-action">Вверх</a>
                      <a class="accordion__top-action">Вниз</a>
                      <a class="accordion__top-action close"
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
                    <div class="content__form">
                      <div class="content__form-field">
                        <label class="content__form-label"
                          >Активно для городов:</label
                        >
                        <div class="cities">
                          <div class="cities__item">
                            <p class="cities__item-text">Уфа</p>
                            <a class="cities__item-close">
                              <img src="@/assets/images/close-city.svg" alt="" />
                            </a>
                          </div>
                          <div class="cities__item">
                            <p class="cities__item-text">Казань</p>
                            <a class="cities__item-close">
                              <img src="@/assets/images/close-city.svg" alt="" />
                            </a>
                          </div>
                          <a class="add__city"
                            ><img src="@/assets/images/white-close.svg" alt=""
                          /></a>
                        </div>
                      </div>

                      <div class="content__form-field">
                        <label class="content__form-label">Заголовок</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Описание</label>
                        <textarea class="content__form-textarea"></textarea>
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Срок доставки</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Цена, руб</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Иконка</label>
                        <div class="add-img">
                          <label class="add-img__label add-img__label--favicon">
                            <input class="add-img__input" type="file" />
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                          </label>
                          <a class="content__form-link"
                            >Загрузить изображение</a
                          >
                          <a class="content__form-link">Удалить</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="accordion__add"> + добавить</a>
              </div>
            </div>
            <div class="content__body" v-if="currentTab === 3">
              <div class="accordion">
                <div class="accordion__item active">
                  <div class="accordion__top">
                    <div class="accordion__top-left">
                      <div class="accordion__name">Самовывоз</div>
                      <a class="accordion__edit">
                        <img src="@/assets/images/accordion-pen.svg" alt="" />
                      </a>
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
                    <div class="content__form">
                      <div class="content__form-field">
                        <label class="content__form-label"
                          >Активно для городов:</label
                        >
                        <div class="cities">
                          <div class="cities__item">
                            <p class="cities__item-text">Уфа</p>
                            <a class="cities__item-close">
                              <img src="@/assets/images/close-city.svg" alt="" />
                            </a>
                          </div>
                          <div class="cities__item">
                            <p class="cities__item-text">Казань</p>
                            <a class="cities__item-close">
                              <img src="@/assets/images/close-city.svg" alt="" />
                            </a>
                          </div>
                          <a class="add__city"
                            ><img src="@/assets/images/white-close.svg" alt=""
                          /></a>
                        </div>
                      </div>

                      <div class="content__form-field">
                        <label class="content__form-label">Заголовок</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Описание</label>
                        <textarea class="content__form-textarea"></textarea>
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Наценка, %</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Иконка</label>
                        <div class="add-img">
                          <label class="add-img__label add-img__label--favicon">
                            <input class="add-img__input" type="file" />
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                          </label>
                          <a class="content__form-link"
                            >Загрузить изображение</a
                          >
                          <a class="content__form-link">Удалить</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion__item">
                  <div class="accordion__top">
                    <div class="accordion__top-left">
                      <div class="accordion__name">Оплата картой</div>
                      <a class="accordion__edit">
                        <img src="@/assets/images/accordion-pen.svg" alt="" />
                      </a>
                    </div>
                    <div class="accordion__top-actions">
                      <a class="accordion__top-action">Вверх</a>
                      <a class="accordion__top-action">Вниз</a>
                      <a class="accordion__top-action close"
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
                    <div class="content__form">
                      <div class="content__form-field">
                        <label class="content__form-label"
                          >Активно для городов:</label
                        >
                        <div class="cities">
                          <div class="cities__item">
                            <p class="cities__item-text">Уфа</p>
                            <a class="cities__item-close">
                              <img src="@/assets/images/close-city.svg" alt="" />
                            </a>
                          </div>
                          <div class="cities__item">
                            <p class="cities__item-text">Казань</p>
                            <a class="cities__item-close">
                              <img src="@/assets/images/close-city.svg" alt="" />
                            </a>
                          </div>
                          <a class="add__city"
                            ><img src="@/assets/images/white-close.svg" alt=""
                          /></a>
                        </div>
                      </div>

                      <div class="content__form-field">
                        <label class="content__form-label">Заголовок</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Описание</label>
                        <textarea class="content__form-textarea"></textarea>
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Наценка, %</label>
                        <input type="text" class="content__form-input" />
                      </div>
                      <div class="content__form-field">
                        <label class="content__form-label">Иконка</label>
                        <div class="add-img">
                          <label class="add-img__label add-img__label--favicon">
                            <input class="add-img__input" type="file" />
                            <img src="@/assets/images/admin-sm-img.svg" alt="" />
                          </label>
                          <a class="content__form-link"
                            >Загрузить изображение</a
                          >
                          <a class="content__form-link">Удалить</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="accordion__add"> + добавить</a>
              </div>
            </div>
            <div class="content__body" v-if="currentTab === 4">
              <div class="content__tabs">
                <a class="content__tab active">Верхнее меню в шапке</a>
                <a class="content__tab">Нижнее меню в шапке</a>
                <a class="content__tab">Боковое меню</a>
                <a class="content__tab">Меню в подвале</a>
              </div>

              <ul class="content__list">
                <li class="content__list-item">
                  <div class="accordion__item active">
                    <div class="accordion__top">
                      <div class="accordion__top-left">
                        <a class="accordion__drag">
                          <img src="@/assets/images/menu-dots.svg" alt="" />
                        </a>
                        <div class="accordion__name">О компании</div>
                        <a class="accordion__edit">
                          <img src="@/assets/images/accordion-pen.svg" alt="" />
                        </a>
                      </div>
                      <div class="accordion__top-actions">
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action close"
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
                      <div class="content__form">
                        <div class="content__form-field">
                          <label
                            class="content__form-label content__form-label--sm"
                            >Заголовок</label
                          >
                          <input
                            type="text"
                            class="content__form-input content__form-input--sm"
                          />
                          <div class="content__switcher">
                            <input
                              checked
                              id="mark1"
                              type="checkbox"
                              class="content__switcher-checkbox"
                            />
                            <label for="mark1" class="content__switcher-label"
                              >Выделить цветом</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="content__sublist"></ul>
                </li>
                <li class="content__list-item">
                  <div class="accordion__item">
                    <div class="accordion__top">
                      <div class="accordion__top-left">
                        <a class="accordion__drag">
                          <img src="@/assets/images/menu-dots.svg" alt="" />
                        </a>
                        <div class="accordion__name">Аренда одежды</div>
                        <a class="accordion__edit">
                          <img src="@/assets/images/accordion-pen.svg" alt="" />
                        </a>
                      </div>
                      <div class="accordion__top-actions">
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action close"
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
                      <div class="content__form">
                        <div class="content__form-field">
                          <label
                            class="content__form-label content__form-label--sm"
                            >Заголовок</label
                          >
                          <input
                            type="text"
                            class="content__form-input content__form-input--sm"
                          />
                          <div class="content__switcher">
                            <input
                              checked
                              id="mark2"
                              type="checkbox"
                              class="content__switcher-checkbox"
                            />
                            <label for="mark2" class="content__switcher-label"
                              >Выделить цветом</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="content__sublist">
                    <li class="content__list-item">
                      <div class="accordion__item">
                        <div class="accordion__top">
                          <div class="accordion__top-left">
                            <a class="accordion__drag">
                              <img src="@/assets/images/menu-dots.svg" alt="" />
                            </a>
                            <div class="accordion__name">
                              Дочерний пункт меню
                            </div>
                            <a class="accordion__edit">
                              <img
                                src="@/assets/images/accordion-pen.svg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div class="accordion__top-actions">
                            <a class="accordion__top-action">Вверх</a>
                            <a class="accordion__top-action">Вниз</a>
                            <a class="accordion__top-action close"
                              ><img src="@/assets/images/eye-light.svg" alt=""
                            /></a>
                            <a class="accordion__top-action"
                              ><img src="@/assets/images/trash-light.svg" alt=""
                            /></a>
                            <a class="accordion__top-action collapse"
                              ><img
                                src="@/assets/images/arrow-up-light.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                        <div class="accordion__body">
                          <div class="content__form">
                            <div class="content__form-field">
                              <label
                                class="content__form-label content__form-label--sm"
                                >Заголовок</label
                              >
                              <input
                                type="text"
                                class="content__form-input content__form-input--sm"
                              />
                              <div class="content__switcher">
                                <input
                                  checked
                                  id="mark3"
                                  type="checkbox"
                                  class="content__switcher-checkbox"
                                />
                                <label
                                  for="mark3"
                                  class="content__switcher-label"
                                  >Выделить цветом</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul class="content__sublist"></ul>
                    </li>
                  </ul>
                </li>
                <li class="content__list-item">
                  <div class="accordion__item">
                    <div class="accordion__top">
                      <div class="accordion__top-left">
                        <a class="accordion__drag">
                          <img src="@/assets/images/menu-dots.svg" alt="" />
                        </a>
                        <div class="accordion__name">Как это работает</div>
                        <a class="accordion__edit">
                          <img src="@/assets/images/accordion-pen.svg" alt="" />
                        </a>
                      </div>
                      <div class="accordion__top-actions">
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action close"
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
                      <div class="content__form">
                        <div class="content__form-field">
                          <label
                            class="content__form-label content__form-label--sm"
                            >Заголовок</label
                          >
                          <input
                            type="text"
                            class="content__form-input content__form-input--sm"
                          />
                          <div class="content__switcher">
                            <input
                              checked
                              id="mark4"
                              type="checkbox"
                              class="content__switcher-checkbox"
                            />
                            <label for="mark4" class="content__switcher-label"
                              >Выделить цветом</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="content__sublist"></ul>
                </li>
                <li class="content__list-item">
                  <div class="accordion__item">
                    <div class="accordion__top">
                      <div class="accordion__top-left">
                        <a class="accordion__drag">
                          <img src="@/assets/images/menu-dots.svg" alt="" />
                        </a>
                        <div class="accordion__name">Как сдать одежду</div>
                        <a class="accordion__edit">
                          <img src="@/assets/images/accordion-pen.svg" alt="" />
                        </a>
                      </div>
                      <div class="accordion__top-actions">
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action close"
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
                      <div class="content__form">
                        <div class="content__form-field">
                          <label
                            class="content__form-label content__form-label--sm"
                            >Заголовок</label
                          >
                          <input
                            type="text"
                            class="content__form-input content__form-input--sm"
                          />
                          <div class="content__switcher">
                            <input
                              checked
                              id="mark5"
                              type="checkbox"
                              class="content__switcher-checkbox"
                            />
                            <label for="mark5" class="content__switcher-label"
                              >Выделить цветом</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="content__sublist"></ul>
                </li>
                <li class="content__list-item">
                  <div class="accordion__item">
                    <div class="accordion__top">
                      <div class="accordion__top-left">
                        <a class="accordion__drag">
                          <img src="@/assets/images/menu-dots.svg" alt="" />
                        </a>
                        <div class="accordion__name">Доставка и оплата</div>
                        <a class="accordion__edit">
                          <img src="@/assets/images/accordion-pen.svg" alt="" />
                        </a>
                      </div>
                      <div class="accordion__top-actions">
                        <a class="accordion__top-action">Вверх</a>
                        <a class="accordion__top-action">Вниз</a>
                        <a class="accordion__top-action close"
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
                      <div class="content__form">
                        <div class="content__form-field">
                          <label
                            class="content__form-label content__form-label--sm"
                            >Заголовок</label
                          >
                          <input
                            type="text"
                            class="content__form-input content__form-input--sm"
                          />
                          <div class="content__switcher">
                            <input
                              checked
                              id="mark6"
                              type="checkbox"
                              class="content__switcher-checkbox"
                            />
                            <label for="mark6" class="content__switcher-label"
                              >Выделить цветом</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="content__sublist"></ul>
                </li>
                <a class="accordion__add"> + добавить</a>
              </ul>
            </div>
            <div class="content__body" v-if="currentTab === 5">
              <form class="content__form">
                <div class="content__form-field">
                  <label class="content__form-label">Заголовок</label>
                  <input
                    type="text"
                    class="content__form-input"
                    placeholder="Спасибо за покупку"
                  />
                </div>
                <div class="content__form-field">
                  <label class="content__form-label">Описание</label>
                  <textarea
                    class="content__form-textarea"
                    placeholder="Мы отправили данные заказа..."
                  ></textarea>
                </div>
                <div class="content__form-field">
                  <label class="content__form-label">Текст около таймера</label>
                  <input
                    type="text"
                    class="content__form-input"
                    placeholder="Специально для вас, действует 15 минут"
                  />
                </div>
                <div class="content__form-field">
                  <label class="content__form-label">Таймер, мин</label>
                  <input
                    type="text"
                    class="content__form-input"
                    placeholder="15"
                  />
                </div>
              </form>
              <div class="accordion accordion-special">
                <div class="accordion__item active">
                  <div class="accordion__top">
                    <div class="accordion__top-left">
                      <div class="accordion__name">Спецпредложение</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    layout: 'AdminLayout',
    name: 'Settings',

    data() {
      return {
        currentTab: 0
      }
    }
}
</script>

<style>

</style>