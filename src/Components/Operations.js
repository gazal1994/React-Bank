import React, {Component } from 'react';

class Operations extends Component {
constructor(){
    super()
    this.state={
            amount: null,
            vendor: '',
            category: ''
    }
        
}
    addTrans=(e)=>{
      let input = e.target.value== Number?+(e.target.value):e.target.value
      let name = e.target.name   
      this.setState({
       [name] :input 
      },function(){
          console.log(this.state)
      })
      
    }
    withdraw=(e)=>{
        let newstate=this.state
         newstate.amount*= -1
       this.props.addTransaction(newstate) 
    }

    deposit=(e)=>{
        this.props.addTransaction(this.state) 
    }
   


    render() { 
        
        return ( 
            <div>
            
            <div  className="inputs">
                 amount:   <input type="number" name="amount"  onChange={this.addTrans} ></input>
                 vendor:   <input type="text" name="vendor" onChange={this.addTrans}></input>
                 category:  <input type="text" name="category" onChange={this.addTrans}></input>
              
            </div>
            <button onClick={this.deposit} >Deposit</button>
            <button onClick={this.withdraw} >Withdraw</button>
            </div>
         );
    }
}
 
export default Operations;