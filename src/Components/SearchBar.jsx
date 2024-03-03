const SearchBar = ({handleSearch, searchQuery}) => {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Searching..."
            onChange={handleSearch}
            value={searchQuery}
        />
    )
}

export default SearchBar