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
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
        <TodosList 
        todos={this.state.todos}
        toggleTask={this.toggleTask.bind(this)}
        saveTask={this.saveTask.bind(this)}
        deleteTask={this.deleteTask.bind(this)}
        />
      </div>
      );
  }

  toggleTask(task){
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = ! foundTodo.isCompleted;
    this.setState({todos: this.state.todos});
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({todos: this.state.todos});
  }

  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);

    foundTodo.task = newTask;
    this.setState({todos: this.state.todos});
  }

  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({todos: this.state.todos});
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
// so our createTask() method is actually going to come in here, we're actually gonna pass that into our CreateTodo component there
// we're going to bind createTask to this because we want the "this" here because we're going to do "this.setState" so we want to make sure that the context for this method stays with this component here
// so inside of our createTask we're going take whatver "task" is passed into this method as in "createTask(task)" and we're going to push it into our todos state as in "this.state.todos({task, isCompleted})" and remember, this is ES6 shorthand syntax so just "task," is the same as "task:task" so we won't need to do the colon : and also we'll set isCompleted to false
// and the way that we re-render the page is we're going to re-set the state so when do "setState" it's basically going to re-render the page and it's going the automatic div and will only render what's different (in my own words, actually, it will not just render what's different, but it will only render what is different that affects the view), so we're going to set it to todos, which is going to be the new array with the task pushed into it
// now we'll go to the createtodo.js file
// now if we type something into the input and click on create or hit the enter button, well it actually gives an error because we actually have to push something into that array, and not call it as a function so we do that by turning "this.state.todos({task,isCompleted: false});" from the app.js file into "this.state.todos.push({task,isCompleted: false});", now we'll notice that it shows up in our list now!
// now the next thing we'll hook up is the ability to let the items change color from red to green depending on whether they're finised or not, so we'll go to our todoslistitem.js file  
// so after the onClick in the todoslistitem.js file, we'll create the toggleTask method and we'll get the task here as in "toggleTask(task){}" and we need to pass that into our todoslist, which is where we are calling it so we type "toggleTask={this.toggleTask.bind(this)}" and we want to bind this because we're going to be setting state inside of this method, and inside of this method, we're first going to find the todo in the array, so what we want to do is we want to find the todo in the array that matches the todo that we're editing, and set its isCompleted will be equal to the opposite of what it currently is and the way to do that is we can do "const = foundTodo = _.find(this)" keeping in mind this underscore _. is another lodash method, find basically finds the first item in the array that matches the condition that we set so we're going to search through the this.state.todos as in "const foundTodo = _.find(this.state.todos)" and then we're going to do an implicit return here =>, and we don't need brackets here like =>{}, because it's ES6 shorthand we can just do todo.task as in "const foundTodo = _.find(this.state.todos, todo => todo.task)" so we're going to find the todo task that matches the task that we are passing in, which is going to be the one that we click on, via === as in "const foundTodo = _.find(this.state.todos, todo => todo.task === task);" so that is our foundTodo
// next we're just going to swap the foundTodo.isCompleted to the opposite and to do the shorthand way to do that is "foundTodo.isCompleted = ! foundTodo.isCompleted;" 
// and to refresh that we type "this.setState({todos: this.state.todos});" and the issue here is that we are passing toggleTask into our todoslist, but not into our todoslistitem yet, so going to the todoslist.js file, so we want to pass in our toggletask here but instead of doing "toggleTask={this.props.toggleTask}", we're going to do something a little bit fancier because we're going to be passing in a few different methods, we want to be able to pass in our delete and edit functionality, so to do that all at once, to pass in every prop, we could just pass in "{...this.props}" here, but that would be every single prop and we already have our todos props here as in "this.props.todos", so we don't want to pass in our todos props, so one way that we can get around this is by typing "const props = _.omit(this.props, 'todos')", this is basically another lodash method, so we're going search through this.props and we're going to omit "todos" because we don't want to include that inside our todoslistitem, so we're just going to use the spread operator for our props here as in "{...props}"
// so let's just try it out now, when we click on the items, they will change color from green to red to green and so forth and so on, now that is officially hooked up. "this.setState({todos: this.state.todos});" just does so much work for us, it's just really neat and awesome!
// so next, what we're going to do is we're going to set up our edit functionality, so that is going to be our save button in our todoslist item, so let's first create our saveTask method, we're going to have an old task and a new task, we're going to use the old task to match to our array up here, and then we're going to replace the old task with the new task, so what we're going to do is similar to what we did above in the toggleTask, (but this time we'll replace them with oldTask and newTask) we're going to have a foundTodo = _.find(this.state.todos, todo => todo.task === oldTask); so we're just replacing with a newTask here and then we're going to setState to refresh our page with "this.setState({todos: this.state.todos});" and then we need to pass that into our todos list here as in "saveTask={this.saveTask.bind(this)};", and then we'll notice in our todoslist.js file that we are already passing it into our todoslist item because we have this cool piece of code here as in "const props = _.omit(this.props, 'todos');", so we don't need to do anything there
// so now in our todoslistitem.js file all we need to do is hook up our save button, so we implement an onClick
// So we'll just create a method here called deleteTask(task) and we're going to pass in taskToDelete and we're just naming it that so it does not conflict with the other this todo variable here that we're going to be using, we're not going to be using found this time, we'll be using another lodash method called remove, which is going to remove an item from an array that we match it with, and with the same concept we're going to match the todo.task with the taskToDelete that we pass into this method and then we're going to setState to refresh it and then todos will be this.state.todos, and then we're going to pass this into our todoslist, then delete.task.bind(this), that is automatically passed into our todoslistitem from this piece of code here "const props = _.omit(this.props, 'todos');" and now we just need to hook up the delete button whe'll want to say onClick here and since we don't need to do anything fancy with this, all we need to do is just pass in the task, we can just do this.props, we can just call the method directly here, this.props.deleteTask and the way that we bind the task is there is we just do a .bind(this) as in this.props.deleteTask.bind(this, this.props.task), that's how we pass that in there. Let's test it out. Let's click the Delete button, and It Works!
// The last thing we're going to do is we're going to do validation. This is because right now, if we create empty tasks, it will just do that and that seems kind of broken and if we also just enter the same thing, it will continue to add the same thing which seems kind of weird because we're matching only one so that won't really do. We only want to be able to enter one task at a time. So the way that we're going to do the validation is we're going to go to our createTodo, where our form is, and inside of our handleCreate we're going to create some conditionals here. The first thing that we're going to do is we're going to just cache this createInput up here just because we're going to be using it several times, so we'll type "const createInput = this.refs.createInput;" and "const task = createInput.value" this makes our code a little bit cleaner, then "const validateInput = this.validateInput(task);", so we're going to take this task and we're going to analyze it so see if there's something wrong with it, so let's create our validateInput, basically if it's empty, or if it repeats another item in the list, we're going to want to display an error. So first let's say if there's no task, here's the message that we'll display "Please enter a task" and keep in mind, we haven't hooked up how this is going to display yet, we're just setting this up, else, if it's a repeat of another task, and here we need the list of todos here which we have not passed in yet, so i our app here, we want to pass in the todo into the createtask, so in here we also want to pass in the todos so we can search through it to see if we have a match here and so here now we have .todos in here as in "(_.find(this.props.todos, todo => task.todo === task)" basically we want to find IF a todo in the array matches with the todo in the input box, so if this task matches with this task right here, then we are going to return another error message which might say "task already exists", then ELSE, we are going to return, null, which means there's no error. Next what we are going to do is we can clean this up a little bit more, we can take "this.props.createTask(this.refs.createInput.value);" into "this.props.createTask(task);" And now we want to create this error message, so let's say "{this.renderError()}" and we can say renderError(){} at the top, and this is going to be based on the state so "constructor(props){super(props); this.state = {error: null, }} " ***which normally, we would be warned not to do, but this is just for demonstration purposes. If we look up Redux architecture, all of this data would go into our home state here in the app.js file near the consts, so we would put that all in here. However, this is just easy and convenient for demonstration purposes.**** 
// So state is going to start off as null, and then down here, we're going to say, if this method returned a message, then this would be true, then we're going to setState then we're going to set our error to be validateInput as in "this.setState({error: validateInput})" and if that's not true then we're just going to continue down here, and if there's no error, we're just going to make sure that we reset the state to be null because if there's an error, we want to cancel it if there are no errors there, so this just resets to the no error message. So now up here, in our handleError, what we want to do is basically, if there's no error, we're just going to do an early return so that nothing happens, but if there is an error, we're just going to say return <div style=({color: 'red'})></div>, normally we would use CSS or some variant to style it but we'll just use this for a warning color. And then we're just going to display this.state.error as in "<div style=({color: 'red'})>{this.state.error}</div>", just remember that this error is being set to be the message that we're returning from here, so the error's going to be the message and so this is just one way to do it, there are a lot of different ways we can try this, this just the way that we're doing it here. So save it, see if there's anything wrong. So and the problem here is that we actually need to return here, otherwise it's going to get down here no matter what, so if there's an error, we don't want it to reach the save point. So let's save that and try again. And there's another bug, and here's the problem, instead of task.todo, it should be todo.task obviously. So let's try again, and now we have the error "task already exists", and if we enter a blank it will say "please enter a task", and now if we enter a completely new task, the error message will go away. AND OUR APP IS OFFICIALLY COMPLETE NOW!
//


//