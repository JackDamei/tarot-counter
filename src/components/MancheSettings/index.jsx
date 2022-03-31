import PropTypes from 'prop-types'
import '../../utils/style/index.css'
import '../../utils/style/Manche.css'
import MancheFooter from './MancheFooter'
import PreneurSelector from './PreneurSelector'
import ContratSelector from './ContratSelector'
import OudlersSelector from './OudlersSelector'
import PointsSelector from './PointsSelector'
import OptionsSelector from './OptionsSelector'

function MancheSettings({ players, mancheId, originalValues, offline }) {
  return (
    <div className="centered-div">
      {!offline && <PreneurSelector players={players} />}
      <ContratSelector />
      <OudlersSelector />
      <PointsSelector />
      <OptionsSelector />
      <MancheFooter
        mancheId={mancheId}
        originalValues={originalValues}
        offline={offline}
      />
    </div>
  )
}

MancheSettings.propTypes = {
  offline: PropTypes.bool.isRequired,
}
MancheSettings.defaultProp = {
  offline: false,
}

export default MancheSettings
