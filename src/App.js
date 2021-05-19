import React from "react";
import Button from "./Components/Button";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lampOn: "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png",
      lampOff: "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png",
      status: false
    };
  }

  switchOff=()=>{
    this.setState({status:true})
  }

  switchOn=()=>{
    this.setState({status:false})
  }
 

  render(){

    return(
      <div>
        <img src={this.state.status ? this.state.lampOn : this.state.lampOff} alt="lamp"/>
        <Button func={this.switchOff} btnName="SwitchOn"/>
        <Button func={this.switchOn} btnName="SwitchOff"/>

      </div>
    ) 
  }

} 
export default App;
