import { Component } from "react";
import "./DestinationStyles.css"

class DestinationData extends Component {
    render () {
        return (
            <div className = {this.props.cName}>
                <div className = "desc-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className = "image">
                    <img alt = "Mountain1" src={this.props.image1}/>
                    <img alt = "Mountain2" src={this.props.image2}/>
                </div>
            </div>
        )
    }
}

export default DestinationData