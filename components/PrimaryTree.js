import React from "react"
import RadioGroup from "./RadioGroup"
import runepages from "../data/runepages.json"

export default class PrimaryTree extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         selectedTree: this.props.name,
    //         didUpdate: false
    //     }
    // }
    // // componentWillUpdate(nextProps){
    // //     if (this.props.name !== nextProps.name){
    // //         this.setState({
    // //             selectedTree: nextProps.name,
    // //             didUpdate: true
    // //         })
    // //     }
    // // } 

    render() {
        // const selectedTree = this.state.selectedTree
        const selectedTree = this.props.name
        return (
            <div className="PrimaryTree" onChange={this.props.onChange}>
                    <RadioGroup value={runepages[selectedTree].keystone} name="keystone" id="keystone" />
                    <RadioGroup value={runepages[selectedTree].firstRow} name="runeOne" id="runeOne" />
                    <RadioGroup value={runepages[selectedTree].secondRow} name="runeTwo" id="runeTwo" />
                    <RadioGroup value={runepages[selectedTree].thirdRow} name="runeThree" id="runeThree" />
            </div>
        )
    }
}