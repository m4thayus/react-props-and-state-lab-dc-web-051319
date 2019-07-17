import React from 'react'

class Pet extends React.Component {
    // Test won't pass with this... >:(
    // renderButton = () => {
    //     if (this.props.isAdopted) {
    //         return (
    //             <button className="ui disabled button">Already adopted</button>
    //         )
    //     } else {
    //         return (
    //             <button
    //                 className="ui primary button" 
    //                 onClick={() => this.props.onAdoptPet(this.props.pet.id)}
    //             >Adopt pet</button>
    //         )
    //     }
    // }

    render() {
        return (this.props.isAdopted ?
            <div className="card">
                <div className="content">
                    <a className="header">
                        {this.props.pet.gender === 'male' ? '♂' : '♀'} 
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
                    <button className="ui disabled button">Already adopted</button> 
                </div>
            </div>
            :
            <div className="card">
                <div className="content">
                    <a className="header">
                        {this.props.pet.gender === 'male' ? '♂' : '♀'} 
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
                    <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
                </div>
            </div>
        )
    }
}
export default Pet
