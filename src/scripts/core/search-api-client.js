class SearchAPIClient {
  static get defaultSearchSettings() {
    return {
      getRankingInfo: true,
      analytics: true,
      enableABTest: false,
      attributesToRetrieve: '*',
      attributesToSnippet: '*:20',
      responseFields: '*',
      explain: '*',
      facets: ['*', 'category', 'tags'],
    }
  }

  constructor(url) {
    this.url = url
  }

  // формирования корректного для системы поискового запроса
  search(query, filters = []) {
    let queryString = `search=${query.replaceAll('+', '%2B').replaceAll('-', '%2D')}`
    filters.forEach((o) => {
      queryString += `&${o}`
    })
    return fetch(`${this.url}/?${queryString}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'https://doka.guide',
      },
    }).then((response) => response.json())
  }
}

const searchClient = new SearchAPIClient('https://search.doka.guide')

export default searchClient
