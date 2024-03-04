const SearchBar = ({handleSearch, searchQuery}) => {
    return (
        <input
            type="text"
            placeholder="Searching..."
            onChange={handleSearch}
            value={searchQuery}
        />
    )
}

export default SearchBar