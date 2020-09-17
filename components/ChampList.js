import React from 'react'
import champion from '../data/champion.json'
import questionMark from '../img/question.png'
import RunePage from "./RunePage"
import ChampInfo from "./ChampInfo"
import AatroxJSON from "../data/aatrox.json"
import SkillList from "./SkillList"

// var listOfChamps = [];

export default class ChampList extends React.Component {
    constructor(props) {
        super(props);

        // Variables. keys extracts champion names from JSON
        var keys = Object.keys(champion.data);
        // var championNamesLength = Object.keys(champion.data).length;
        // var i = 0;
    
        // // Use keys to find actual names in JSON (e.g. MissFortune -> Miss Fortune)
        // // and return as a list of strings ["Aatrox",...]
        // for (i = 0; i < championNamesLength; i++) {
        //     var findName = champion.data[keys[i]].name;
        //     listOfChamps.push(findName)

        // };

        // // Sorts by A to Z
        // listOfChamps.sort()
        // // Removes duplicates
        // const uniqueSet =  new Set(listOfChamps)
        // listOfChamps = [...uniqueSet]

        // Declare a state, being the list of names of champions.
        this.state = { 
            keys,
            championJSON: AatroxJSON,
            // listOfChamps,
            selectedChamp: "Aatrox",
            source: "https://raw.communitydragon.org/10.14/game/assets/characters/aatrox/hud/aatrox_circle.png",
            key: "266",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        let championName = event.target.value.toLowerCase()
        switch (championName) {
            case "none":
                var sourceFile = questionMark
                break;
            case "anivia":
                sourceFile = "https://raw.communitydragon.org/10.14/game/assets/characters/anivia/hud/cryophoenix_circle.png"
                console.log("case called")
            break;
            // ..._circle_0.{championName}.png case
            case "aphelios":
            case "senna":
            case "sett":
                sourceFile = "http://raw.communitydragon.org/10.14/game/assets/characters/"+ championName +"/hud/"+ championName +"_circle_0."+ championName +".png"
                break;
            case "volibear":
                sourceFile = "http://raw.communitydragon.org/10.14/game/assets/characters/volibear/hud/volibear_circle_0.voli.png";
                break;
            case "blitzcrank":
                sourceFile = "http://raw.communitydragon.org/10.14/game/assets/characters/blitzcrank/hud/steamgolem_circle.png";
                break;
            case "chogath":
                sourceFile = "http://raw.communitydragon.org/10.14/game/assets/characters/chogath/hud/greenterror_circle.png"
                break;
            case "fiddlesticks":
                sourceFile = "http://raw.communitydragon.org/10.14/game/assets/characters/fiddlesticks/hud/fiddlesticks_circle_0.fiddlesticksrework.png"
                break;
            case "orianna":
                sourceFile = "http://raw.communitydragon.org/10.14/game/assets/characters/orianna/hud/oriana_circle.png";
                break;
            case "rammus":
                sourceFile = "http://raw.communitydragon.org/10.14/game/assets/characters/rammus/hud/armordillo_circle.png";
                break;
            case "shaco":
                sourceFile = "http://raw.communitydragon.org/10.14/game/assets/characters/shaco/hud/jester_circle.png"
                break;
            case "zilean":
                sourceFile = "http://raw.communitydragon.org/10.14/game/assets/characters/zilean/hud/chronokeeper_circle.png";
                break;
            // ..._circle_0 case
            case "amumu":
            case "brand":
            case "cassiopeia":
            case "corki":
            case "darius":
            case "diana":
            case "fizz":
            case "hecarim":
            case "irelia":
            case "jarvaniv":
            case "jax":
            case "jhin":
            case "kalista":
            case "kassadin":
            case "kayle":
            case "kogmaw":
            case "leblanc":
            case "lux":
            case "lulu":
            case "missfortune":
            case "mordekaiser":
            case "morgana":
            case "nautilus":
            case "neeko":
            case "nocturne":
            case "nunu":
            case "pantheon":
            case "pyke":
            case "qiyana":
            case "renekton":
            case "rengar":
            case "ryze":
            case "sejuani":
            case "shyvana":
            case "singed":
            case "swain":
            case "sylas":
            case "syndra":
            case "talon":
            case "teemo":
            case "twistedfate":
            case "varus":
            case "vladimir":
            case "warwick":
            case "xinzhao":
            case "yummi":
            case "zed":
            case "zyra":
            case "masteryi":
            case "drmundo":
                sourceFile = "https://raw.communitydragon.org/10.14/game/assets/characters/" + championName +"/hud/" + championName + "_circle_0.png"
                break;

            case "wukong":
                sourceFile = "https://raw.communitydragon.org/10.14/game/assets/characters/monkeyking/hud/monkeyking_circle.png"
                break;
            
            default:
                var path = championName
                sourceFile = "https://raw.communitydragon.org/10.14/game/assets/characters/" + path +"/hud/" + path + "_circle.png"
        }

        const eventValue = event.target.value
        const currentKey = champion.data[event.target.value].key

        fetch("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/" + currentKey + ".json")
        .then(data => data.json())
        .then(json => this.setState({
            championJSON: json,
            source: sourceFile,
            selectedChamp: eventValue,
            key: currentKey,
        }));
        console.log(this.state.theJSON)
    }

    handleClick(event) {
        this.setState({
            selectedChamp: event.target.value,
            
        })
        console.log(this.state.selectedChamp)
        this.handleChange(event)
    }

    render() {
        return (
            <div className="ChampList">
                <div className="champlist-container">
                    <div className="champlist-left">
                        <label htmlFor="championList">Select champion:</label><br />
                        <select 
                            onClick={this.handleClick}
                            onChange={this.handleChange} 
                            // onClick={(e) => {this.handleClick(e)}} 
                            id="champions">
                            {this.state.keys.map((champKey, index) => (
                                <option key={index} value={champKey}>{champion.data[champKey].name}</option>
                            ))}
                        </select><br /><br />    
                        <div className="icon-container">
                            <img src={this.state.source} alt={this.state.selectedChamp} />
                            <div className="border-container"></div>
                        </div>
                        <div>
                            <SkillList championJSON={this.state.championJSON}/>
                        </div>
                    </div>
                    <div className="champlist-right">
                            <ChampInfo
                            name={champion.data[this.state.selectedChamp].name}
                            title={champion.data[this.state.selectedChamp].title}
                            // blurb={champion.data[this.state.selectedChamp].blurb}
                            info={champion.data[this.state.selectedChamp].info}
                            data={champion.data[this.state.selectedChamp]}
                            />
                    </div>                       
                </div>     
                {/* Passes down image URL and champion name */}
                <RunePage 
                    champion={this.state.selectedChamp} 
                    champIcon={this.state.source}/>
            </div>
        )
    }
}