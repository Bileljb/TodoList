import './App.css';
import React from 'react';

class App extends React.Component {

  state = { todos: [{ id: 0, task: "eat", done: false }, { id: 1, task: "sleep", done: false }, { id: 2, task: "code", done: false }], text:'' }

  addtodo =(event)=> {this.setState({ todos: [...this.state.todos, {id: Math.random(), done: false, task: this.state.text }] })  }
  deletetodo = (x) => { this.setState({todos:  this.state.todos.filter(el => el.id != x)}) }
  donetodo = (x)=> {  this.setState({ todos: this.state.todos.map((el)=> el.id==x ? {...el, done: ! el.done  }: el)   })}

  render() {
    return (
      <div>
        <input onChange={ (event)=>this.setState({text: event.target.value })}/>
        <button onClick={()=>this.addtodo()}>Add</button>
        {this.state.todos.map(el =>
          <div key={el.id}>
            <li  style={{textDecoration :  el.done? "line-through" : null  }}>{el.task}</li>
            <button onClick={()=>this.deletetodo(el.id)}>Delete</button>
            <button onClick={()=>this.donetodo(el.id)}>Done</button>
          </div>
        )}
      </div>
    )
  }

}

export default App;
