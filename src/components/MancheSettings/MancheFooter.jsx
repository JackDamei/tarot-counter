import { useContext } from 'react'
import { MancheDataContext } from '../../utils/context'
import { calculScoreManche } from '../../utils/calcul'

function MancheFooter({ mancheId, originalValues, offline }) {
  const mancheData = useContext(MancheDataContext)
  const [preneur, setPreneur] = mancheData.preneurState
  const [contrat, setContrat] = mancheData.contratState
  const [atout01, setAtout01] = mancheData.atout01State
  const [atout21, setAtout21] = mancheData.atout21State
  const [excuse, setExcuse] = mancheData.excuseState
  const [points, setPoints] = mancheData.pointsState
  const [petitAuBout, setPetitAuBout] = mancheData.petitAuBoutState
  const [poigneeLevel, setPoigneeLevel] = mancheData.poigneeLevelState
  const [, setPoigneeType] = mancheData.poigneeTypeState
  const [chelem, setChelem] = mancheData.chelemState

  const {
    o_preneur,
    o_contrat,
    o_atout01,
    o_atout21,
    o_excuse,
    o_points,
    o_petitAuBout,
    o_poigneeLevel,
    o_poigneeType,
    o_chelem,
  } = originalValues

  function resetManche() {
    setPreneur(o_preneur)
    setContrat(o_contrat)
    setAtout01(o_atout01)
    setAtout21(o_atout21)
    setExcuse(o_excuse)
    setPoints(o_points)
    setPetitAuBout(o_petitAuBout)
    setPoigneeLevel(o_poigneeLevel)
    setPoigneeType(o_poigneeType)
    setChelem(o_chelem)
  }

  return (
    <div id="validation-wrapper" className="selector-wrapper">
      <div id="validationButtons-wrapper" className="buttonGroup-wrapper">
        <button
          id="validate-button"
          className="footer-button"
          disabled={(!offline && preneur === '') || contrat === ''}
          onClick={(e) => {
            if (!offline && preneur === '') {
              alert('Veuillez sélectionner un joueur')
              return
            }
            if (contrat === '') {
              alert('Veuillez sélectionner un contrat')
              return
            }
            const score = calculScoreManche(
              contrat,
              [atout01, atout21, excuse],
              points,
              petitAuBout,
              poigneeLevel,
              chelem
            )
            alert(
              `L'attaque marque ${
                3 * score
              } points, la défense marque ${-score} points !`
            )
          }}
        >
          Valider la partie
        </button>
        <button
          id="reset-button"
          className="footer-button"
          onClick={() => resetManche()}
        >
          Réinitialiser
        </button>
      </div>
    </div>
  )
}

export default MancheFooter
