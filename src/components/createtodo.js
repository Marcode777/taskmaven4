import React from "react";



export default class TodosList extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      error: null
    };
  }

  renderError(){
    if (!this.state.error) {return null; }

    return <div style={{color: 'red'}}>{this.state.error}</div> 
  }

  render() {
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Tasks to be done..." ref="createInput"/>
        <button>Create</button>
        {this.renderError()}
      </form>
      );
  }

  handleCreate(event){
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);
    console.log(this.refs.createInput.value);
    console.log(this.props.createTask);
    this.props.createTask(task);
    this.refs.createInput.value = '';

    if (validateInput){
      this.setState({error: validateInput});
      return;
    }

    this.setState({error: null});
  }

  validateInput(task){
    if (!task){
      return "Please enter a task";
    } else if (_.find(this.props.todos, todo => todo.task === task)){
      return 'task already exists';
    } else {
        return null;
    }
  }
}

// a way to grab the value from the input is via refs, which is basically an identifier for the DOM element
// keep in mind that onSubmit's default behavior is to refresh the page, so to prevent that, we do an event.preventDefault(); so we first pass an event and then the event.preventDefault();
// continuing on to the refs, if we take the value, then it will actually return the actual value from the user input, so this is how we're going to grab the value from the input box
// if we console.log(this.props.createTask), and we click create or press enter, we'll notice that we have the function that we put in there now
// so now that we have createTask here, now what we can do is remember that this.refs.createInput.value takes whatever is in there, so we want to pass this value into this.props.createTask method as in "this.props.createTask(this.refs.createInput.value);"
// the reason why we're using this.handleCreate up there instead of down near this.props is because we want to maintain the "this" context for this component in this createtodo.js file but we also want to maintain the "this" context of the app.js file's component
// now if we type something into the input and click on create or hit the enter button, well it actually gives an error because we actually have to push something into that array, and not call it as a function so we do that by turning "this.state.todos({task,isCompleted: false});" from the app.js file into "this.state.todos.push({task,isCompleted: false});", now we'll notice that it shows up in our list now! 
// however, we'll notice that our input doesn't actually empty everytime we type something into it, so let's fix that, by adding "this.refs.createInput.value = '';"