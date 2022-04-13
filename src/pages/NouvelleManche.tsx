import PropTypes from 'prop-types'
import { FC } from 'react'
import MancheSettings from '../components/MancheSettings'

interface NouvelleMancheProps {
  offline?: boolean
}

const NouvelleManche: FC<NouvelleMancheProps> = ({ offline = false }) => {
  const o_preneur = ''
  const o_contrat = ''
  const o_atout01 = false
  const o_atout21 = false
  const o_excuse = false
  const o_points = 0
  const o_petitAuBout = false
  const o_poigneeLevel = 0
  const o_poigneeType = 'attaque'
  const o_chelem = 'non'

  return (
    <MancheSettings
      players={['Jack', 'Pablo', 'Vero', 'Nino']}
      mancheId=""
      originalValues={{
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
      }}
      offline={offline}
    />
  )
}

NouvelleManche.propTypes = {
  offline: PropTypes.bool.isRequired,
}
NouvelleManche.defaultProps = {
  offline: false,
}

export default NouvelleManche
