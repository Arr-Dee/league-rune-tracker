import React from "react"
import Tooltip from "react-simple-tooltip" //https://reactjsexample.com/a-lightweight-and-simple-tooltip-component-for-react/

export default class Shards extends React.Component{
    render() {
        return (
            <div className="Shards" onChange={this.props.onChange}>
                <div id="offense">
                        <h3>Offense: </h3>
                        <input type="radio" name="shardOne" id="shard1" onChange={this.handleChange} value="adaptive force"/>
                        <label htmlFor="shard1">
                            <Tooltip content={<div className="content">+9 <strong>Adaptive Force</strong></div>}>
                                <img src="https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/statmodsadaptiveforceicon.png" alt="adaptive force"></img>
                            </Tooltip>
                        </label>

                        <input type="radio" name="shardOne" id="shard2" onChange={this.handleChange} value="attack speed"/>
                        <label htmlFor="shard2">
                            <Tooltip content={<div className="content">+10% Attack Speed</div>}>
                                <img src="https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/statmodsattackspeedicon.png" alt="attack speed"></img>
                            </Tooltip>
                        </label>
                        <input type="radio" name="shardOne" id="shard3" onChange={this.handleChange} value="CD reduction"/>
                        <label htmlFor="shard3">
                            <Tooltip content={<div className="content">+1-10% <strong>Cooldown Reduction</strong> (based on level)</div>}>
                                <img src="https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/statmodscdrscalingicon.png" alt="attack speed"></img>
                            </Tooltip>
                        </label><br />
                </div>

                <div id="flex">
                        <h3>Flex: </h3>
                        <input type="radio" name="shardTwo" id="shard4" onChange={this.handleChange} value="adaptive force"/>
                            <label htmlFor="shard4">
                                <Tooltip content={<div className="content">+9 <strong>Adaptive Force</strong></div>}>
                                    <img src="https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/statmodsadaptiveforceicon.png" alt="adaptive force"></img>
                                </Tooltip>
                            </label>
                        <input type="radio" name="shardTwo" id="shard5" onChange={this.handleChange} value="armor"/>
                            <label htmlFor="shard5">
                                <Tooltip content={<div className="content">+6 Armor</div>}>
                                    <img src="https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/statmodsarmoricon.png" alt="armor"></img>
                                </Tooltip>
                            </label>
                        <input type="radio" name="shardTwo" id="shard6" onChange={this.handleChange} value="MR"/>
                            <label htmlFor="shard6">
                                <Tooltip content={<div className="content">+8 Magic Resist</div>}>
                                    <img src="https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/statmodsmagicresicon.png" alt="magic resist"></img>
                                </Tooltip>
                            </label>
                </div>

                <div id="defense">
                        <h3>Defense: </h3>
                        <input type="radio" name="shardThree" id="shard7" onChange={this.handleChange} value="health"/>
                            <label htmlFor="shard7">
                                <Tooltip content={<div className="content">+15-90 Health (based on level)</div>}>
                                    <img src="https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/statmodshealthscalingicon.png" alt="bonus health"></img>
                                </Tooltip>
                            </label>
                        <input type="radio" name="shardThree" id="shard8" onChange={this.handleChange} value="armor"/>
                            <label htmlFor="shard8">
                                <Tooltip content={<div className="content">+6 Armor</div>}>
                                    <img src="https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/statmodsarmoricon.png" alt="armor"></img>
                                </Tooltip>
                            </label>
                        <input type="radio" name="shardThree" id="shard9" onChange={this.handleChange} value="MR"/>
                            <label htmlFor="shard9">
                                <Tooltip content={<div className="content">+8 Magic Resist</div>}>
                                    <img src="https://raw.communitydragon.org/10.14/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/statmodsmagicresicon.png" alt="magic resist"></img>
                                </Tooltip>
                            </label>
                </div>

            </div>
        )
    }
}