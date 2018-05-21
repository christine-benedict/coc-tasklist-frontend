import React, { Component } from 'react';
import { Grid, Col, Row, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import AdminNavbar from '../components/AdminNavbar'



class Tasks extends Component {
  handleDelete(event){
    this.props.deleteTask(event.target.value)
  }
  render() {
    return (
      <div>
        <AdminNavbar />
        <Grid>
          <Row>
          <Col s={8}>
            <ListGroup>
              {this.props.tasks.map((task, index) =>{
                return (
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
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Tasks;
