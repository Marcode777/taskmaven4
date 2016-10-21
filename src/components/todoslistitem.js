import React from "react";

export default class TodosListItem extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      isEditing: false
    };
  }

  renderActionsSection(){
    if (this.state.isEditing){
      return(
          <td>
            <button>Save</button>
            <button>Cancel</button>
          </td>
        ); 
    }

    return(
        <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
        </td>
      );
  }

  render() {
    return(
          <tr>
            <td>{this.props.task}</td>
            {this.renderActionsSection()}
          </tr>
      );
  }
  onEditClick(){
    this.setState({isEditing:true});
  }
}


//setting the state to something with the constructor is actually not considered best practice, but for demonstration purposes, we'll set state inside of components
// but best practice for setting state is to have a top-level component to do all this stuff
// for renderActionsSection after, the return should be an else statement, however, we're not gonna use else here because since we're already using return, it will automatically return


