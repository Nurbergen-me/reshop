<template>
    <div class="content">
        <div class="content__page">
          <h1 class="content__title">Менеджер свойств</h1>
          <div class="content__top">
            <div class="content__tabs">
              <a class="content__tab" :class="{'active': currentTab === 0}" @click="currentTab = 0">Свойства</a>
              <a class="content__tab" :class="{'active': currentTab === 1}" @click="currentTab = 1">Цвета</a>
            </div>
            <a class="content__save btn">Сохранить</a>
          </div>
          <div class="properties active">
				<div class="properties__list">
					<div class="properties__list-top">
						<div class="properties__list-title">Название</div>
						<div class="properties__list-title">Отображение в фильтре</div>
						<div class="properties__list-title">Отображение в карточке товара</div>
						<div class="properties__list-title">Порядок</div>
						<div class="properties__list-title">Активность</div>
					</div>
					<div class="properties__item">
						<div class="properties__item-name">Размер</div>
						<div class="properties__item-checkbox">
							<div class="content__form-check">
								<div class="catalog__checkbox catalog__checkbox--lg">
								  <input
									class="catalog__checkbox-input"
									type="checkbox"
								  />
								  <label></label>
								</div>
							</div>
						</div>
						<div class="properties__item-checkbox">
							<div class="content__form-check">
								<div class="catalog__checkbox catalog__checkbox--lg">
								  <input
									class="catalog__checkbox-input"
									type="checkbox"
								  />
								  <label></label>
								</div>
							</div>
						</div>
						<div class="properties__item-order"><span>2</span></div>
						<div class="properties__item-checkbox">
							<div class="content__form-check">
								<div class="catalog__checkbox catalog__checkbox--lg">
								  <input
									class="catalog__checkbox-input"
									type="checkbox"
								  />
								  <label></label>
								</div>
							</div>
						</div>
						<div class="properties__item-icon">
							<a href="" class="properties__item-delete"><img src="@/assets/images/trash-light.svg" alt=""></a>
						</div>
					</div>
					<div class="properties__item">
						<div class="properties__item-name">Материал</div>
						<div class="properties__item-checkbox">
							<div class="content__form-check">
								<div class="catalog__checkbox catalog__checkbox--lg">
								  <input
									class="catalog__checkbox-input"
									type="checkbox"
								  />
								  <label></label>
								</div>
							</div>
						</div>
						<div class="properties__item-checkbox">
							<div class="content__form-check">
								<div class="catalog__checkbox catalog__checkbox--lg">
								  <input
									class="catalog__checkbox-input"
									type="checkbox"
								  />
								  <label></label>
								</div>
							</div>
						</div>
						<div class="properties__item-order"><span>1</span></div>
						<div class="properties__item-checkbox">
							<div class="content__form-check">
								<div class="catalog__checkbox catalog__checkbox--lg">
								  <input
									class="catalog__checkbox-input"
									type="checkbox"
								  />
								  <label></label>
								</div>
							</div>
						</div>
						<div class="properties__item-icon">
							<a href="" class="properties__item-delete"><img src="@/assets/images/trash-light.svg" alt=""></a>
						</div>
					</div>
					<div class="properties__item">
						<div class="properties__item-name">Замок</div>
						<div class="properties__item-checkbox">
							<div class="content__form-check">
								<div class="catalog__checkbox catalog__checkbox--lg">
								  <input
									class="catalog__checkbox-input"
									type="checkbox"
								  />
								  <label></label>
								</div>
							</div>
						</div>
						<div class="properties__item-checkbox">
							<div class="content__form-check">
								<div class="catalog__checkbox catalog__checkbox--lg">
								  <input
									class="catalog__checkbox-input"
									type="checkbox"
								  />
								  <label></label>
								</div>
							</div>
						</div>
						<div class="properties__item-order"><span>9</span></div>
						<div class="properties__item-checkbox">
							<div class="content__form-check">
								<div class="catalog__checkbox catalog__checkbox--lg">
								  <input
									class="catalog__checkbox-input"
									type="checkbox"
								  />
								  <label></label>
								</div>
							</div>
						</div>
						<div class="properties__item-icon">
							<a href="" class="properties__item-delete"><img src="@/assets/images/trash-light.svg" alt=""></a>
						</div>
					</div>
				</div>
				<div class="accordion__add">+ добавить</div>
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
                  <div class="catalog__amount-select">10</div>
                </div>
              </div>
            </div>
            <div class="properties">
              <div class="properties__list">
                <div class="properties__list-top">
                  <div class="properties__list-title">Название</div>
                  <div class="properties__list-title properties__list-title--left">Код цвета</div>
                  <div class="properties__list-title">Иконка </div>
                  <div class="properties__list-title">Порядок</div>
                  <div class="properties__list-title">Активность</div>
                </div>
                <div class="properties__item">
                  <div class="properties__item-name">Белый</div>
                  <div class="properties__item-name">#000000</div>
                  <div class="properties__item-download">
                    <div class="properties__item-download--start">
                      <img src="@/assets/images/download.svg" alt="">
                    </div>
                    <div class="properties__item-download--pressed">
                      <img src="@/assets/images/dowload-img.svg" alt="">
                      <a class="properties__item-download--close">
                        <img src="@/assets/images/close-cat.svg" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="properties__item-order"><span>2</span></div>
                  <div class="properties__item-checkbox">
                    <div class="content__form-check">
                      <div class="catalog__checkbox catalog__checkbox--lg">
                        <input
                        class="catalog__checkbox-input"
                        type="checkbox"
                        />
                        <label></label>
                      </div>
                    </div>
                  </div>
                  <div class="properties__item-icon">
                    <a href="" class="properties__item-delete"><img src="@/assets/images/trash-light.svg" alt=""></a>
                  </div>
                </div>
                <div class="properties__item">
                  <div class="properties__item-name">Красный</div>
                  <div class="properties__item-name">#000000</div>
                  <div class="properties__item-download">
                    <div class="properties__item-download--start">
                      <img src="@/assets/images/download.svg" alt="">
                    </div>
                    <div class="properties__item-download--pressed">
                      <img src="@/assets/images/dowload-img.svg" alt="">
                      <a class="properties__item-download--close">
                        <img src="@/assets/images/close-cat.svg" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="properties__item-order"><span>1</span></div>
                  <div class="properties__item-checkbox">
                    <div class="content__form-check">
                      <div class="catalog__checkbox catalog__checkbox--lg">
                        <input
                        class="catalog__checkbox-input"
                        type="checkbox"
                        />
                        <label></label>
                      </div>
                    </div>
                  </div>
                  <div class="properties__item-icon">
                    <a href="" class="properties__item-delete"><img src="@/assets/images/trash-light.svg" alt=""></a>
                  </div>
                </div>
                <div class="properties__item">
                  <div class="properties__item-name">В полоску</div>
                  <div class="properties__item-name">#000000</div>
                  <div class="properties__item-download pressed">
                    <div class="properties__item-download--start">
                      <img src="@/assets/images/download.svg" alt="">
                    </div>
                    <div class="properties__item-download--pressed">
                      <img src="@/assets/images/dowload-img.svg" alt="">
                      <a class="properties__item-download--close">
                        <img src="@/assets/images/close-cat.svg" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="properties__item-order"><span>9</span></div>
                  <div class="properties__item-checkbox">
                    <div class="content__form-check">
                      <div class="catalog__checkbox catalog__checkbox--lg">
                        <input
                        class="catalog__checkbox-input"
                        type="checkbox"
                        />
                        <label></label>
                      </div>
                    </div>
                  </div>
                  <div class="properties__item-icon">
                    <a href="" class="properties__item-delete"><img src="@/assets/images/trash-light.svg" alt=""></a>
                  </div>
                </div>
              </div>
              <div class="accordion__add">+ добавить</div>
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
                        <div class="catalog__amount-select">10</div>
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