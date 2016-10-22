import React from "react";
import CreateTodo from "./createtodo";
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
];

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
        <h1>TASKMAVEN4!</h1>
        <CreateTodo/>
        <TodosList todos={this.state.todos}/>
      </div>
      )
  }
}


// we are just hacking out data, this is not best practice, we really should be getting data from a server 
// we want to be able to re-render whenever the props change, so the following will kind of make our todos array the state of our app
// we're going to have a constructor, which is basically the first thing that this component is going to run
// super connects it to the parent that it is inheriting from
// this.state, react uses state, which you can use set.state with to kind of update the state and re-render your components
// the state in this.state = is todos, without es6 syntax it would be 'todos:todos', however we're using es6 so there's a short-hand syntax, so it's just todos
// so now we're going to pass our state into our TodosList, so we'll type '<TodosList todos={this.state.todos}/>' which is referring to this.state = {todos}; above, right after the constructor and super, and in turn, that todos represents the todos array in the const above it
// so now our todoslist.js has our todos list that we're passing in from app.js and that comes in the form of props, so if we were to 'console.log(this.props)' you would see that it will be the todos array, so if we 'console.log(this.props.todos)' it would be that array right there, you can open it up and see the array there
// so now let's put them into our component here in todoslist.js, below the TodosListHeader Component, so the way we generally do that is we create another <tbody></tbody> and then inside it do, {this.renderItems()} and then we create that same method up there, and we want to be able to iterate through these items individually
// at this point lodash is needed, so we install it (well, I installed it already from the very beginning), so we can use syntax like underscore _ 
// so we return _.map() which basically creates a new array out of what we have and it'll allow us to customize it how we want, without mutating it
// so we do return _.map(this.props.todos, todo=>) again, doing the double arrow => this is es6 syntax, so for each todo item, we're going to return a todoslist item, and whenever we iterate through something in React, we have to give it a key, so since our todos items do not have an id, let's just kind of give them an index number
// when we use for each, or map, there's also an index, that's the second argument here, or rather the second parameter in '(todo, index)', what we can do is just call the index, key index as in key={index} because each key needs to have a separate index and we're going to pass in everything in this todo here as in the (todo, index), we want to pass in the items in the todo, and another way that we can do that is there's something called es6 spreading, which is triple dot ... as in '{...todo}' so in es6 function syntax, '(todo, index) => <TodosListItem key={index} {...todo}/>' is the same thing as writing 'function(todo, index){return <TodosListItem />}', so that is just short-hand for that.
// and now with the spread here, the triple dot .... as in '{...todo}', is the same thing as passing in 'task={todo.task} isCompleted={todo.isCompleted}', you can notice how {...todo} is so much cleaner. So this is why es6 is highly recommended to be used for that reason, it is just great with React.
// since we want to update the array in our app, we can't just do something in the todoslistitem.js file, it must be done in the app.js file which is here
// so our createTask() method is actually going to come in here
 


