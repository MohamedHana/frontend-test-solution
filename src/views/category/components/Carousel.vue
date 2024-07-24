<template>
  <div class="carousel" :class="screenSizeClass">
    <div class="carousel-nav nav-prev">
      <button class="arrow-button" :disabled="isFirstPage" @click="() => page--">
        <i :class="'fa fa-chevron-left'"></i>
      </button>
    </div>
    <div class="categories-grid" :class="screenSizeClass">
      <category-card v-for="index in visibleCategoryIndexes" :key="categories[index].id"
        :category="categories[index]"></category-card>
    </div>
    <div class="carousel-nav nav-next">
      <button class="arrow-button" :disabled="isLastPage" @click="() => page++">
        <i :class="'fa fa-chevron-right'"></i>
      </button>
    </div>
  </div>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue'

export default {
  name: "Carousel",
  components: {
    CategoryCard
  },
  created() { },
  mounted() {
    window.onresize = this.onWindowResize
  },
  beforeUnmount() { },
  props: {
    categories: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      loading: false,
      category: null,
      error: null,
      screen: {
        width: window.innerWidth
      },
      page: 0,
    }
  },
  computed: {
    categoriesLength() {
      return this.categories.length
    },
    screenSizeClass() {
      if (this.screen.width >= 1200) {
        return 'lg'
      }
      else if (this.screen.width >= 860) {
        return 'md'
      }
      else {
        return 'sm'
      }
    },
    numberOfCards() {
      if (this.screen.width >= 1200) {
        return 3
      }
      else if (this.screen.width >= 860) {
        return 2
      }
      else {
        return 1
      }
    },
    numberOfPages() {
      return Math.ceil(this.categoriesLength / this.numberOfCards)
    },
    visibleCategoryIndexes() {
      let indexes = []

      for (let index = 0; index < this.numberOfCards; index++) {
        indexes.push(this.page + index)
      }

      return indexes
    },
    isFirstPage() {
      return this.page == 0
    },
    isLastPage() {
      return this.page == this.numberOfPages - 1
    }
  },
  watch: {},
  methods: {
    onWindowResize() {
      this.screen.width = window.innerWidth
    },
  },
}
</script>


<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.carousel {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 25px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;

  &.sm {
    flex-direction: column;
  }
}

.categories-grid {
  display: flex;
  gap: 20px;
  justify-content: center;

  &.lg {
    width: 1040px;
  }

  &.md {
    width: 720px;
  }

  &.sm {
    width: 1040px;
  }
}

.arrow-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  font-size: 20px;
  color: #a0a0a0;
  border: none;
  outline: none;

  &:disabled {
    background-color: #f0f0f0;
    color: #c0c0c0;
    box-shadow: none;
    cursor: not-allowed;
  }
}

.arrow-button:not(:disabled):hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
