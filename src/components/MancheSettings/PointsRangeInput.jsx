import styled from 'styled-components'
import { pointsTarget, countAttaqueOudlers } from '../../utils/calcul'
import colors from '../../utils/style/colors'

const PointsRangeInput = styled.input`
  --color: ${(props) =>
    props.points < pointsTarget[countAttaqueOudlers(props.oudlers)]
      ? colors.defenseColor
      : colors.attaqueColor};
  height: 10px;
  -webkit-appearance: none;
  --sx: ${(props) => (props.points * 100) / 91}%;

  &:focus {
    outline: none;
  }

  /*webkit*/
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color);
    border: none;
    box-shadow: 0 0 2px black;
    margin-top: calc(max((10px - 1px - 1px) * 0.5, 0px) - 20px * 0.5);
  }

  &::-webkit-slider-runnable-track {
    height: 10px;
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    box-shadow: none;
    background: linear-gradient(
      to right,
      var(--color) 0%,
      var(--color) var(--sx),
      #efefef var(--sx)
    );
  }

  /*mozilla*/
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color);
    border: none;
    box-shadow: 0 0 2px black;
  }

  &::-moz-range-track {
    height: max(calc(10px - 1px - 1px), 0px);
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    box-shadow: none;
    background: linear-gradient(
      to right,
      var(--color) 0%,
      var(--color) var(--sx),
      #efefef var(--sx)
    );
  }

  /*ms*/
  &::-ms-fill-upper {
    background: transparent;
    border-color: transparent;
  }

  &::-ms-fill-lower {
    height: max(calc(10px - 1px - 1px), 0px);
    border-radius: 5px 0 0 5px;
    margin: -1px 0 -1px -1px;
    background: var(--color);
    border: 1px solid #b2b2b2;
    border-right-width: 0;
  }

  &::-ms-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color);
    border: none;
    box-shadow: 0 0 2px black;
    margin-top: 0;
    box-sizing: border-box;
  }

  &::-ms-track {
    height: 10px;
    border-radius: 5px;
    background: #efefef;
    border: 1px solid #b2b2b2;
    box-shadow: none;
    box-sizing: border-box;
  }
`

export default PointsRangeInput
