const SearchBar = ({handleSearch, searchQuery}) => {
    return (
        <div className ='searchbar'>
        <input
            type="text"
            placeholder="Searching..."
            onChange={handleSearch}
            value={searchQuery}
        />
        </div>
    )
}

export default SearchBar