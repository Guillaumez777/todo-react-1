import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.formValue = ''
        this.inputValue = ''
    }

    handleChange(e) {
        // e.preventDefault()
        this.props.formValue = e.target.value
        console.log(e)
    }

    render() {
        return (
            <div className="form">
              <input
                type="text" 
                className="taskInput"
                placeholder="Enter a task" 
                onChange={this.handleChange} 
                value={this.props.formValue} 
                />
              <button 
                onClick={this.handleChange} 
                className="taskButton fa fa-fw fa-plus">Envoyer</button>
            </div>
          )
    }
}

export default Form