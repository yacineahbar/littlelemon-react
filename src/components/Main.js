import "./css/Main.css";
import Card from "./Card";
const Main = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-header">
          <h1>This Weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="main-cards">
          <Card
            item_name="Greeksalad"
            item_price="$12.99"
            item_image="greeksalad.jpg"
          />
          <Card
            item_name="Bruchetta"
            item_price="$5.99"
            item_image="bruchetta.jpg"
          />
          <Card
            item_name="Lemon Dessert"
            item_price="$5.99"
            item_image="lemondessert.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
