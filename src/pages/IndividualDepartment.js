import React, {Component} from 'react'
import { Grid, Col, Row, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { getFilteredTasks, editNotes } from '../api'
import EditForm from '../components/EditForm'


class IndividualDepartment extends Component{
  constructor(props){
    super(props)
    this.state={
      tasks: [],
      completedSuccess: false
    }
  }
  componentWillMount(){
    getFilteredTasks(this.props.department).then(filteredTasks => this.setState({tasks: filteredTasks}))
  }
  markComplete(id){
    this.props.handleUpdateTask(id)
    getFilteredTasks(this.props.department).then( filteredTasks => { this.setState({tasks:filteredTasks, completedSuccess: true})
    console.log(this.state.completedSuccess)
   })
  }
  editTaskNotes(id){
    editNotes(id)
    getFilteredTasks(this.props.department).then( filteredTasks => { this.setState({tasks:filteredTasks, completedSuccess: true})
    console.log(this.state.completedSuccess)
   })
  }
  render(){
    return(
      <Grid>
        <Row>
        <Col s={8}>
          <ListGroup style={{flexDirection: 'row', alignItems: 'center'}}>
            {this.state.tasks.map((task, index) =>{
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
                  <span style={{flex: 1}}>
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
                  </span>
                  <span id="edit-buttons">
                    <Button bsStyle="success" bsSize="xsmall" value={task.id} onClick={this.markComplete.bind(this, task.id)}>Mark Complete</Button>{this.state.completedSuccess && window.location.reload() }
                    <EditForm edit={this.editTaskNotes.bind(this, task.id)} notes={task.notes} id={task.id}/>
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
