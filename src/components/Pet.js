import React from 'react'

class Pet extends React.Component {

  handleAdoptClick = (event) => {
      this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    let adoptButton

    if(this.props.pet.isAdopted){
      adoptButton = <button className="ui disabled button">Already adopted</button>
    } else {
      adoptButton = <button className="ui primary button" onClick={this.handleAdoptClick}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male" ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
<<<<<<< HEAD
          {adoptButton}
=======
          {if(this.props.isAdopted){
            button = <button className="ui disabled button">Already adopted</button>
          } else {
            button = <button className="ui primary button">Adopt pet</button>
          }}
>>>>>>> 01f17c950b306619a0bde53116aedd673949a665
        </div>
      </div>
    )
  }
}

export default Pet
