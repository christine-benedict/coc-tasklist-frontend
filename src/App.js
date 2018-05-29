import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import NewTask from './pages/NewTask'
import IndividualDepartment from './pages/IndividualDepartment'

import { getTasks, createTask, deleteTask, updateTask } from './api'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: [],
      newTaskSuccess: false,
      deleteTaskSuccess: false
    }
  }
  componentWillMount(){
    getTasks().then( APItasks => { this.setState({tasks: APItasks})
    })
  }

  handleNew(data){
    createTask(data).then( successTask => { console.log("SUCCESS! New Task: ", successTask)
  }).then( this.setState({newTaskSuccess: true}))
    }

  handleDelete(id){
    deleteTask(id).then( successDelete => {console.log("DELETED! Successfully deleted Task: ", successDelete)}).then( getTasks().then( APItasks => { this.setState({tasks:APItasks, deleteTaskSuccess: true})
  }))
  }

  handleUpdate(id){
    updateTask(id).then( successUpdate => {console.log("UPDATED! Successfully updated Task: ", successUpdate)})
  }

  render() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" render={ (props) => <Dashboard tasks={this.state.tasks} />} />
                    <Route exact path="/tasks" render={ (props) => <Tasks tasks={this.state.tasks} deleteTask={this.handleDelete.bind(this)} success={this.state.deleteTaskSuccess} />} />
                    <Route exact path="/create" render={ (props) => <NewTask handleNewTask={this.handleNew.bind(this)} success={this.state.newTaskSuccess} />} />
                    <Route exact path="/admin" render={ (props) => <IndividualDepartment department="admin" handleUpdateTask={this.handleUpdate.bind(this)}/>} />
                    <Route exact path="/ops" render={ (props) => <IndividualDepartment department="ops" handleUpdateTask={this.handleUpdate.bind(this)}/>} />
                    <Route exact path="/maint" render={ (props) => <IndividualDepartment department="maint" handleUpdateTask={this.handleUpdate.bind(this)}/>} />
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
