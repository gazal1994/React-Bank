import React, { Component } from 'react';
import { Promise } from 'mongoose';
class Breakdown extends Component {
    constructor (){
        super()
        this.state={
            foodSum:0,
            entertainmentSum:0,
            salarySum:0
        }
        
    }

    feltirData (){
       
        let ob={}
        this.props.state.users.forEach(e => {ob[e.category]?ob[e.category]+=e.amount:ob[e.category]=e.amount });
            
       const arry=Object.entries(ob)
       return arry
    }
  
    render() { 
         let newArry =this.feltirData()
        return (
            <div className="customers" > 
            <tr className="tr">  
                             <th className="th">Category</th>
                             <th className="th">Amount</th>
                            
                          </tr>
           {newArry.map(m=>
             <tr className="tr">
                  <td className="tdB">{m[0]}</td>
                  <td className="tdB">{m[1]}</td>
                      
                 </tr>
           
            )}
            </div>
           
        );
    }
}
 
export default Breakdown;