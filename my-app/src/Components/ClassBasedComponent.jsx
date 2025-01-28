import { Component } from "react";
import Button from "./02-List-Practice/Button";

class ClassBasedComponent extends Component{

    state = {
        showtext: true,
        changeColor: false, 
        count: 0
    }

    handleClick = () => {
        this.setState({
            showtext : !this.state.showtext,
            changeColor: !this.state.changeColor
        })
    }

    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

   render(){
    console.log(this.state.showtext);

    return <div className="mt-6">
        {
            this.state.showtext ? <h4 className={this.state.changeColor ? 'bg-amber-950' : 'bg-amber-500'}>Hi</h4> : null
        }
        <div onClick={this.handleClick}>
           <Button buttonDescription='Toggle Text'/>
        </div>
        <div>{this.state.count}</div>

        <div onClick={this.handleCount}>
        <Button buttonDescription='+' />
        </div>
    </div>
   }
}

export default ClassBasedComponent;