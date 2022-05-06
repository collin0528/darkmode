import React from "react"
import './App.css';
import Books from './Books';
import Themer from './Themer';

class App extends React.Component{

  constructor(){
    super()
//this is the parent constructor where
// i initialize the current state of the of the App component
//which has theme as the key
    this.state = {
      backgroundColor: localStorage.getItem('themer')
    }




  }
// this is the changetheme method where i give it
// a condition changing color from the previous state using if statement
  changeTheme = (theme) => {
    let background_color
    if(theme == "dark"){
      background_color = 'black';
      this.setState({
        backgroundColor:background_color
       

      })
    }

    if(theme == "danger"){
      background_color = 'red';
      this.setState({
        backgroundColor:background_color
       

      })
    }
    if(theme == "yellow"){
      background_color = 'yellow';
      this.setState({
        backgroundColor:background_color
       

      })
    }
    if(theme == "white"){
      background_color = 'green';
      this.setState({
        backgroundColor:background_color
       

      })
    }
    // look at where i set it to localStoraage 
    //which makes the color to persist and it has key and value
    localStorage.setItem('themer',background_color)
  }


  render(){
    return (
      <div className="App" style={{backgroundColor: this.state.backgroundColor, color: 'white'}}>
  
        <header className="App-header">
            <Themer  changeTheme={this.changeTheme}/>
            <Books />
        </header>
      
      </div>
    );
  }


}

export default App
