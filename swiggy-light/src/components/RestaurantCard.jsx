import { Link } from "react-router-dom";

export default function RestaurantCard({ r }) {
  return (
    <Link
      to={`/restaurant/${r.id}`}
      className="card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <img
        src={r.image}
        alt={r.name}
        style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12 }}
      />
      <div className="card-body">
        <h3>{r.name}</h3>
        <p className="muted">{r.cuisines.join(", ")}</p>
        <div className="row muted">
          <span>{r.avgRating} ★</span>
          <span>•</span>
          <span>{r.deliveryTime} mins</span>
        </div>
        <div className="row muted">
          <span>₹{r.costForTwo} for two</span>
        </div>
      </div>
    </Link>
  );
}
