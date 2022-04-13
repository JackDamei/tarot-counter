import { calculScoreManche, countAttaqueOudlers } from './calcul'

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

const testManche = {
  preneur: 'Ouest',
  contrat: 'Garde',
  oudlers: [false, false, false],
  points: 56,
  petitAuBout: true,
  poigneeLevel: 0,
  chelem: 'non',
}

describe('The calculScoreManche function', () => {
  it('gives correct score', () => {
    const { contrat, oudlers, points, petitAuBout, poigneeLevel, chelem } =
      testManche
    expect(
      calculScoreManche(
        contrat,
        oudlers,
        points,
        petitAuBout,
        poigneeLevel,
        chelem
      )
    ).toBe(50)
  })
})
