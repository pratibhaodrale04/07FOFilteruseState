import { restList } from "../utils/mockData";
import RestCardComponent from "./RestCardComponent ";
import { useState } from "react";

const BodyComponent = ()=>{
 //dummy data
}

  const [ listOfRestaurants, setListOfRestaurants ] = useState(restList);
    return <div className="search-bar">
    <h1>SEARCH</h1>
    <div className="filter">
    <button className="filter-btn" onClick={() => {
      const filteredRestaurants = listOfRestaurants.filter(
        (rest) => rest.card.card.info.avgRating > 4.2);
        console.log("size", filteredRestaurants.length);
        setListOfRestaurants(filteredRestaurants);
    }
    }>Top Rated Restaurants</button>
    </div>
    <div className="rest-container">
    {
      listOfRestaurants.map((restCards)=>(
            <RestCardComponent key={restCards.card.card.info.id} restData={restCards}/>
        ))
    }
    </div>
    </div>
};

export default BodyComponent;
