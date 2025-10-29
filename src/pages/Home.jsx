import { useEffect, useMemo, useState } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Shimmer from '../components/Shimmer'
import { restaurants as seed } from '../data/restaurants'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  const [q, setQ] = useState('')
  const [minRating, setMinRating] = useState(0)
  const [sort, setSort] = useState('relevance') // relevance | rating | time | cost

  useEffect(() => {
    // pretend to fetch
    const t = setTimeout(() => {
      setList(seed)
      setLoading(false)
    }, 600)
    return () => clearTimeout(t)
  }, [])

  const filtered = useMemo(() => {
    let res = list.filter(r =>
      r.name.toLowerCase().includes(q.toLowerCase()) ||
      r.cuisines.join(',').toLowerCase().includes(q.toLowerCase())
    ).filter(r => r.avgRating >= minRating)

    switch (sort) {
      case 'rating': res.sort((a, b) => b.avgRating - a.avgRating); break
      case 'time': res.sort((a, b) => a.deliveryTime - b.deliveryTime); break
      case 'cost': res.sort((a, b) => a.costForTwo - b.costForTwo); break
      default: break
    }
    return res
  }, [list, q, minRating, sort])

  return (
    <div className="container">
      <div className="searchbar">
        <input
          className="input"
          placeholder="Search restaurants or cuisines…"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <select className="button" value={minRating} onChange={e => setMinRating(Number(e.target.value))}>
          <option value={0}>Any rating</option>
          <option value={4.5}>4.5★+</option>
          <option value={4.0}>4.0★+</option>
          <option value={3.5}>3.5★+</option>
        </select>
        <select className="button" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="relevance">Sort: Relevance</option>
          <option value="rating">Sort: Rating</option>
          <option value="time">Sort: Delivery Time</option>
          <option value="cost">Sort: Cost (low→high)</option>
        </select>
        <button className="button" onClick={() => { setQ(''); setMinRating(0); setSort('relevance') }}>
          Reset
        </button>
      </div>

      {loading ? <Shimmer /> : (
        filtered.length ? (
          <div className="grid">
            {filtered.map(r => <RestaurantCard key={r.id} r={r} />)}
          </div>
        ) : (
          <p className="muted">No restaurants match your filters.</p>
        )
      )}
    </div>
  )
}
