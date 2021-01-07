import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
   
    }

  }
  updateInput(key,value){
    this.setState({
    [key]: value
    })
  }
  addItem(){
   const newItem={
     id:1+Math.random(),
    value : this.state.newItem.slice()
   };
  

  const list=[...this.state.list];
  list.push(newItem);
  }
  render(){
  return( 
      <div className="App">
        <div>Add an Item.............</div>
          <input type="text" value={this.state.newItem} placeholder="type item here....." onchange={e =>this.updateInput("newitem",e.target.value)}/>
         <br/> <button onClick={() => this.addItem()} > Add </button>
        </div>

    
    )
  }

}

export default App;
