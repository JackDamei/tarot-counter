import { useState } from 'react'
import { Link } from 'react-router-dom'

function validateForm(joueurs) {
  return !joueurs.includes('') && new Set(joueurs).size === joueurs.length
}

function NPFormulaire() {
  const [joueur1, setJoueur1] = useState('Nord')
  const [joueur2, setJoueur2] = useState('Ouest')
  const [joueur3, setJoueur3] = useState('Sud')
  const [joueur4, setJoueur4] = useState('Est')

  return (
    <div className="form-wrapper">
      <label className="form-title">Nom des joueurs</label>
      <div className="form-joueur-div">
        <label className="form-label">Nom du joueur 1 :</label>
        <input
          id="joueur1-name"
          className="form-joueur-input"
          type="text"
          defaultValue="Nord"
          onChange={(e) => setJoueur1(e.target.value)}
        />
      </div>
      <div className="form-joueur-div">
        <label className="form-label">Nom du joueur 2 :</label>
        <input
          id="joueur2-name"
          className="form-joueur-input"
          type="text"
          defaultValue="Ouest"
          onChange={(e) => setJoueur2(e.target.value)}
        />
      </div>
      <div className="form-joueur-div">
        <label className="form-label">Nom du joueur 3 :</label>
        <input
          id="joueur3-name"
          className="form-joueur-input"
          type="text"
          defaultValue="Sud"
          onChange={(e) => setJoueur3(e.target.value)}
        />
      </div>
      <div className="form-joueur-div">
        <label className="form-label">Nom du joueur 4 :</label>
        <input
          id="joueur4-name"
          className="form-joueur-input"
          type="text"
          defaultValue="Est"
          onChange={(e) => setJoueur4(e.target.value)}
        />
      </div>
      <div className="form-validation-div">
        {validateForm([joueur1, joueur2, joueur3, joueur4]) ? (
          <Link to="/dashboard/5" className="footer-button">
            Créer la partie
          </Link>
        ) : (
          <button className="footer-button single-button" disabled={true}>
            Créer la partie
          </button>
        )}
      </div>
    </div>
  )
}

export default NPFormulaire
