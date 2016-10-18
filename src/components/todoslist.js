import React from "react";
import TodosListHeader from "./todoslistheader"

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

export default class TodosList extends React.Component{
  render() {
    console.log(this.props);
    return(
      <table>
        <TodosList/>
      </table>
      )
  }
}