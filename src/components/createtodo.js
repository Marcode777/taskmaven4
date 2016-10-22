import React from "react";



export default class TodosList extends React.Component{

  render() {
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Tasks to be done..." ref="createInput"/>
        <button>Create</button>
      </form>
      );
  }

  handleCreate(event){
    event.preventDefault();
    console.log(this.refs.createInput.value);
  }
}

// a way to grab the value from the input is via refs, which is basically an identifier for the DOM element
// keep in mind that onSubmit's default behavior is to refresh the page, so to prevent that, we do an event.preventDefault(); so we first pass an event and then the event.preventDefault();
// continuing on to the refs, if we take the value, then it will actually return the actual value from the user input, so this is how we're going to grab the value from the input box