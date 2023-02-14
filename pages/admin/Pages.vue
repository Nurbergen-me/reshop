<template>
    <div class="content">
        <div class="content__page">
          <h1 class="content__title">Страница “Всё”</h1>
          <div class="content__top">
            <div class="content__tabs">
              <a class="content__tab" :class="{'active': currentTab === 0}" @click="currentTab = 0">Для него</a>
              <a class="content__tab" :class="{'active': currentTab === 1}" @click="currentTab = 1">Для неё</a>
            </div>
            <a class="content__save btn">Сохранить</a>
          </div>
          <div class="content__body active">
            <div class="accordion">
              <div class="accordion__item active">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Популярные бренды</div>
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
                  <form class="content__form">
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                        >Ссылка:</label
                      >
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                      ></label>
                      <div class="content__form-link">Выбрать категорию</div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Одежда</div>
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
                  <form class="content__form">
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                        >Ссылка:</label
                      >
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                      ></label>
                      <div class="content__form-link">Выбрать категорию</div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Обувь</div>
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
                  <form class="content__form">
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                        >Ссылка:</label
                      >
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                      ></label>
                      <div class="content__form-link">Выбрать категорию</div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Верхняя одежда</div>
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
                  <form class="content__form">
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                        >Ссылка:</label
                      >
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                      ></label>
                      <div class="content__form-link">Выбрать категорию</div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Аксессуары</div>
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
                  <form class="content__form">
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                        >Ссылка:</label
                      >
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                      ></label>
                      <div class="content__form-link">Выбрать категорию</div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="accordion__item">
                <div class="accordion__top">
                  <div class="accordion__top-left">
                    <div class="accordion__name">Распродажа</div>
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
                  <form class="content__form">
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                        >Ссылка:</label
                      >
                      <input type="text" class="content__form-input" />
                    </div>
                    <div class="content__form-field">
                      <label
                        class="content__form-label content__form-label--light"
                      ></label>
                      <div class="content__form-link">Выбрать категорию</div>
                    </div>
                  </form>
                </div>
              </div>
              <a class="accordion__add"> + добавить</a>
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