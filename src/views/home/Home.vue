<template>
  <div class="container">
    <div v-if="categoriesAreLoading" class="loading-area">
      <category-card-placeholder v-for="i in 6" :key="i"></category-card-placeholder>
    </div>
    <div v-else-if="categoriesError" class="error-area">
      <div class="card error-card">
        <h4>
          <i class="fa fa-exclamation"></i> 
          {{ categoriesError.message }}
        </h4>
      </div>
    </div>
    <div v-else-if="haveCategories" class="categories-grid">
      <category-card v-for="category in categories" :key="category.id" :category="category"></category-card>
    </div>
    <div v-else class="empty-results-area">
      <div class="card empty-results-card">
        <h4>
          <i class="fa fa-exclamation"></i> 
          Don't have categories
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import CategoryCardPlaceholder from '@/components/CategoryCardPlaceholder.vue'
  import CategoryCard from '@/components/CategoryCard.vue'

  export default {
		name: "Home",
    components: {
      CategoryCardPlaceholder,
      CategoryCard
    },
    created () {
      if (!this.haveCategories && !this.categoriesAreLoading) {
        this.fetchCategories()
      }
    },
    mounted () {},
    beforeUnmount() {},
    data () {
      return {
				query: '',
			}
    },
    computed: {
      ...mapGetters(['categories', 'haveCategories', 'categoriesAreLoading', 'categoriesError']),
    },
    watch: {},
    methods: {
      ...mapActions(['fetchCategories'])
    },
	}
</script>

<style lang="scss" scoped>
	@import '@/scss/_variables.scss';

  .container {
    max-width: 1200px;
    padding: 60px 30px;
  }

  .loading-area {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .error-area {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 0 130px;
  }

  .categories-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .empty-results-area {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 0 130px;
  }

  .card {
    flex: 1 0;
    height: 355px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h4 {
      color: $text-gray;

      i {
        margin-right: 5px;
      }
    }
  }

  @media (max-width: 768px) {
    .error-area {
      padding: 0 20px;
    }

    .empty-results-area {
      padding: 0 20px;
    }
  }
</style>
