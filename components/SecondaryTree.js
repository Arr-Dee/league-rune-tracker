import React from "react"
import RadioGroup from "./RadioGroup"
import runepages from "../data/runepages.json"

export default class SecondaryTree extends React.Component{
    render() {
        const selectedTree = this.props.name
        return (
            <div className="SecondaryTree" onChange={this.props.onChange}>
                    <RadioGroup value={runepages[selectedTree].firstRow} name="runeFour" id="runeFour" />
                    <RadioGroup value={runepages[selectedTree].secondRow} name="runeFive" id="runeFive" />
                    <RadioGroup value={runepages[selectedTree].thirdRow} name="runeSix" id="runeSix" />
            </div>
        )
    }
}