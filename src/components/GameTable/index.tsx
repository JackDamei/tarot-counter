import { FC } from 'react'
import { calculScoreManche } from '../../utils/calcul'
import { GameData } from '../../utils/model'
import { ScoreCell } from './styled'

function mancheListToScoreList(mancheList: GameData[]) {
  return mancheList.map((manche) => {
    const { contrat, oudlers, points, petitAuBout, poigneeLevel, chelem } =
      manche
    return calculScoreManche(
      contrat,
      oudlers,
      points,
      petitAuBout,
      poigneeLevel,
      chelem
    )
  })
}

function getMancheScore(
  joueur: string,
  mancheList: GameData[],
  scoreList: number[],
  i: number
) {
  return mancheList[i].preneur === joueur ? 3 * scoreList[i] : -scoreList[i]
}

function getTotalScore(
  joueur: string,
  mancheList: GameData[],
  scoreList: number[]
) {
  return mancheList.reduce(
    (acc, manche, i) => acc + getMancheScore(joueur, mancheList, scoreList, i),
    0
  )
}

interface GameTableProps {
  joueurs: string[]
  mancheList: GameData[]
}
const GameTable: FC<GameTableProps> = ({ joueurs, mancheList }) => {
  const scoreList = mancheListToScoreList(mancheList)
  return (
    <table className="game-table">
      <thead className="game-table-head">
        <tr className="player-name-line">
          <th className="blank-cell" />
          {joueurs.map((joueur) => (
            <th key={`th-${joueur}-name`} className="player-name-cell">
              {joueur}
            </th>
          ))}
        </tr>
        <tr className="total-score-line">
          <th className="blank-cell" />
          {joueurs.map((joueur) => (
            <ScoreCell
              key={`tr-${joueur}-total`}
              className="score-cell"
              value={getTotalScore(joueur, mancheList, scoreList)}
            />
          ))}
        </tr>
      </thead>
      <tbody className="game-table-body">
        {mancheList.map((_, i) => (
          <tr key={`tr-manche-number-${i}`} className="manche-score-line">
            <th key={`th-manche-number-${i}`} className="manche-number-cell">
              {i + 1}
            </th>
            {joueurs.map((joueur) => (
              <ScoreCell
                key={`td-${joueur}-manche${i}`}
                className="score-cell"
                value={getMancheScore(joueur, mancheList, scoreList, i)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GameTable
