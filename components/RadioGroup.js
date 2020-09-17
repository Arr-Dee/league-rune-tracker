import React from "react"
import Perks from "../data/perks.json"
import Tooltip from "react-simple-tooltip" //https://reactjsexample.com/a-lightweight-and-simple-tooltip-component-for-react/

export default class RadioGroup extends React.Component {

render() {
        var items = []
        var elements = Object.keys(this.props.value).length + 1
        for (var i=1; i < elements; i++){ 
            for (let j = 0; j < Perks.length; j++) {
                if (this.props.value[i] === Perks[j].name) {
                    let pathToIcon = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/" + Perks[j].iconPath.toLowerCase().substring(25)
                    items.push(
                        <span key={Perks[j].id}>
                                <input type="radio" name={this.props.name} id={this.props.id + i} value={this.props.value[i]} />
                                <label htmlFor={this.props.id + i}>
                                    <Tooltip content={(
                                        <div className="content">
                                            <h2>{Perks[j].name}</h2>
                                                <p>
                                                    {Perks[j].shortDesc}
                                                </p>
                                        </div>)}
                                        fontSize="12px" placement="top" fadeDuration={200} fadeEasing="linear">
                                        <img src={pathToIcon} alt={this.props.value[i]}></img>
                                    </Tooltip>
                                </label>   
                        </span>
                    )
                }            
            }
        };
        return (
            <div className="RadioGroup" onChange={this.props.onChange}>
                {items}
            </div>
        )
    }
}
