import SearchBar from 'material-ui-search-bar'
import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
const CustomSearchBar = ({ onSearch }: { onSearch: (val: string) => void }) => {
  const [search, setSearch] = useState<string>('')

  return (
    <SearchBar
      value={search}
      onChange={(newValue: string) => setSearch(newValue)}
      onRequestSearch={() => onSearch(search)}
      onCancelSearch={() => onSearch('')}
    />
  )
}

export default CustomSearchBar
