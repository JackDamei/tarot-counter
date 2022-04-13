import '../../utils/style/index.css'
import '../../utils/style/Manche.css'
import MancheFooter from './MancheFooter'
import PreneurSelector from './PreneurSelector'
import ContratSelector from './ContratSelector'
import OudlersSelector from './OudlersSelector'
import PointsSelector from './PointsSelector'
import OptionsSelector from './OptionsSelector'
import { FC } from 'react'

const MancheSettings: FC<MancheSettingsProps> = ({
  players,
  gameId = '',
  mancheId = '',
  originalValues,
  offline,
}) => {
  return (
    <div className="centered-div">
      {!offline && <PreneurSelector players={players} />}
      <ContratSelector />
      <OudlersSelector />
      <PointsSelector />
      <OptionsSelector />
      <MancheFooter
        mancheId={mancheId}
        gameId={gameId}
        originalValues={originalValues}
        offline={offline}
      />
    </div>
  )
}

export default MancheSettings

interface MancheSettingsProps {
  players: string[]
  gameId?: string
  mancheId?: string
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
