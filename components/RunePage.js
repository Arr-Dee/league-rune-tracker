import React from 'react'
import runepages from "../data/runepages.json"
import firebase from "../config"
import runesReforged from "../data/runesReforged.json"
import PrimaryTree from "./PrimaryTree"
import SecondaryTree from "./SecondaryTree"
import Shards from "./Shards"

export default class RunePage extends React.Component {
    constructor(props){
    super(props);


    this.state = {
        runesReforged,
        menuOne: ["domination", "inspiration", "precision", "resolve", "sorcery"],
        menuTwo: ["inspiration", "domination", "precision", "resolve", "sorcery"],
        runepages,
        pageName: "",
        champIcon: this.props.champIcon,
        champion: this.props.champion,
        treeOne: "domination",
        keystone: "",
        runeOne: "",
        runeTwo: "",
        runeThree: "",
        treeTwo: "inspiration",
        runeFour: "",
        runeFive: "",
        runeSix: "",
        shardOne: "",
        shardTwo: "",
        shardThree: "",
        checksPassed: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleTreeChange = this.handleTreeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChecks = this.handleChecks.bind(this);
    this.handleReset = this.handleReset.bind(this);
    }

     

    // Rune page change handlers - sets state of the target with the selected value.
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
          });      
    }

    handleTreeChange(e){
        // let menuOne = ["domination", "inspiration", "precision", "resolve", "sorcery"]
        // let menuTwo = ["domination", "inspiration", "precision", "resolve", "sorcery"]

        // menuOne = menuOne.filter(item => item !== this.state.treeTwo)
        // menuTwo = menuTwo.filter(item => item !== this.state.treeOne)

        var myRadioList = document.getElementsByTagName("input");
            for (let i = 0; i < myRadioList.length; i++) {
                if (e.target.name === "treeTwo") {
                    if (myRadioList[i].type === "radio") {
                        if (myRadioList[i].name === "runeFour" | myRadioList[i].name === "runeFive" | myRadioList[i].name === "runeSix") {
                            myRadioList[i].checked = false;
                        }
                    }
                    this.setState({
                        [e.target.name]: e.target.value,
                        runeFour: "",
                        runeFive: "",
                        runeSix: "",
                    }) 
                } else {
                    if (myRadioList[i].type === "radio") {
                        if (myRadioList[i].name === "keystone" | myRadioList[i].name === "runeOne" | myRadioList[i].name === "runeTwo" | myRadioList[i].name === "runeThree") {
                            myRadioList[i].checked = false;
                        }
                    }
                    this.setState({
                        [e.target.name]: e.target.value,
                        keystone: "",
                        runeOne: "",
                        runeTwo: "",
                        runeThree: "",
                    }) 
                }
            }  
    }

    handleSubmit(e) {
            e.preventDefault();
            const pagesRef = firebase.database().ref('pages');
            const page = {
                pageName: this.state.pageName,
                champIcon: this.state.champIcon,
                champion: this.state.champion,
                treeOne: this.state.treeOne,
                keystone: this.state.keystone,
                runeOne: this.state.runeOne,
                runeTwo: this.state.runeTwo,
                runeThree: this.state.runeThree,
                treeTwo: this.state.treeTwo,
                runeFour: this.state.runeFour,
                runeFive: this.state.runeFive,
                runeSix: this.state.runeSix,
                shardOne: this.state.shardOne,
                shardTwo: this.state.shardTwo,
                shardThree: this.state.shardThree
            }
            // Sends copy of the captured page to Firebase
            if (this.state.checksPassed === true) {
               pagesRef.push(page); 
            }  
            // Resets form
    }

    handleChecks(){
        if (this.state.treeOne === this.state.treeTwo){
            alert("You cannot select the same rune tree for both trees. You must select two different rune trees.")
            this.setState({
                checksPassed: false
            })
        } else if (this.state.runeFour !== "" && this.state.runeFive !== "" && this.state.runeSix !== "") {
            alert("You must only select two runes in your secondary tree.")
            this.setState({
                checksPassed: false
            })
        } else if (this.state.runeOne === "" | this.state.runeTwo === "" | this.state.runeThree === "" | this.state.keystone === "" ) {
            alert("Please ensure you have selected a keystone and three runes in your primary tree.")
            this.setState({
                checksPassed: false
            })
        } else if (this.state.runeFour === "" && this.state.runeFive === "") {
            alert("Please ensure you have selected two runes from your secondary tree.")
            this.setState({
                checksPassed: false
            })
        } else if (this.state.shardOne === "" | this.state.shardTwo === "" | this.state.shardThree === "" | this.state.keystone === "" ) {
            alert("Please ensure you have selected your three shards (offense, flex and defense).")
            this.setState({
                checksPassed: false
            })
        } else if (this.state.pageName === "") {
            alert("You must name your rune page")
            this.setState({
                checksPassed: false
            })
        }
        else {
            this.setState({
                checksPassed: true
            })
        }
    }

    handleReset(){
        var myRadioList = document.getElementsByTagName("input");
        for (let i = 0; i < myRadioList.length; i++) {
            if (myRadioList[i].type === "radio") {
                    myRadioList[i].checked = false;
                }
            }
        this.setState({
            pageName: "",
            keystone: "",
            runeOne: "",
            runeTwo: "",
            runeThree: "",
            runeFour: "",
            runeFive: "",
            runeSix: "",
            shardOne: "",
            shardTwo: "",
            shardThree: "",
            checksPassed: false,
        })
    }

    // Re-updates the Child (RunePage), if the props from the Parent (ChampList) have changed.
    componentDidUpdate(prevProps){
        if(prevProps.champIcon !== this.props.champIcon){
            this.setState({
                champIcon: this.props.champIcon,
                champion: this.props.champion
            })
        }
     };

  


    render() {
        return (           
            <div className="RunePage">
                <form onSubmit={this.handleSubmit}>
                    <div className="runepage-upper">
                        <div className="PrimaryRunes">
                            <select onChange={this.handleTreeChange} list="primary" id="primaryRune" name="treeOne">
                                {this.state.menuOne.map((name, index) => (
                                    <option value={name} key={index}>{name.toUpperCase()}</option>
                                ))}
                            </select>
                            <p>Select at least one rune from each row</p><br />
                            <PrimaryTree onChange={this.handleChange}  name={this.state.treeOne}/>
                        </div>

                        <div className="SecondaryRunes">
                            <select  onChange={this.handleTreeChange} id="secondary" name="treeTwo">
                                {this.state.menuTwo.map((name, index) => (
                                    <option value={name} key={index}>{name.toUpperCase()}</option>
                                ))}
                            </select>
                            <p>Select a total of two runes from different rows.</p><br />
                            <SecondaryTree onChange={this.handleChange}  name={this.state.treeTwo}/>
                            <Shards onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="runepage-lower">
                        <div className="ControlBar">
                            <label>Rune Page name:</label>
                            <input type="text" name="pageName" onChange={this.handleChange} value={this.state.pageName}></input>
                            <button onClick={this.handleReset}>Reset</button>
                            <button onClick={this.handleChecks}>Save page</button>
                        </div>
                    </div>               
                </form>
            </div>
        )
    }
} 