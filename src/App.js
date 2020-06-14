//import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
 //import Transction from './Components/Transction'
 import Transctions from './Components/Transcations'
 import Operations from './Components/Operations'
 import Breakdown from './Components/Breakdown'
 const axios = require('axios')
class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
       } 
      }
      // deleteFromState=(e)=>{
      //  let newUsers= [...this.state.users]
      //  newUsers.splice(e,1)
      //  this.setState({users :newUsers})
      // }
      sumAmount=()=>{
        let sumAmount=0
        this.state.users.map(m => sumAmount +=m.amount )
       // console.log(sumAmount)
        return sumAmount
      }
      // addTransaction=(e)=>{
      //   let newUsers= [...this.state.users]
      //    newUsers.push(e)
      //    this.setState({users :newUsers})
      //    return e
      // }
      componentDidMount = async () => {
        let users = await axios.get('http://localhost:3200/transactions');
     //   console.log(users.data)
            this.setState({ users: users.data })
         return(users)
      }
      deleteFromState=async(key)=>{
        console.log(key)
        let deleteUser =  await axios.delete(`http://localhost:3200/transaction/`,{data:{key}}) 
        let newUsers= [...this.state.users]
        newUsers.splice(key,1)
        this.setState({users :newUsers})
       }
   
     
      addTransaction = async(transaction) => {
        const response = await axios.post("http://localhost:3200/transaction", transaction)
        let tempTransactions = [...this.state.users]
        tempTransactions.push(response.data)
        this.setState({
          users : tempTransactions
        })
       this.componentDidMount()
      }
      
       render() {
        
        return (
          <div >
         <div className={this.sumAmount()>500?"green":"red"}> Balance : {this.sumAmount()}</div>
         {this.componentDidMount}
         
          <Router>
            <ul className="ul">
            <li className="li"> <Link to="/Transcations" >Transcations</Link></li>
            <li className="li"><Link to="/Operations" >Operations</Link></li>
            <li className="li"> <Link to="/Breakdown" >Breakdown</Link></li>
          </ul>
          <table  className="customers">
          <Route path="/Transcations" exact render={()=> <Transctions componentDidMount={this.componentDidMount} state={this.state}  deleteFromState={this.deleteFromState}/>}/>
          </table>
          <Route path="/Operations" exact render={()=><Operations addTransaction={this.addTransaction}  />}/>
          <Route path="/Breakdown" exact render={()=><Breakdown  componentDidMount={this.componentDidMount} state={this.state}  />}/>
          </Router>
          </div>
        );
      }
      }
export default App;
