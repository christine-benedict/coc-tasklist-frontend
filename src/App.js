import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Tasks from './pages/Tasks'
import NewTask from './pages/NewTask'
import IndividualDepartment from './pages/IndividualDepartment'

import { getTasks, createTask } from './api'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: [],
      newTaskSuccess: false,
    }
  }
  componentWillMount(){
    getTasks().then( APItasks => { this.setState({tasks: APItasks})
    })
  }

  handleNew(data){
    createTask(data).then( successTask => { console.log("SUCCESS! New Task: ", successTask)
    }).then( getTasks().then( APItasks => { this.setState({tasks:APItasks, newTaskSuccess: true}) }))
    }

  render() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/tasks" render={ (props) => <Tasks tasks={this.state.tasks} />} />
                    <Route exact path="/" render={ (props) => <NewTask handleNewTask={this.handleNew.bind(this)} success={this.state.newTaskSuccess} />} />
                    <Route exact path="/admin" render={ (props) => <IndividualDepartment department="admin"/>} />
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
