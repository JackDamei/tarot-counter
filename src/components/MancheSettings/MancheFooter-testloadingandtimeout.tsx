import { FC, useContext, useState } from 'react'
import { MancheDataContext } from '../../utils/context/MancheDataContext'
import { calculScoreManche } from '../../utils/calcul'
import { useNavigate } from 'react-router-dom'

const MancheFooter: FC<MancheFooterProps> = ({
  mancheId = '',
  gameId = '',
  originalValues,
  offline,
}) => {
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

  const [isLoading, setLoading] = useState(false)

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

  const navigate = useNavigate()

  function validateManche() {
    if (!offline && preneur === '') {
      alert('Veuillez sélectionner un joueur')
      return
    }
    if (contrat === '') {
      alert('Veuillez sélectionner un contrat')
      return
    }
    setLoading(true)
    const score = calculScoreManche(
      contrat,
      [atout01, atout21, excuse],
      points,
      petitAuBout,
      poigneeLevel,
      chelem
    )
    setTimeout(() => {
      alert(
        `L'attaque marque ${
          3 * score
        } points, la défense marque ${-score} points !`
      )
      if (!offline) navigate('/dashboard/5')
    }, 1000)
  }

  return (
    <div id="validation-wrapper" className="selector-wrapper">
      <div id="validationButtons-wrapper" className="buttonGroup-wrapper">
        <button
          id="validate-button"
          className="footer-button"
          disabled={(!offline && preneur === '') || contrat === ''}
          onClick={(e) => validateManche()}
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
      {isLoading && <div className="loading-overlay" />}
    </div>
  )
}

export default MancheFooter

interface MancheFooterProps {
  mancheId?: string
  gameId?: string
  originalValues: {
    o_preneur: string
    o_contrat: string
    o_atout01: boolean
    o_atout21: boolean
    o_excuse: boolean
    o_points: number
    o_petitAuBout: boolean
    o_poigneeLevel: number
    o_poigneeType: string
    o_chelem: string
  }
  offline: boolean
}
