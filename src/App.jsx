import { useState, useEffect } from "react";

import { index } from "./services/starshipService";

import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/SstarshipSearch/StarshipSearch";



const App = () => {
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])

  useEffect(() => {
  async function fetchStarships() {
    const data = await index();
    setStarshipsData(data);
    setDisplayedStarships(data);
  }
  fetchStarships();
  }, [])

  function search(searchTerm) {
    setDisplayedStarships(starshipsData.filter((starship) => {
      return starship.name.toLowerCase().includes(searchTerm.toLowerCase());
    }))
  }


  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch search={search}/>
    <StarshipList starshipsData={starshipsData} displayedStarships={displayedStarships} displayedStarshipsCount={displayedStarships.length} />
    </>
  );
}

export default App
