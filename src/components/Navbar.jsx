import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">Swiggy<span className="badge">clone</span></Link>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
          <Link to="/" className="pill">Home</Link>
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="pill">Docs</a>
        </div>
      </div>
    </nav>
  )
}
