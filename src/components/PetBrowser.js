import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return this.props.pets.map((pet, index) => <div className="ui cards"><Pet key={index} pet={pet} /></div>)
  }
}

export default PetBrowser
