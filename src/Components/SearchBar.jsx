const SearchBar = ({handleSearch, searchQuery}) => {
    return (
        <div className ='searchbar'>
        <input
            type="text"
            placeholder="Username Search"
            onChange={handleSearch}
            value={searchQuery}
        />
        </div>
    )
}

export default SearchBar