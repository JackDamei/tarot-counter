import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { countAttaqueOudlers, pointsTarget } from '../../utils/calcul'

export const ChoiceButton = styled.button`
  ${(props) =>
    props.selected === props.value
      ? `background-color: darkolivegreen;
    color: #eeeeee;`
      : `background-color: #eeeeee;
    color: darkolivegreen;`}
`
export const OudlerWrapper = styled.div`
  background-color: ${(props) =>
    props.isAttaque ? colors.attaqueColor : colors.defenseColor};
`
export const PointsDisplay = styled.span`
  --team-color: ${(props) =>
    props.type === 'defense' ? colors.defenseColor : colors.attaqueColor};
  --color1: ${(props) =>
    props.type === 'defense' ? '#eeeeee' : colors.attaqueColor};
  --color2: ${(props) =>
    props.type === 'defense' ? colors.defenseColor : '#eeeeee'};
  border: solid 2px var(--team-color);
  ${(props) =>
    props.points < pointsTarget[countAttaqueOudlers(props.oudlers)]
      ? `
      color: var(--color1);
      background-color: var(--color2);
      `
      : `
      color: var(--color2);
      background-color: var(--color1);
      `};
`
export const PointsButton = styled.button`
  --main-color: ${(props) =>
    props.id === 'add-point-button'
      ? colors.attaqueColor
      : colors.defenseColor};
  border-color: var(--main-color);
  &:disabled {
    border-color: lightgray;
  }
  &:enabled:hover {
    background-color: #dddddd;
  }
  &:enabled:active {
    background-color: var(--main-color);
    color: lightgray;
  }
`
