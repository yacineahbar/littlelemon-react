import "./css/Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__cta">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <img src="restaurantfood.jpg" alt="Restaurant" />
    </div>
  );
};

export default Header;
