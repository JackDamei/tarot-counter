import { calculScoreManche } from '../../utils/calcul'

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
