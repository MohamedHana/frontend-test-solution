// Generates API endpoints full url
function endpoint({ domain = "http://localhost:9000", prefix = "api", path = "" }) {
  let endpoint = ""

  if (domain) {
    endpoint += domain + "/"
  }

  if (prefix) {
    endpoint += prefix + "/"
  }

  if (path) {
    endpoint += path
  }

  return endpoint
}

function constructQueryParameters(requestParameters) {
  return '?' + new URLSearchParams(requestParameters).toString()
}

// App endpoints
const endpoints = {
  categories: {
    fetch: endpoint({ path: "categories" }),
    getArticles: (categoryId) => {
      return endpoint({ path: "category/" + categoryId })
    },
    search: (requestParameters) => {
      return endpoint({ path: "categories" + constructQueryParameters(requestParameters) })
    },
    reload: endpoint({ path: "categories/" }),
  },
}

export default endpoints
