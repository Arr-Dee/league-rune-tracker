import React from "react"

export default class ChampInfo extends React.Component {
    render() {

        return (
            <div className="ChampInfo">
                <h2>{this.props.name}</h2>
                <h4>{this.props.title}</h4>

                <ul className="champion-tags">
                {this.props.data.tags.map((tag, index) => (
                    <li key={index}>{this.props.data.tags[index]}</li>
                ))}
                </ul>

                <p>{this.props.blurb}</p>

                <div className="champion-ratings">
                    <ul>
                        <li id="attack">
                            <div className="stat-bar-container">
                                <div id="attack-bar" style={{width: this.props.info.attack * 9.6}}></div>
                            </div>
                            Attack: {this.props.info.attack}
                        </li>
                        <li id="defense">
                            <div className="stat-bar-container">
                                <div id="defense-bar" style={{width: this.props.info.defense * 9.6}}></div>
                            </div>
                            Defense: {this.props.info.defense}
                        </li>
                        <li id="magic">
                            <div className="stat-bar-container">
                                <div id="magic-bar" style={{width: this.props.info.magic * 9.6}}></div>
                            </div>
                            Magic: {this.props.info.magic}
                        </li>
                        <li id="difficulty">
                            <div className="stat-bar-container">
                                <div id="difficulty-bar" style={{width: this.props.info.difficulty * 9.6}}></div>
                            </div>
                            Difficulty: {this.props.info.difficulty}
                        </li>
                    </ul>
                </div>
                
                <div className="stats">
                    <ul>
                        <li>HP: {this.props.data.stats.hp} (+{this.props.data.stats.hpperlevel} per level)</li>
                        <li>Mana: {this.props.data.stats.mp} (+{this.props.data.stats.mpperlevel} per level)</li>
                        <li>Armor: {this.props.data.stats.armor} (+{this.props.data.stats.armorperlevel} per level)</li>
                        <li>Attack Damage: {this.props.data.stats.attackdamage} (+{this.props.data.stats.attackdamageperlevel} per level)</li>
                        <li>Critical chance: {this.props.data.stats.crit}% (+{this.props.data.stats.critperlevel} per level)</li>
                    </ul>                    
                    <ul>
                        <li>HP Regen: {this.props.data.stats.hpregen} (+{this.props.data.stats.hpregenperlevel} per level)</li>
                        <li>Mana Regen: {this.props.data.stats.mpregen} (+{this.props.data.stats.mpregenperlevel} per level)</li>
                        <li>Magic Resistance: {this.props.data.stats.spellblock} (+{this.props.data.stats.spellblockperlevel} per level)</li>
                        <li>Attack Speed: {this.props.data.stats.attackspeed} (+{this.props.data.stats.attackspeedperlevel} per level)</li>
                    </ul>

                </div>

            </div>
        )
    }
}