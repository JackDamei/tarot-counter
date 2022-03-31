import React, { useState, createContext } from 'react'

export const MancheDataContext = createContext()

export const MancheDataProvider = ({ children }) => {
  const preneurState = useState('')
  const contratState = useState('')
  const atout01State = useState(false)
  const atout21State = useState(false)
  const excuseState = useState(false)
  const pointsState = useState(0)
  const petitAuBoutState = useState(false)
  const poigneeLevelState = useState(0)
  const poigneeTypeState = useState('attaque')
  const chelemState = useState('non')

  return (
    <MancheDataContext.Provider
      value={{
        preneurState,
        contratState,
        atout01State,
        atout21State,
        excuseState,
        pointsState,
        petitAuBoutState,
        poigneeLevelState,
        poigneeTypeState,
        chelemState,
      }}
    >
      {children}
    </MancheDataContext.Provider>
  )
}
