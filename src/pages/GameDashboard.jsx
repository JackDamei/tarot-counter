import { Link, useParams } from 'react-router-dom'

function GameDashboard() {
  const { gameId } = useParams()
  const joueurs = ['Nord', 'Ouest', 'Sud', 'Est']
  return (
    <div className="centered-div">
      <span>Game ID: {gameId}</span>
      <table>
        <thead>
          <tr>
            <th />
            {joueurs.map((joueur) => (
              <th key={`th-${joueur}`}>{joueur}</th>
            ))}
          </tr>
          <tr>
            <td />
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <th>2</th>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
      <Link to="/nouvellemanche">
        <button className="footer-button">Nouvelle manche</button>
      </Link>
    </div>
  )
}

export default GameDashboard
