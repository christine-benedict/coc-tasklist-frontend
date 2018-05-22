import React, {Component} from 'react'
import {ListGroupItem, Button} from 'react-bootstrap'

class OneTask extends Component{
  handleDelete(event){
    this.props.deleteTask(event.target.value)
  }
  render(){
    var task = this.props.task
    var index = this.props.index
    return(
      <div>
        <ListGroupItem
          key={index}
          header={
            <h4>
              <span className='task-name'>
                {task.name}
              </span>
              {' '}- <small className='task-poc'>{task.poc}</small>
            </h4>
          }>
          <span className='task-taskstatus'>
            Status: {task.taskstatus}{" | "}
          </span>
          <span className='task-duedate'>
            Due Date: {task.duedate}{" | "}
          </span>
          <span className='task-dminuscat'>
            D-Category: {task.dminuscat}{" | "}
          </span>
          <span className='task-notes'>
            Notes: {task.notes}
          </span><br />
          <span className='deleteButton' >
            <br />
            <Button bsStyle="danger" bsSize="xsmall" value={task.id} onClick={this.handleDelete.bind(this)}>Delete Task</Button>
          </span>
          {this.props.success && window.location.reload() }
        </ListGroupItem>
      </div>
    )
  }
}

export default OneTask
