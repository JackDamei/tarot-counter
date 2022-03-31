export const pointsTarget = { 0: 56, 1: 51, 2: 41, 3: 36 }
const contratMult = { Petite: 1, Garde: 2, 'Garde sans': 4, 'Garde contre': 6 }
const poigneeBonus = { 0: 0, 1: 20, 2: 30, 3: 40 }
const chelemBonus = { non: 0, imprévu: 200, prévu: 400, raté: -200 }

export function calculScoreManche(
  contrat,
  oudlers,
  points,
  petitAuBout,
  poigneeLevel,
  chelem
) {
  const nbOudlers = countAttaqueOudlers(oudlers)
  const target = pointsTarget[nbOudlers]
  const c = contratMult[contrat]
  const isWon = points >= target ? 1 : -1
  const delta = (points - target) * isWon
  const pgn = poigneeBonus[poigneeLevel]
  const pab = petitAuBout ? 10 : 0
  const ch = chelemBonus[chelem]

  let score = c * (isWon * (25 + delta + pgn) + pab) + ch
  return score
}

export function countAttaqueOudlers(oudlers) {
  return (oudlers[0] ? 1 : 0) + (oudlers[1] ? 1 : 0) + (oudlers[2] ? 1 : 0)
}
