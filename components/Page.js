import React from "react"

export default class Page extends React.Component {
     
    render() {
        let secondRuneOne = "";
        let secondRuneTwo = "";

        if (this.props.runeFour === "") {
            secondRuneOne = this.props.runeFive;
            secondRuneTwo = this.props.runeSix;
        } else if (this.props.runeFive === "") {
            secondRuneOne = this.props.runeFour;
            secondRuneTwo = this.props.runeSix;
        } else {
            secondRuneOne = this.props.runeFour;
            secondRuneTwo = this.props.runeFive;
        }
        
        let keystone = this.props.keystone.toLowerCase();
        keystone = keystone.replace(/\s/g, '');
        let pathToKeystone = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/" + this.props.treeOne + "/" + keystone + "/" + keystone + ".png"

        if (keystone === "prototype:omnistone") {
            pathToKeystone = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/masterkey/masterkey.png"
        }

        let pathToTreeTwo = this.props.treeTwo.toLowerCase();

        switch (pathToTreeTwo) {
            case "domination":
                pathToTreeTwo = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/7200_domination.png"
                break;
        
                case "resolve":
                    pathToTreeTwo = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/7204_resolve.png"
                    break;

                    case "precision":
                        pathToTreeTwo = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/7201_precision.png"
                        break;

                        case "inspiration":
                            pathToTreeTwo = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/7203_whimsy.png"
                            break;

                            case "sorcery":
                                pathToTreeTwo = "https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/7202_sorcery.png"
                                break;
            default:
                break;
        }
        console.log(pathToTreeTwo)


        return (
            <div className="Page" draggable="true">
                <div className="PageImage">
                    <img src={this.props.champIcon} alt="anivia" />
                    {/* <h3>{this.props.champion}</h3> */}
                    
                    <div className="PerkImages">
                        <div className="KeystoneImage">
                            <img id="keystone" src={pathToKeystone} alt={this.props.keystone}></img>
                        </div>
                        <div className="TreeTwoImage">
                            <img id="treeTwo" src={pathToTreeTwo} alt={this.props.treeTwo}></img>
                        </div>
                        
                    </div>
                    
                    
                </div>
                <div className="CardContainer">
                <h3>{this.props.pageName}</h3>
                    <div className="PageCard">
                    
                        <div className="PageCardSection">
                            <h4>{this.props.treeOne}</h4>
                                <ul>
                                    <li id="keystone">{this.props.keystone}</li>
                                    <li>{this.props.runeOne}</li>
                                    <li>{this.props.runeTwo}</li>
                                    <li>{this.props.runeThree}</li>
                                </ul>
                        </div>
                        <div className="PageCardSection">
                            <h4>{this.props.treeTwo}</h4>
                                <ul>
                                    <li>{secondRuneOne}</li>
                                    <li>{secondRuneTwo}</li>
                                </ul>
                            <h4>Shards</h4>
                                <ul id="shards">
                                    <li>{this.props.shardOne}</li>
                                    <li>{this.props.shardTwo}</li>
                                    <li>{this.props.shardThree}</li>
                                </ul>
                        
                        </div>
                    </div>
                    
                </div>
                <div className="remove-item" onClick={this.props.onClick}>
                    <h5>X</h5>
                </div>
            </div>
        )
    }
}
