<template>
  <div>
    <div class="container">
      <nav class="breadcrumb">
        <div v-if="categoryIsLoading" class="loading-placeholder"></div>
        <template v-else>
          <router-link :to="'/'">All categories</router-link>
          <i class="fa fa-chevron-right"></i>
          <span>{{ category.title }}</span>
        </template>
      </nav>
      <div class="content">
        <div class="sidebar">
          <div v-if="categoryIsLoading" class="loading-placeholder"></div>
          <template v-else>
            <div class="sidebar-card">
              <div class="top">
                <span class="articles-count">
                  <i class="fa fa-file"></i>
                  <span>{{ category.totalArticle }}</span>
                </span>
                <div class="icon">
                  <i :class="'fa fa-' + category.icon"></i>
                </div>
                <h2>{{ category.title }}</h2>
                <p>Last update {{ category.updatedOn | timeAgo }}</p>
              </div>
              <hr class="line-separator">
              <div class="bottom">
                <div class="info">
                  <i class="fa fa-info-circle"></i>
                  <p>{{ category.description }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="listing-area">
          <ul class="articles">
            <template v-if="articlesAreLoading">
              <li v-for="i in 5" class="loading-placeholder"></li>
            </template>
            <template v-else>
              <article-item v-for="article in publishedArticles" :key="article.id" :article="article"></article-item>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <template v-if="otherCategories.length > 0">
      <hr class="line-separator">
      <div class="other-categories-area">
        <h2 class="title">Other categories</h2>
        <div v-if="otherCategories.length <= 3" class="categories-grid">
          <category-card v-for="category in otherCategories" :key="category.id" :category="category"></category-card>
        </div>
        <Carousel :categories="otherCategories" v-else />
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import api from '@/api'
import CategoryCard from '@/components/CategoryCard.vue'
import ArticleItem from './components/ArticleItem.vue'
import Carousel from './components/Carousel.vue'

export default {
  name: "CategoryPage",
  components: {
    CategoryCard,
    ArticleItem,
    Carousel
  },
  created() {
    if (!this.haveCategories && !this.categoriesAreLoading) {
      this.fetchCategories()
    }

    this.fetchCategoryArticles(this.$route.params.id)
  },
  mounted() { },
  beforeUnmount() { },
  data() {
    return {
      articles: {
        loading: false,
        error: null,
        data: []
      }
    }
  },
  computed: {
    ...mapGetters(['categories', 'haveCategories', 'categoriesAreLoading', 'categoriesError']),
    articlesAreLoading() {
      return this.articles.loading
    },
    categoryIsLoading() {
      return !this.haveCategories || this.categoriesAreLoading
    },
    category() {
      return this.categories.find(category => category.id === this.$route.params.id)
    },
    publishedArticles() {
      return this.articles.data.filter(article => article.status === 'published')
    },
    otherCategories() {
      return this.categories.filter((category, index) => category.id !== this.$route.params.id)
    }
  },
  watch: {
    '$route.params.id': function (newId) {
      this.fetchCategoryArticles(newId)

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  methods: {
    ...mapActions(['fetchCategories']),
    fetchCategoryArticles(categoryId) {
      this.articles.loading = true
      this.articles.error = null

      setTimeout(() => {
        api.request.get(api.endpoints.categories.getArticles(categoryId))
          .then((response) => {
            this.articles.data = response.data
          })
          .catch((error) => {
            this.articles.error = error
          })
          .finally(() => {
            this.articles.loading = false
          })
      }, 1000)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 30px;
}

.breadcrumb {
  font-size: 14px;
  color: $text-black;

  i {
    margin-left: 10px;
    margin-right: 10px;
    color: $grey;
  }

  a {
    color: $green;
    text-decoration: none;

    &:hover {
      color: $green-dark;
    }
  }

  span {
    color: $text-gray;
  }

  .loading-placeholder {
    width: 210px;
    height: 30px;
  }
}

.content {
  display: flex;
  margin-top: 30px;
}

.sidebar {
  flex: 1.2;
  margin-right: 50px;

  .loading-placeholder {
    height: 350px;
  }
}

.sidebar-card {
  background: white;
  border-radius: 4px;
  box-shadow: $card-box-shadow;

  .top {
    position: relative;
    text-align: center;
    padding: 30px 20px;

    .icon {
      font-size: 40px;
      color: $green;
      margin-top: 15px;
      margin-bottom: 25px;
    }

    h2 {
      color: $text-black;
      font-size: 23px;
      font-weight: 700;
      line-height: 27.6px;
      margin: 0;
    }

    p {
      color: $text-gray;
      font-size: 11px;
      font-weight: 400;
      line-height: 22px;

    }

    .articles-count {
      position: absolute;
      top: 25px;
      right: 25px;
      color: $text-gray;
      font-size: 15px;

      i {
        color: $green;
        font-size: 16px;
      }
    }
  }

  .bottom {
    position: relative;
    text-align: center;
    padding: 20px;

    .info {
      padding-top: 10px;
      padding-bottom: 10px;

      i {
        font-size: 24px;
        color: $green;
        margin-bottom: 10px;
      }

      p {
        padding: 5px;
        text-align: center;
        color: $text-gray;
      }
    }
  }
}

.listing-area {
  flex: 3;
}

.articles {
  list-style: none;
  padding: 0;
  margin: 0;

  .loading-placeholder {
    margin-bottom: 20px;
    height: 86px;
  }
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .sidebar {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

.border-bottom-radius-0 {
  border-radius: 4px 4px 0px 0px;
}

.border-top-radius-0 {
  border-radius: 0px 0px 4px 4px;
}

.line-separator {
  border: none;
  border-top: 1px solid $border-color;
}

.articles-count {
  position: absolute;
  top: 20px;
  right: 20px;
  color: $text-gray;
  font-size: 15px;

  i {
    color: $green;
    font-size: 16px;
  }
}

.categories-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 60px;
}

.other-categories-area {
  .title {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 40px;
    color: $text-gray;
  }
}
</style>