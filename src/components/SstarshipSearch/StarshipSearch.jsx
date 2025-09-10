import React, { useState } from 'react'

function StarshipSearch({search}) {

    const [searchValue, setSearchValue] = useState("");
    
    const [prevSearchValue, setPrevSearchValue] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        search(searchValue);
        setPrevSearchValue(searchValue);
        setSearchValue("");
    }

    function handleReset() {
        setPrevSearchValue("")
        search("")
    }

  return (
    <>
    <h3>Search</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="searchField">
            Search Term: 
        </label>

        <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        ></input>

        <button type="submit">Search</button>
    </form>
    {prevSearchValue ? <><div>Previous Search: {prevSearchValue}</div><button onClick={handleReset}>Show all starships</button></> : <div>Search for a starship by name.</div>}
    {}
    </>
  )
}

export default StarshipSearch