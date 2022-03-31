import { useContext } from 'react'
import { MancheDataContext } from '../../utils/context'

function OptionsSelector() {
  const mancheData = useContext(MancheDataContext)
  const [atout01] = mancheData.atout01State
  const [petitAuBout, setPetitAuBout] = mancheData.petitAuBoutState
  const [poigneeLevel, setPoigneeLevel] = mancheData.poigneeLevelState
  const [poigneeType, setPoigneeType] = mancheData.poigneeTypeState
  const [chelem, setChelem] = mancheData.chelemState

  return (
    <div id="options-selector-wrapper" className="selector-wrapper">
      <label className="selector-label">Autres paramètres</label>
      <div id="petitAuBout-wrapper" className="option-wrapper">
        <label className="option-label">Petit au bout</label>
        <select
          id="petitAuBout-selector"
          value={petitAuBout}
          onChange={(e) => setPetitAuBout(e.target.value === 'true')}
        >
          <option value="false">non</option>
          <option value="true">oui ({atout01 ? 'attaque' : 'défense'})</option>
        </select>
      </div>
      <div id="poignee-wrapper" className="option-wrapper">
        <label className="option-label">Poignée</label>
        <select
          id="poignee-level-selector"
          value={poigneeLevel}
          onChange={(e) => setPoigneeLevel(+e.target.value)}
        >
          <option value="0">non</option>
          <option value="1">simple poignée</option>
          <option value="2">double poignée</option>
          <option value="3">triple poignée</option>
        </select>
        {poigneeLevel !== 0 && (
          <select
            id="poignee-type-selector"
            value={poigneeType}
            onChange={(e) => setPoigneeType(e.target.value)}
          >
            <option value="attaque">attaque</option>
            <option value="defense">défense</option>
          </select>
        )}
      </div>
      <div id="chelem-wrapper" className="option-wrapper">
        <label className="option-label">Chelem</label>
        <select
          id="chelem-selector"
          value={chelem}
          onChange={(e) => setChelem(e.target.value)}
        >
          <option value="non">non annoncé, non réalisé</option>
          <option value="imprévu">non annoncé, réalisé</option>
          <option value="raté">annoncé, non réalisé</option>
          <option value="prévu">annoncé, réalisé</option>
        </select>
      </div>
    </div>
  )
}

export default OptionsSelector
