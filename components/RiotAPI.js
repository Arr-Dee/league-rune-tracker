import React from "react"

export default class RiotAPI extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/Xenonkiin/by-champion/Vi")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    render() {
        return (
            <div className="RiotAPI">

            </div>
        )
    }
}