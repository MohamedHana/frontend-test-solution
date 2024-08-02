<template>
  <div class="search-area" ref="searchArea">
    <div class="search-container" :class="{ 'box-shadow': dropdown.visible }">
      <input
        v-model.trim="query"
        type="text"
        id="search-input"
        placeholder="Search for answers"
        @keyup.enter="search"
        aria-label="Search for answers"
        aria-describedby="search-button"
        @focus="showDropdown"
        autocomplete="off"
      />
      <button
        v-if="query && !loading"
        @click.prevent.stop="reset"
        class="reset-button"
      >
        <i class="fas fa-times"></i>
      </button>
      <button
        :disabled="loading"
        @click="search"
        class="search-button"
        type="button"
      >
        <i v-if="loading" class="fa fa-circle-notch fa-spin"></i>
        <i v-else class="fa fa-search"></i>
      </button>
    </div>
    <div v-if="dropdown.visible" class="dropdown-content">
      <div v-if="initial" class="panel initial">
        <i class="fas fa-search"></i>
        Search knowledge base articles for answers
      </div>
      <div v-else-if="loading" class="panel loading">
        <i class="fa fa-circle-notch fa-spin"></i>
        Loading
      </div>
      <div v-else-if="haveErrors" class="panel error">
        <i class="fas fa-exclamation-triangle"></i>
        Couldn't load articles
      </div>
      <div v-else-if="haveArticles" class="results">
        <a
          v-for="(article, index) in publishedArticles"
          :key="article.id"
          class="dropdown-item"
          @click.prevent="showArticle(article)"
        >
          <i :class="'fa fa-' + article.icon"></i>
          {{ article.title }}
        </a>
      </div>
      <div v-else class="panel empty">
        <i class="fas fa-exclamation-circle"></i>
        Couldn't find articles
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Search",
  components: {},
  created() {},
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  data() {
    return {
      query: "",
      loading: false,
      dropdown: {
        visible: false,
      },
      articles: [],
      error: null,
      lastSearchQuery: "",
    };
  },
  computed: {
    haveArticles() {
      return this.articles.length > 0;
    },
    haveErrors() {
      return this.error !== null;
    },
    initial() {
      return (
        !this.lastSearchQuery &&
        !this.loading &&
        !this.haveArticles &&
        !this.haveErrors
      );
    },
    publishedArticles() {
      return this.articles.filter((answer) => answer.status === "published");
    },
  },
  watch: {},
  methods: {
    search() {
      if (!this.query || this.query === this.lastSearchQuery) {
        document.getElementById("search-input").focus();
        return;
      }

      this.$router.push({ name: "SearchPage", params: { query: this.query } });
      return;

      this.loading = true;
      this.lastSearchQuery = this.query;
      this.error = null;

      setTimeout(() => {
        api.request
          .get(
            api.endpoints.articles.search({
              query: this.lastSearchQuery,
            })
          )
          .then((response) => {
            if (this.lastSearchQuery === "empty") {
              this.articles = [];
            } else if (this.lastSearchQuery === "error") {
              this.error = "Error";
            } else {
              this.articles = response.data;
            }
          })
          .catch((error) => {
            this.error = error;
          })
          .finally(() => {
            this.loading = false;
            this.dropdown.visible = true;
          });
      }, 1000);
    },
    showDropdown() {
      this.dropdown.visible = true;
    },
    hideDropdown() {
      this.dropdown.visible = false;
    },
    handleClickOutside(event) {
      if (
        this.$refs.searchArea &&
        !this.$refs.searchArea.contains(event.target)
      ) {
        this.hideDropdown();
      }
    },
    reset() {
      this.query = "";
      this.loading = false;
      this.articles = [];
      this.error = null;
      this.lastSearchQuery = "";

      document.getElementById("search-input").focus();
    },
    showArticle(article) {
      this.dropdown.visible = false;
      prompt(JSON.stringify(article));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.search-area {
  width: 720px;
  margin-top: 25px;

  .search-container {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 2px;
    border-radius: 4px;

    #search-input {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      padding: 15px;
      padding-right: 40px;
      border: 1px solid $border-color;
      border-radius: 3px 0 0 4px;
      font-size: 1em;
      outline: none;

      &::placeholder {
        color: $text-gray;
        font-size: 16px;
        line-height: 19.2px;
      }
    }

    .search-button {
      padding: 15px 25px;
      border: 1px solid $green;
      background-color: $green;
      color: $white;
      cursor: pointer;
      border-radius: 0 3px 4px 0;
      font-size: 1em;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;

      &:focus {
        outline: none;
      }

      &:hover {
        background-color: $green-dark;
        border: 1px solid $green-dark;
      }

      &:disabled {
        background-color: $green-light;
        border: 1px solid $green-light;
        cursor: not-allowed;
      }

      i {
        font-size: 1.2em;
      }
    }
  }

  .box-shadow {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  .dropdown-content {
    display: block;
    position: absolute;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
    width: inherit;
    max-height: 180px;
    overflow-y: auto;
    border-radius: 4px;

    a {
      color: $text-black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      &:hover {
        background-color: $body-background;
      }
    }
  }

  .panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px 30px;
    font-size: 1rem;
    color: $text-gray;

    i {
      margin-right: 8px;
    }
  }

  .results {
    i {
      margin-right: 10px;
      color: $green;
    }
  }

  .reset-button {
    position: absolute;
    right: 90px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    border: none;
    background: transparent;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    color: $text-gray;

    &:hover {
      color: $text-black;
    }
  }

  .dropdown-item {
    cursor: pointer;
  }
}

@media (max-width: 320px) {
  .search-area {
    width: 260px;
  }
}

@media (max-width: 576px) {
  .search-area {
    width: 340px;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .search-area {
    width: 520px;
  }
}
</style>
