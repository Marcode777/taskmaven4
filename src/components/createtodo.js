import React from "react";



export default class TodosList extends React.Component{

  render() {
    return(
      <form>
        <input type="text" placeholder="what do I need to do?"/>
        <button>Create</button>
      </form>
      );
  }
}