import React, { Component } from 'react';
import { Grid, FormControl, FormGroup, Radio, ControlLabel } from 'react-bootstrap'
import AdminNavbar from '../components/AdminNavbar'
import Flag from '../components/Flag'


class NewTask extends Component{
  constructor(props){
    super(props)
    this.state ={
      form: {
        name:'',
        poc: '',
        taskstatus: 'Incomplete',
        duedate: '',
        dminuscat: '',
        notes: ''
      }
    }
  }
  handleChange(event){
    let {form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
  handleSubmit(event){
    this.props.handleNewTask(this.state.form)
    event.preventDefault()
  }
  render(){
    return(
      <div>
        <AdminNavbar />
        {this.props.success && <Flag flagtext="New task created."/>}
        <Grid>
          <div id="new-task-form">
            <form >
              <FormControl
                type="text"
                name="name"
                className="new-form"
                placeholder="Task Description"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.name}
              /><br />
              <ControlLabel>Department Responsible:  </ControlLabel>
              <FormGroup className="new-form">
                <Radio name="poc" value="Admin" onChange={this.handleChange.bind(this)} inline>
                  Admin
                </Radio>{' '}
                <Radio name="poc" value="Operations" onChange={this.handleChange.bind(this)} inline>
                  Ops
                </Radio>{' '}
                <Radio name="poc" value="Maintenance" onChange={this.handleChange.bind(this)} inline>
                  Maintenance
                </Radio>
              </FormGroup>
              <ControlLabel>Due Date:  </ControlLabel>
              <FormControl
                type="date"
                name="duedate"
                className="new-form"
                placeholder="Due Date"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.duedate}
              /><br />
              <FormControl
                type="text"
                name="dminuscat"
                className="new-form"
                placeholder="D-Category"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.dminuscat}
              /><br />
              <textarea
                form ="new-task-form"
                name="notes"
                className="new-form"
                placeholder="Notes"
                cols="70"
                rows="10"
                wrap="soft"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.notes}>
              </textarea><br />
              <FormControl
                type="submit"
                name="submit"
                id="submit-button"
                onClick={this.handleSubmit.bind(this)}
                value= "Add Task"
              />
            </form>
          </div>
        </Grid>
      </div>
    )
  }
}

export default NewTask
