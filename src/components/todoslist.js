import _ from 'lodash';
import React from "react";
import TodosListHeader from "./todoslistheader";
import TodosListItem from "./todoslistitem";

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
  renderItems(){
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo}/>);
  }

  render() {
    return(
      <table>
        <TodosListHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
      );
  }
}