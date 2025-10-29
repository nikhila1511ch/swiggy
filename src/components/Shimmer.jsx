export default function Shimmer({ count = 8 }) {
  return (
    <div className="grid">
      {Array.from({ length: count }).map((_, i) => (
        <div className="card" key={i}>
          <div style={{ height: 140 }} className="shimmer" />
          <div className="card-body">
            <div style={{ height: 16, width: '70%' }} className="shimmer" />
            <div style={{ height: 12, width: '50%', marginTop: 8 }} className="shimmer" />
            <div style={{ height: 12, width: '40%', marginTop: 8 }} className="shimmer" />
          </div>
        </div>
      ))}
    </div>
  )
}
