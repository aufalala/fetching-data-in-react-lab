import React from 'react'
import StarshipCard from "../StarshipCard/StarshipCard";

function StarshipList({starshipsData, displayedStarships, displayedStarshipsCount}) {


  return (
    <div>
    <h3>Starships</h3>

    <label>Number of results: {displayedStarshipsCount}</label>
    <div id="starshipDisplayedDiv">
    {displayedStarships.map((starship, index) => {
        return <StarshipCard key={index} starship={starship} />
    })}    
    </div>
    </div>
  )
}

export default StarshipList