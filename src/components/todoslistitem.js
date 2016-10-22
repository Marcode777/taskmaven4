import React from "react";

export default class TodosListItem extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      isEditing: false
    };
  }

  renderTaskSection(){
    const {task, isCompleted} = this.props;

    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor : 'pointer'
    };

    if (this.state.isEditing){
      return(
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput"/>
          </form>
        </td>
        )
    }

    return(
      <td style={taskStyle}
        onClick = {this.props.toggleTask.bind(this, task)}
      >
        {task}
        </td>
      );
  }

  renderActionsSection(){
    if (this.state.isEditing){
      return(
          <td>
            <button onClick={this.onSaveClick.bind(this)}>Save</button>
            <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </td>
        ); 
    }

    return(
        <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
        </td>
      );
  }

  render() {
    return(
          <tr>
            {this.renderTaskSection()}
            {this.renderActionsSection()}
          </tr>
      );
  }
  onEditClick(){
    this.setState({isEditing:true});
  }
  onCancelClick(){
    this.setState({isEditing:false});
  }
  onSaveClick(event){
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({isEditing:false});

  }

}


//setting the state to something with the constructor is actually not considered best practice, but for demonstration purposes, we'll set state inside of components
// but best practice for setting state is to have a top-level component to do all this stuff
// for renderActionsSection after, the return should be an else statement, however, we're not gonna use else here because since we're already using return, it will automatically return
// since we want to update the array in our app, we can't just do something here in this todoslistitem.js file, it must be done in the app.js file 
// to give the ability for items to change color from red to green depending on whether they're finished or not, we'll create a renderTaskSection and then move "<td>{this.props.task}</td>" from the bottom render and into the renderTaskSection and then replace "<td>{this.props.task}</td>" in the bottom render with "" 
// so now to fill the renderTaskSection, we'll use more ES6 where we can take properties that are inside of an object, so we know that our props has "task" and "isCompleted" in it because we passed them in, in our todoslist.js file as in "{...todo}", by typing "const {task, isCompleted} = this.props;", so now we can just use these as in "task, isCompleted", as variables now as in changing "<td>{this.props.task}</td>" to "<td>{task}</td>" 
// so now for dynamic styling, we're going to create a constant called taskStyle as in "const taskStyle" and it's going to be conditional so we're going to set that the color is going to be equal to if it isCompleted ? (the question mark is a ternary? operator), the color is going to be green, if it's false or otherwise, it's going to be red as in "const taskStyle = {color: isCompleted ? 'green' : 'red'};" and we'll make the cursor a pointer, just to let us know that it's clickable
// and to apply that to tasks in we're just going to make "<td>{task}</td>" "<tdstyle={taskStyle}>{task}</td>"
// so since our app.js file initialized a task to be false and then another to be true, you'll notice that it's red and green, but clicking on them doesn't really do anything yet, so let's change that by creating an onClick handler in for our todos list item, we'll make it multi-line just for neatness, so with the onClick, we again want to modify the array in our app.js file, so we're not going to do our method here in this file, we want to access another method in our app.js file, we'll just call this make this onClick as in "onClick = {this.props.toggleTask}", we have not created this yet, and we will actually bind this as in "onClick = {this.props.toggleTask.bind(this, task)}", not because we want to bind this, but because we want to pass in a task into this method here, and again, we already have this task from the const up there, so it's already defined, so going back into the app.js file
// so now in our todoslistitem.js file all we need to do is hook up our save button, so we implement an onClick and then down here we'll define the onSaveClick() method and remember that we want to pass in our oldTask and our newTask and put an event, and before we fill out this method, when we click the edit button, we actually want the area the item is on to turn into an input box, so what we're going to do is fill out our renderTaskSection with some logic...
// with the input area in the this.state.Editing section in the renderTaskSection, in React, we're going to have defaultValue, if we just used value, we would have an onChange handler so we would do something everytime the input changes, but we're not gonna do that, we're just going to have a default starting value, we're going to have a ref to be able to grab whatever is inside the input
// now back to the onSaveClick we want to prevent the onSubmit from firing as default behavior, and then "const oldTask = this.props.task;" because we need to pass that in to match to the array, and "const newTask = this.refs.editInput.value;" which is the ref that we defined above, "this.props.saveTask(oldTask, newTask)" where we pass in the oldTask and the newTask, and then "this.setState({isEditing:false})", so we want it to take away the input box after we save, so we'll set isEditing to false and let's just test that out really quickly. It's working! So our edit button is working properly now.
// the next thing we're going to do is setup our Delete button, and again, this is going to be very similar to what we've already done. This is going back to app.js. So we'll just create a method here called deleteTask(task)
