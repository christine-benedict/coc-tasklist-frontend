import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class CompletionButton extends Component{
  constructor(props){
    super(props)
    this.state ={
      buttonState: '',
      buttonStyle: ''
    }
  }
  componentWillMount(){
    let {buttonState, buttonStyle} = this.state
    if(this.props.status === "Complete"){
      buttonState = "Mark Incomplete"
      buttonStyle = 'warning'
    } else {
      buttonState = "Mark Complete"
      buttonStyle = 'success'
    }
    console.log(this.props.status)
    console.log(this.state.buttonState)
    this.setState({buttonState: buttonState, buttonStyle: buttonStyle})
  }

  handleComplete(id){
    let {buttonState, buttonStyle} = this.state
    if(buttonState === "Mark Complete"){
      buttonState = "Mark Incomplete"
      buttonStyle = "Warning"
    } else {
      buttonState = "Mark Complete"
      buttonStyle = "Success"
    }
    this.markComplete(id).then(this.setState({buttonState, buttonStyle}))
  }
  render(){
    return(
        <Button bsStyle={this.state.buttonStyle} bsSize="xsmall" value={this.props.id} onClick={this.props.handleComplete.bind(this, this.props.id)}>{this.state.buttonState}</Button>
    )
  }
}

export default CompletionButton
