import "./css/Reservation.css";

export default function Reservation(props) {
  return (
    <>
      <div className="container">
        <h1 className="container-title">Reservations</h1>
        <form className="form-wrapper">
          <div>
            <label htmlFor="indoor">Indoor seating</label>
            <input
              type="radio"
              id="indoor"
              name="seating"
              value="Indoor"
              required
            />
          </div>
          <div>
            <label htmlFor="outdoor">Outdoor seating</label>
            <input
              type="radio"
              id="outdoor"
              name="seating"
              value="Outdoor"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="date">Date</label>
            <input type="Date" id="date" name="date" required />
          </div>
          <label htmlFor="guests">Number of Diners</label>
          <input type="number" id="guests" name="guests" min="1" required />
        </form>
        <button type="submit">Reserve a Table</button>
      </div>
    </>
  );
}
