import React from "react"
import Page from "./Page"
import firebase from "../config"

export default class SavedPages extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          pages: []
        }
    }

    componentDidMount() {
        const pagesRef = firebase.database().ref('pages');
        pagesRef.on('value', (snapshot) => {
          let pages = snapshot.val();
          let newState = [];
          for (let page in pages) {
            newState.push({
              id: page,
              pageName: pages[page].pageName,
              champIcon: pages[page].champIcon,
              champion: pages[page].champion,
              treeOne: pages[page].treeOne,
              keystone: pages[page].keystone,
              runeOne: pages[page].runeOne,
              runeTwo: pages[page].runeTwo,
              runeThree: pages[page].runeThree,
              treeTwo: pages[page].treeTwo,
              runeFour: pages[page].runeFour,
              runeFive: pages[page].runeFive,
              runeSix: pages[page].runeSix,
              shardOne: pages[page].shardOne,
              shardTwo: pages[page].shardTwo,
              shardThree: pages[page].shardThree
            });
          }
          this.setState({
            pages: newState
          });
        });
      }

      removePage(pageId) {
        const pageRef = firebase.database().ref(`/pages/${pageId}`);
        pageRef.remove();
      }

    render() {
        return (
            <div className="SavedPages">
                <h2>Saved Rune Pages</h2>
                {this.state.pages.map((page) => {
                    return (
                        <div key={page.id}>
                        <Page 
                        pageName={page.pageName}
                        champIcon={page.champIcon}
                        champion ={page.champion}
                        treeOne= {page.treeOne}
                        keystone= {page.keystone}
                        runeOne= {page.runeOne}
                        runeTwo= {page.runeTwo}
                        runeThree= {page.runeThree}
                        treeTwo= {page.treeTwo}
                        runeFour= {page.runeFour}
                        runeFive= {page.runeFive}
                        runeSix = {page.runeSix}
                        shardOne= {page.shardOne}
                        shardTwo= {page.shardTwo}
                        shardThree= {page.shardThree}   
                        onClick={() => this.removePage(page.id)}
                        >
                        </Page>
                        </div>
                    )
                })}


            </div>
        )
    }
}