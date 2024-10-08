/*
Header
- Logo
-list items(Right side)
- Cart
Body
- SEARCH BAR
- List of Resraurants
- Restaurant information
-image
-name
-rating
-Cusines
Footer
-Links
-Copy right


*/



/*
what is HOOKS?
what is state?
what is usestate?


*/
 
import React from "react";
import ReactDOM from "react-dom/client";
//import { HeaderComponent, Title } from "./component/Header.js"; // Ensure this path is correct
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zAgzX_nKFFoLBQ9UIJIkD9_-TLD5aUK2_w&s"
    />
  </a>
);

 const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const burgerKing = {
  name: "Burger King",
  cusines: ["Burger", "American"], // Changed to an array to use join
  image:
    "https://b.zmtcdn.com/data/pictures/chains/4/19193204/5f22edaa3391108ad75776b4cbce296e.jpg?fit=around|960:500&crop=960:500;*,*",
  rating: 4.2,
};

const RestaurantCard = ({ name, cusines, image, rating }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{cusines.join(", ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

// Sample list of restaurants

const restaurantList = [
  {
    data: {
      id: 1,
      name: "Burger King",
      cusines: ["Burger", "American"],
      image:
        "https://b.zmtcdn.com/data/pictures/chains/4/19193204/5f22edaa3391108ad75776b4cbce296e.jpg?fit=around|960:500&crop=960:500;*,*",
      rating: 4.2,
    },
  },
  {
    data: {
      id: 2,
      name: "Subway",
      cusines: ["Burger", "Fast Food"],
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/8ff4d852-bdf0-40a4-92d9-b2445b15eeb1_766478.JPG",
      rating: 4.1,
    },
  },
  {
    data: {
      id: 3,
      name: "Subway",
      cusines: ["Burger", "Fast Food"],
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/8ff4d852-bdf0-40a4-92d9-b2445b15eeb1_766478.JPG",
      rating: 4.1,
    },
  },
  {
    data: {
      id: 4,
      name: "Domino's Pizza",
      cusines: ["Pizza", "Italian"],
      image:
        "https://b.zmtcdn.com/data/pictures/chains/5/7400255/9275c1f43f9d6f7741ebfd7fbb465edb.jpg?fit=around|960:500&crop=960:500;*,*",
      rating: 4.3,
    },
  },
  {
    data: {
      id: 4,
      name: "Starbucks",
      cusines: ["Coffee", "Cafe"],
      image:
        "https://b.zmtcdn.com/data/pictures/chains/7/3400707/7d56a6a8f3acddf313f6be7d57e90840.jpg?fit=around|960:500&crop=960:500;*,*",
      rating: 4.5,
    },
  },
  {
    data: {
      id: 5,
      name: "KFC",
      cusines: ["Chicken", "Fast Food"],
      image:
        "https://b.zmtcdn.com/data/pictures/chains/3/53003/f79b4a472e243d57fe073146c9e26b11.jpg?fit=around|960:500&crop=960:500;*,*",
      rating: 4.0,
    },
  },
  {
    data: {
      id: 6,
      name: "McDonald's",
      cusines: ["Burger", "Fast Food"],
      image:
        "https://b.zmtcdn.com/data/pictures/chains/1/1201/982db362efcbecff30cb1bde00da051b.jpg?fit=around|960:500&crop=960:500;*,*",
      rating: 4.2,
    },
  },
  
];
// Function to filter restaurants by name
function filterData(searchTxt, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
}

// Body Component
const Body = () => {
  const [searchTxt, setSearchTxt] = React.useState(""); // State for search input
  const [restaurants, setRestaurants] = React.useState(restaurantList); // State for restaurant list

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
 /* onClick={()=>{ 
    //   if(searchclicked === true){
    //     setsearchclicked("false");

    //   }
    //   else {
    //   setsearchclicked("true")
    //   }
    }}*/ 


          onClick={() => {
            const data = filterData(searchTxt, restaurantList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.length === 0 ? (
          <h3>No restaurants found</h3>
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ))
        )}
      </div>
    </>
  );
};

const Footer = () => {
  return <h4>Footer - Links | Copyright</h4>;
};

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
