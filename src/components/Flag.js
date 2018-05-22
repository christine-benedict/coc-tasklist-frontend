import React, {Component} from 'react'
import {Alert} from 'react-bootstrap'

class Flag extends Component{
  render(){
    return(
      <div>
        <Alert bsStyle="warning">
          {this.props.flagtext}
        </Alert>
      </div>
    )
  }
}

export default Flag
