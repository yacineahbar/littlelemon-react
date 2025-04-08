import "./css/Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-img-wrapper">
          <img src={props.item_image} alt="food1" className="card-image" />
        </div>
        <div className="card-desc">
          <h2>{props.item_name}</h2>
          <h2 className="card-price">{props.item_price}</h2>
        </div>
      </div>
    </>
  );
}
