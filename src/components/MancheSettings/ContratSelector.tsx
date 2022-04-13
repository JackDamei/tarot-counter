import { FC } from 'react'
import { useContext } from 'react'
import { MancheDataContext } from '../../utils/context/MancheDataContext'
import { ChoiceButton } from './styled'

const ContratButton: FC<ContratButtonProps> = (props) => {
  const [contrat, setContrat] = props.contratState
  const value = props.value
  return (
    <ChoiceButton
      className="choice-button"
      onClick={() => setContrat(value)}
      selected={contrat}
      value={value}
    >
      {value}
    </ChoiceButton>
  )
}

const ContratSelector: FC = () => {
  const [contrat, setContrat] = useContext(MancheDataContext).contratState as [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ]
  return (
    <div id="contractSelector-wrapper" className="selector-wrapper">
      <label className="selector-label">Contrat</label>
      <div id="contratButtons-wrapper" className="buttonGroup-wrapper">
        <ContratButton contratState={[contrat, setContrat]} value="Petite" />
        <ContratButton contratState={[contrat, setContrat]} value="Garde" />
        <ContratButton
          contratState={[contrat, setContrat]}
          value="Garde sans"
        />
        <ContratButton
          contratState={[contrat, setContrat]}
          value="Garde contre"
        />
      </div>
    </div>
  )
}

export default ContratSelector

interface ContratButtonProps {
  contratState: [string, React.Dispatch<React.SetStateAction<string>>]
  value: string
}
