import React, { Component } from 'react'
import Tooltip from "react-simple-tooltip" //https://reactjsexample.com/a-lightweight-and-simple-tooltip-component-for-react/

export default class SkillList extends Component {
    render() {
        const tooltipFontSize = "12px"
        let pathtoPassive = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/assets/characters/" + this.props.championJSON.passive.abilityIconPath.toLowerCase().substring(39)
        let pathtoQ = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/assets/characters/" + this.props.championJSON.spells[0].abilityIconPath.toLowerCase().substring(39)
        let pathtoW = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/assets/characters/" + this.props.championJSON.spells[1].abilityIconPath.toLowerCase().substring(39)
        let pathtoE = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/assets/characters/" + this.props.championJSON.spells[2].abilityIconPath.toLowerCase().substring(39)
        let pathtoR = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/assets/characters/" + this.props.championJSON.spells[3].abilityIconPath.toLowerCase().substring(39)


        const passiveContent = (
            <div className="content">
                <h2>{"Passive: " + this.props.championJSON.passive.name}</h2>
                <p>{this.props.championJSON.passive.description}</p>
            </div>
        )

        const qContent = (
            <div className="content">
                <h2>{"Q: " + this.props.championJSON.spells[0].name}</h2>
                <p>{this.props.championJSON.spells[0].description}</p>
            </div>
        )

        const wContent = (
            <div className="content">
                <h2>{"W: " + this.props.championJSON.spells[1].name}</h2>
                <p>{this.props.championJSON.spells[1].description}</p>
            </div>
        )

        const eContent = (
            <div className="content">
                <h2>{"E: " + this.props.championJSON.spells[2].name}</h2>
                <p>{this.props.championJSON.spells[2].description}</p>
            </div>
        )

        const rContent = (
            <div className="content">
                <h2>{"R: " + this.props.championJSON.spells[3].name}</h2>
                <p>{this.props.championJSON.spells[3].description}</p>
            </div>
        )
        return (
            <div className="SkillList">
                <Tooltip 
                    content={passiveContent} fontSize={tooltipFontSize} placement="bottom" fadeDuration={200} fadeEasing="linear">
                    <img src={pathtoPassive} alt={this.props.championJSON.name.toLowerCase() + " passive"}></img>
                </Tooltip>
                <Tooltip 
                    content={qContent} fontSize={tooltipFontSize} placement="bottom" fadeDuration={200} fadeEasing="linear">
                    <img src={pathtoQ} alt={this.props.championJSON.name.toLowerCase() + " Q"}></img>
                </Tooltip>
                <Tooltip 
                    content={wContent} fontSize={tooltipFontSize} placement="bottom" fadeDuration={200} fadeEasing="linear">
                    <img src={pathtoW} alt={this.props.championJSON.name.toLowerCase() + " W"}></img>
                </Tooltip>
                <Tooltip 
                    content={eContent} fontSize={tooltipFontSize} placement="bottom" fadeDuration={200} fadeEasing="linear">
                    <img src={pathtoE} alt={this.props.championJSON.name.toLowerCase() + " E"}></img>
                </Tooltip>
                <Tooltip 
                    content={rContent} fontSize={tooltipFontSize} placement="bottom" fadeDuration={200} fadeEasing="linear">
                    <img src={pathtoR} alt={this.props.championJSON.name.toLowerCase() + " R"}></img>
                </Tooltip>
            </div>
        )
    }
}
