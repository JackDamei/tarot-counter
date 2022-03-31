import { countAttaqueOudlers } from './calcul'

describe('The countAttaqueOudlers function', () => {
  it('should return 0 when no oudler is on attaque', () => {
    const atout01 = false
    const atout21 = false
    const excuse = false
    expect(countAttaqueOudlers([atout01, atout21, excuse])).toEqual(0)
  })
  it('shoud return 3 when every oudler is on attaque', () => {
    const atout01 = true
    const atout21 = true
    const excuse = true
    expect(countAttaqueOudlers([atout01, atout21, excuse])).toEqual(3)
  })
})
