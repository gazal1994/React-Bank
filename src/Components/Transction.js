import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Transcation extends Component{
constructor(){
    super()
}

render() {
    
    return (
        <div>
        
        <tr className="tr">
        <td className={this.props.state.amount<0?"withdraw":"deposit" }>                  
                    {this.props.state.amount}  </td>
                   <td className={this.props.state.amount<0?"withdraw":"deposit" }> 
                   {this.props.state.vendor} </td>
                   <td className={this.props.state.amount<0?"withdraw":"deposit" }> 
                     {this.props.state.category}  </td> 
                        
         
         </tr>
         </div>
    )
}



}

export default Transcation