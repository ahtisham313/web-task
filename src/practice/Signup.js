import { Component } from "react";

class Signup extends Component()

{
   
    state={
        username:"ali",
 password: '123'}

 changestate(){
    
console.log('click')
 }
    render(){

    
    return(<div>
        <h2>username{this.state.username}</h2>
        <h2>password{this.state.password}</h2>
        <button >Signup</button>
        <button onClick={this.changestate}>change state</button>
        </div>
    );
    }
}
export default Signup;