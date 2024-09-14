import React from "react";

// Title component
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zAgzX_nKFFoLBQ9UIJIkD9_-TLD5aUK2_w&s"
    />
  </a>
);

// Header component
export const HeaderComponent = () => {
  // Using camelCase for setter function name
  const [title, setTitle] = React.useState("Food");

  return (
    <div className="header">
      <Title />
      <h2>{title}</h2>

      {/* Button with label */}
      <button onClick={() => setTitle("New Food App")}>
        Change Title
      </button>

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
