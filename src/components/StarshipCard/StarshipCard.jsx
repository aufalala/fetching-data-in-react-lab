import React from 'react'

function StarshipCard({starship}) {
  return (
    <div className="card">
        <h4>{starship.name}</h4>
        <label>{starship.starship_class}</label>
        <label>{starship.manufacturer}</label>
        <label>{starship.model}</label>
        {/* <label>{starship.cost_in_credits}</label>
        <label>{starship.length}</label> */}
    </div>
  )
}

export default StarshipCard