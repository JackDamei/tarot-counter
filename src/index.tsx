import React from 'react'
import ReactDOM from 'react-dom'
import './utils/style/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { MancheDataProvider } from './utils/context/MancheDataContext'
import NouvelleManche from './pages/NouvelleManche'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import GameDashboard from './pages/GameDashboard'
import NouvellePartie from './pages/NouvellePartie'

ReactDOM.render(
  <React.StrictMode>
    <div id="root-div">
      <Router>
        <Header />
        <div className="body-div">
          <div className="margin-div" />
          <div className="content-div">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/nouvellemanche"
                element={
                  <MancheDataProvider>
                    <NouvelleManche />
                  </MancheDataProvider>
                }
              />
              <Route path="/dashboard/:gameId" element={<GameDashboard />} />
              <Route path="/nouvellepartie" element={<NouvellePartie />} />
              <Route
                path="/offline"
                element={
                  <MancheDataProvider>
                    <NouvelleManche offline={true} />
                  </MancheDataProvider>
                }
              />
            </Routes>
          </div>
          <div className="margin-div" />
        </div>
        <Footer />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
