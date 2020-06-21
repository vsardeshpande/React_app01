import React, { Component } from 'react';

class App extends Component{
  name = "Viraj"

  render(){
    return(
      <div className="App">
        React : 
        <b>{this.name}</b>
      </div>
    );
  }
}

export default App;
