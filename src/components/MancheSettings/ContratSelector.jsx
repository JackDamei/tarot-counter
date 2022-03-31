import { useContext } from 'react'
import { MancheDataContext } from '../../utils/context'
import { ChoiceButton } from './styled'

function ContratButton(props) {
  const [contrat, setContrat] = props.contratState
  const value = props.value
  return (
    <ChoiceButton
      className="choice-button"
      onClick={(e) => setContrat(value)}
      selected={contrat}
      value={value}
    >
      {value}
    </ChoiceButton>
  )
}

function ContratSelector() {
  const [contrat, setContrat] = useContext(MancheDataContext).contratState
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
