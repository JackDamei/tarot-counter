import React, { useContext } from 'react'
import { countAttaqueOudlers, pointsTarget } from '../../utils/calcul'
import { MancheDataContext } from '../../utils/context/MancheDataContext'
import { signedNumber } from '../../utils/number'
import PointsRangeInput from './PointsRangeInput'
import { PointsButton, PointsDisplay } from './styled'

function PointsSelector() {
  const mancheData = useContext(MancheDataContext)
  const [atout01] = mancheData.atout01State
  const [atout21] = mancheData.atout21State
  const [excuse] = mancheData.excuseState
  const [points, setPoints] = mancheData.pointsState

  return (
    <div id="pointsSelector-wrapper" className="selector-wrapper">
      <label className="selector-label">Points réalisés</label>
      <div id="points-display-div">
        <div className="sided-points-display-div">
          <label className="points-label">Attaque :</label>
          <PointsDisplay
            id="attaque-points-display-text"
            className="points-display-text"
            type="attaque"
            points={points}
            oudlers={[atout01, atout21, excuse]}
          >
            <span id="attaque-points-amount" className="points-amount">
              {points}
            </span>
            <span id="attaque-gap-to-target">
              (
              {signedNumber(
                points -
                  pointsTarget[countAttaqueOudlers([atout01, atout21, excuse])]
              )}
              )
            </span>
          </PointsDisplay>
        </div>
        <div className="points-button-group">
          <PointsButton
            id="add-point-button"
            className="points-button"
            onClick={() => setPoints(Math.min(points + 1, 91))}
            disabled={points >= 91}
          >
            +
          </PointsButton>
          <PointsButton
            id="remove-point-button"
            className="points-button"
            onClick={() => setPoints(Math.max(points - 1, 0))}
            disabled={points <= 0}
          >
            -
          </PointsButton>
        </div>
        <div className="sided-points-display-div">
          <label className="points-label">Défense :</label>
          <PointsDisplay
            id="defense-points-display-text"
            className="points-display-text"
            type="defense"
            points={points}
            oudlers={[atout01, atout21, excuse]}
          >
            <span id="defense-points-amount" className="points-amount">
              {91 - points}
            </span>
          </PointsDisplay>
        </div>
      </div>
      <PointsRangeInput
        type="range"
        id="points"
        name="points"
        min={0}
        max={91}
        step={1}
        value={points}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPoints(+e.target.value)
        }}
        points={points}
        oudlers={[atout01, atout21, excuse]}
      />
    </div>
  )
}

export default PointsSelector
