import { Link, useParams } from 'react-router-dom'
import GameTable from '../components/GameTable'
import { GameData } from '../utils/model'

const testJoueurs = ['Nord', 'Ouest', 'Sud', 'Est']
const testData: GameData[] = [
  {
    preneur: 'Ouest',
    contrat: 'Garde',
    oudlers: [false, false, false],
    points: 56,
    petitAuBout: true,
    poigneeLevel: 0,
    chelem: 'non',
  },
  {
    preneur: 'Ouest',
    contrat: 'Garde',
    oudlers: [false, false, false],
    points: 56,
    petitAuBout: true,
    poigneeLevel: 0,
    chelem: 'non',
  },
]

function GameDashboard() {
  const { gameId } = useParams()
  return (
    <div className="centered-div">
      <span>Game ID: {gameId}</span>
      <div className="table-wrapper">
        <GameTable joueurs={testJoueurs} mancheList={testData} />
        <Link to="/nouvellemanche">
          <button className="footer-button">Nouvelle manche</button>
        </Link>
      </div>
    </div>
  )
}

export default GameDashboard
