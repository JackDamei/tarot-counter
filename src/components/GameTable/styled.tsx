import { FC } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

interface CellProps {
  key?: string
  className?: string
  value: any
}
const Cell: FC<CellProps> = ({ value, key, className }) => {
  return (
    <td key={key} className={className}>
      {value}
    </td>
  )
}
export const ScoreCell = styled(Cell)`
  background-color: ${(props) =>
    props.value > 0 ? colors.attaqueColor : colors.defenseColor};
`
