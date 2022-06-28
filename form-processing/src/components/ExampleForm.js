import React from "react"

export default class ExampleForm extends React.Component{
    state={
        username:"yosemite sam"
    }

    updateUsername = (event) =>{
        this.setState({
            username:event.target.value
        })
    }

    render(){
        return (
            <React.Fragment>
                <h1>Example Form:</h1>
                <div>
                    <label for="username" class="form-label">
                        Username:
                    </label>
                    <input type="text" id="username"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.updateUsername}
                    >

                    </input>
                </div>
            </React.Fragment>
            
        )
    }
}