import { FC, useContext } from 'react'
import { MancheDataContext } from '../../utils/context/MancheDataContext'
import { ChoiceButton } from './styled'

const PreneurButton: FC<PreneurButtonProps> = (props) => {
  const [preneur, setPreneur] = props.preneurState
  const value = props.value
  return (
    <ChoiceButton
      className="choice-button"
      onClick={() => setPreneur(value)}
      selected={preneur}
      value={value}
    >
      {value}
    </ChoiceButton>
  )
}

const PreneurSelector: FC<PreneurSelectorProps> = ({ players }) => {
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

interface PreneurButtonProps {
  preneurState: [string, React.Dispatch<React.SetStateAction<string>>]
  value: string
}

interface PreneurSelectorProps {
  players: string[]
}
