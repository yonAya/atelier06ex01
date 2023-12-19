import { Component } from 'react'

class Calcul extends Component {
  constructor(props) {
    super(props)

    this.state = {
      capital: 0,
      taux: 0,
      duree: 0,
      mensualite: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.calculer = this.calculer.bind(this)
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  calculer() {
    const mensualite =
      (this.state.capital * this.state.taux) /
      1200 /
      (1 - Math.pow(1 + this.state.taux / 1200, -this.state.duree))

    this.setState({ mensualite: mensualite.toFixed(2) })
  }

  render() {
    return (
      <div className="calcul">
        <div className="form">
          <div className="form-group">
            <label htmlFor="capital">Capital emprunté :</label>
            <input
              type="text"
              name="capital"
              id="capital"
              value={this.state.capital}
              onChange={this.handleChange}
            />
            DH
          </div>

          <div className="form-group">
            <label htmlFor="taux">Taux d'interet :</label>
            <input
              type="text"
              name="taux"
              id="taux"
              value={this.state.taux}
              onChange={this.handleChange}
            />
            %
          </div>

          <div className="form-group">
            <label htmlFor="duree">Durée de remboursement :</label>
            <input
              type="text"
              name="duree"
              id="duree"
              value={this.state.duree}
              onChange={this.handleChange}
            />
            mois
          </div>
          <hr />

          <button onClick={this.calculer}>Calculer</button>

          <div className="form-group">
            <label htmlFor="mensualite">Mensualité :</label>
            <input
              value={this.state.mensualite}
              onChange={this.handleChange}
              type="text"
              name="mensualite"
              id="mensualite"
              readOnly
            />
            DH
          </div>
        </div>
      </div>
    )
  }
}

export default Calcul
