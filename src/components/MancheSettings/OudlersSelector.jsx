import { useContext } from 'react'
import { toggleValue } from '../../utils'
import { MancheDataContext } from '../../utils/context'
import { OudlerWrapper } from './styled'
import excuseImg from '../../assets/Excuse.png'
import atout01Img from '../../assets/Atout-01.png'
import atout21Img from '../../assets/Atout-21.png'

function OudlerButton({ getter, setter, imgSrc, imgAlt }) {
  return (
    <OudlerWrapper
      className="oudler-wrapper"
      onClick={() => toggleValue(getter, setter)}
      isAttaque={getter}
    >
      <img src={imgSrc} alt={imgAlt} />
    </OudlerWrapper>
  )
}

function OudlersSelector() {
  const mancheData = useContext(MancheDataContext)
  const [atout01, setAtout01] = mancheData.atout01State
  const [atout21, setAtout21] = mancheData.atout21State
  const [excuse, setExcuse] = mancheData.excuseState

  return (
    <div id="oudlersSelector-wrapper" className="selector-wrapper">
      <label className="selector-label">Oudlers</label>
      <div className="oudlersList-wrapper">
        <OudlerButton
          id="atout01Wrapper"
          imgSrc={atout01Img}
          imgAlt="le petit"
          getter={atout01}
          setter={setAtout01}
        />
        <OudlerButton
          id="atout21Wrapper"
          imgSrc={atout21Img}
          imgAlt="le 21"
          getter={atout21}
          setter={setAtout21}
        />
        <OudlerButton
          id="excuseWrapper"
          imgSrc={excuseImg}
          imgAlt="l'excuse"
          getter={excuse}
          setter={setExcuse}
        />
      </div>
    </div>
  )
}

export default OudlersSelector
