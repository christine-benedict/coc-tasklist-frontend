import React, { Component } from 'react';
import { Grid, Col, Row, ListGroup } from 'react-bootstrap'
import AdminNavbar from '../components/AdminNavbar'
import OneTask from '../components/OneTask'



class Tasks extends Component {
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
                  <OneTask task={task} key={index} deleteTask={this.props.deleteTask} success={this.props.success}/>
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
