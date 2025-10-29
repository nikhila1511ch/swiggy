import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurants } from "../data/restaurants";

export default function Restaurant() {
  const { id } = useParams();
  const r = useMemo(() => restaurants.find(x => x.id === id), [id]);

  if (!r) {
    return (
      <div className="container">
        <p className="muted">Restaurant not found.</p>
        <Link className="pill" to="/">← Back</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link className="pill" to="/">← Back</Link>
      <div className="row" style={{ marginTop: 16, gap: 16, alignItems: "flex-start" }}>
        <img
          src={r.image}
          alt={r.name}
          style={{ width: 280, height: 180, objectFit: "cover", borderRadius: 12, border: "1px solid #1f2937" }}
        />
        <div style={{ display: "grid", gap: 6 }}>
          <h2 style={{ margin: 0 }}>{r.name}</h2>
          <div className="row muted">
            <span className="rating">{r.avgRating}★</span>
            <span>•</span>
            <span>{r.cuisines.join(", ")}</span>
          </div>
          <div className="row muted">
            <span>⏱ {r.deliveryTime} mins</span>
            <span>•</span>
            <span>₹{r.costForTwo} for two</span>
          </div>
          <div className="tags">
            {r.cuisines.map(c => (
              <span key={c} className="pill">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: 24 }}>Menu</h3>
      <div className="grid">
        {r.menu.map(item => (
          <div key={item.id} className="card">
            <img
              src={item.image || "https://via.placeholder.com/280x180"}
              alt={item.name}
              style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8 }}
            />
            <div className="card-body">
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div style={{ fontWeight: 700 }}>{item.name}</div>
                <div>₹{item.price}</div>
              </div>
              <button className="button primary">Add +</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
