import Resturantcard from "./Resturantcard";
import { restaurantList } from "../../utils/constants";
import { useState, UseState } from "react";

const Body = () => {
  const [filterlist, setfilterlist] = useState(restaurantList);

  const handlefilter = () => {
    const filtered = restaurantList.filter((res) => res.data.totalRatings > 4);
    setfilterlist(filtered);
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div>
        <button className="" onClick={handlefilter}>
          Filter
        </button>
      </div>
      <div className="res-container">
        {filterlist.map((restaurant) => {
          return (
            <Resturantcard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
