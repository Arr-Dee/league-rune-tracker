import React, { Component } from 'react'

export default class Popup extends Component {
     
    render() {
        return (
            <div className="Popup">
                <div className="modal" style={{display: this.props.style}}>
                    <div className="outer-container">
                        <div className="modal-container">
                            <button onClick={this.props.onClick} className="close">&times;</button>
                            <div className="modal-content">
                                {this.props.children}
                            </div>  
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
