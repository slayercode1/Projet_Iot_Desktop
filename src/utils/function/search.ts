const searchData = (data: [], search: string) => {
  return data.filter(item => {
    if (search === '') return item
    const searchLowerCase = search.toLowerCase()
    return Object.entries(item).some(([key, value]) => {
      if (['id', 'date_create', 'date_update'].includes(key)) {
        return false
      }
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchLowerCase)
      }
      return false
    })
  })
}

export default searchData
