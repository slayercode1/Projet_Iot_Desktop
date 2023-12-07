export const stockRecentSearch = (search?: string) => {
  const recentSearch = localStorage.getItem('recentSearch')
  if (recentSearch) {
    const recentSearchArray = recentSearch.split(',')
    if (recentSearchArray.length === 5) {
      recentSearchArray.pop()
    }
    if (search != null) {
      recentSearchArray.unshift(search)
    }
    localStorage.setItem('recentSearch', recentSearchArray.toString())
  } else {
    if (typeof search === 'string') {
      localStorage.setItem('recentSearch', search)
    }
  }

  const recentSearchArray = localStorage.getItem('recentSearch')?.split(',')
  return recentSearchArray ? [...recentSearchArray] : []
}
