import { useContext } from 'react'
import { MancheDataContext } from '../../utils/context'
import { ChoiceButton } from './styled'

function PreneurButton(props) {
  const [preneur, setPreneur] = props.preneurState
  const value = props.value
  return (
    <ChoiceButton
      className="choice-button"
      onClick={(e) => setPreneur(value)}
      selected={preneur}
      value={value}
    >
      {value}
    </ChoiceButton>
  )
}

function PreneurSelector({ players }) {
  const [preneur, setPreneur] = useContext(MancheDataContext).preneurState
  return (
    <div id="preneurSelector-wrapper" className="selector-wrapper">
      <label className="selector-label">Preneur</label>
      <div id="preneurButtons-wrapper" className="buttonGroup-wrapper">
        {players.map((player) => (
          <PreneurButton
            key={`preneur-${player}`}
            preneurState={[preneur, setPreneur]}
            value={player}
          />
        ))}
      </div>
    </div>
  )
}

export default PreneurSelector
