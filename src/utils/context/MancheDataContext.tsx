import React, { useState, createContext, FC } from 'react'

interface IMancheDataContext {
  preneurState: [string, React.Dispatch<React.SetStateAction<string>>]
  contratState: [string, React.Dispatch<React.SetStateAction<string>>]
  atout01State: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  atout21State: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  excuseState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  pointsState: [number, React.Dispatch<React.SetStateAction<number>>]
  petitAuBoutState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  poigneeLevelState: [number, React.Dispatch<React.SetStateAction<number>>]
  poigneeTypeState: [string, React.Dispatch<React.SetStateAction<string>>]
  chelemState: [string, React.Dispatch<React.SetStateAction<string>>]
}

export const MancheDataContext = createContext<IMancheDataContext>(
  {} as IMancheDataContext
)

export const MancheDataProvider: FC = ({ children }) => {
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
