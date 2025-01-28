import { Component } from "react";
import Button from "./02-List-Practice/Button";

class ClassBasedComponent extends Component{

    state = {
        showtext: true,
        changeColor: false
    }

    handleClick = () => {
        this.setState({
            showtext : !this.state.showtext,
            changeColor: !this.state.changeColor
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
    </div>
   }
}

export default ClassBasedComponent;