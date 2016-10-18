import React from "react";

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

export default class TodosListHeader extends React.Component{
  render() {
    return(
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
      )
  }
}