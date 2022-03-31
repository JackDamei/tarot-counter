import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="title-link">
          <h1>Tarot : compteur de score</h1>
          <h4>Ne vous fatiguez plus à tout calculer</h4>
          {/* <img className="logo" src="" alt="logo" /> */}
        </div>
      </Link>
    </div>
  )
}

export default Header
