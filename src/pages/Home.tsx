import { Link } from 'react-router-dom'
import '../utils/style/index.css'
import '../utils/style/Home.css'

function Home() {
  return (
    <div id="home-page-div" className="centered-div">
      <div className="home-navigation-div">
        <Link to="/nouvellepartie" className="home-page-button">
          Nouvelle partie
        </Link>
        <button className="home-page-button" disabled={true}>
          Charger une partie existante
        </button>
        <Link to="/offline" className="home-page-button">
          Mode Hors-ligne
        </Link>
      </div>
    </div>
  )
}

export default Home
