<template>
    <section class="banner">
        <div class="container">
            <div class="banner__slider">
                <client-only placeholder="Loading...">
                    <agile @after-change="e => currentSlide = e.currentSlide">
                        <div class="banner__slide">
                            <div class="banner__slide-left">
                                <h1 class="banner__slide-title">Брендовые платья от 400р</h1>
                                <a href="#" class="banner__slide-link"
                                >Подробнее <img src="@/assets/images/Arrow 3.svg" alt=""
                                /></a>
                            </div>
                            <div class="banner__slide-right">
                                <img src="@/assets/images/slide-img.svg" alt="" />
                            </div>
                        </div>
                        <div class="banner__slide">
                            <div class="banner__slide-left">
                                <h1 class="banner__slide-title">Брендовые платья от 400р</h1>
                                <a href="#" class="banner__slide-link"
                                >Подробнее <img src="@/assets/images/Arrow 3.svg" alt=""
                                /></a>
                            </div>
                            <div class="banner__slide-right">
                                <img src="@/assets/images/slide-img.svg" alt="" />
                            </div>
                        </div>
                        <template slot="prevButton">
                            <div class="banner__slider-prev">
                                <img src="@/assets/images/slide-prev.svg" alt="" />
                            </div>
                        </template>
                        <template slot="nextButton">
                            <div class="banner__slider-next">
                                <img src="@/assets/images/slide-next.svg" alt="" />
                            </div>
                        </template>
                        <!-- <template slot="caption">{{ captions[currentSlide] }}</template> -->
                    </agile>
                </client-only>
                <div class="banner__slider-pag">
                    <div class="banner__slider-dot" :class="{'active': currentSlide === 0 }"></div>
                    <div class="banner__slider-dot" :class="{'active': currentSlide === 1 }"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
      return {
        currentSlide: 0,
        captions: [
          'This is slide 1',
          'This is the second slide',
          'This is a third and final slide',
        ]
      }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.agile--ssr .agile__slides > * {
  overflow: hidden;
  width: 0
}
.agile--ssr .agile__slides > *:first-child {
  width: 100%
}
</style>