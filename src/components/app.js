import React from "react";
import TodosList from "./todoslist";

const todos = [
{
  task: 'make React To-Do App',
  isCompleted: false
},
{
  task: 'eat dinner',
  isCompleted: true
}
]

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos
    };
  }


  render() {
    return(
      <div>
        <h1>TASKMAVEN4</h1>
        <TodosList todos={this.state.todos}/>
      </div>
      )
  }
}


// we are just hacking out data, this is not best practice, we really should be getting data from a server 