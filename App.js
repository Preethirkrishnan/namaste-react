import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = () => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src="https://www.nicepng.com/png/detail/964-9642029_veg-biryani-biryani.png" />
            <h2>Meghana Foods</h2>
            <h4>Biryani, North India, Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);