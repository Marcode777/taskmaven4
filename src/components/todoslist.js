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
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props}/>);
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


// and to refresh that we type "this.setState({todos: this.state.todos});" and the issue here is that we are passing toggleTask into our todoslist, but not into our todoslistitem yet, so going to the todoslistitem.js file, so we want to pass in our toggletask here but instead of doing "toggleTask={this.props.toggleTask}", we're going to do something a little bit fancier because we're going to be passing in a few different methods, we want to be able to pass in our delete and edit functionality, so to do that all at once, to pass in every prop, we could just pass in "{...this.props}" here, but that would be every single prop and we already have our todos props here as in "this.props.todos", so we don't want to pass in our todos props, so one way that we can get around this is by typing "const props = _.omit(this.props, 'todos')", this is basically another lodash method, so we're going search through this.props and we're going to omit "todos" because we don't want to include that inside our todoslistitem, so we're just going to use the spread operator for our props here as in "{...props}"

