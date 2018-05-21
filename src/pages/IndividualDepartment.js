import React, {Component} from 'react'
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'


class IndividualDepartment extends Component{
  render(){
    return(
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
                  </span>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
        </Row>
      </Grid>
    )
  }
}

export default IndividualDepartment
