import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Transction from './Transction'

class Transcations extends Component{
constructor(){
    super()
}
delete=(e)=>{
 //console.log( e.target.name)
this.props.deleteFromState(e.target.name)
}

render() {
    let users = this.props.state.users
    return (
          <div className="customers"  >
            <tr className="tr">
                             <th className="th">Amount</th>
                             <th className="th">Vendor</th>
                             <th className="th">Category</th>
                             <th className="th">delete</th>
                          </tr>
             {users.map((m,k) => {
                 return ( 
                      
                     <div>
                         <td className="tdBtn"> <button onClick={this.delete} name = {m._id}>delete</button></td>
                     <Transction  state={m} />
                     
                    </div>
                     
                 )
             })}
         </div>
         
    )
}

        
}
export default Transcations