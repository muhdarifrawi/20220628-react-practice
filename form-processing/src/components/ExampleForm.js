import React from "react"

export default class ExampleForm extends React.Component{
    state={
        username:"yosemite sam",
        fruits:""
    }

    updateUsername = (event) =>{
        this.setState({
            username:event.target.value
        })
    }

    updateFruits = (event) => {
        this.setState({
            fruits:event.target.value
        })
    }

    render(){
        return (
            <React.Fragment>
                <h1>Example Form:</h1>
                <div>
                    <label for="username" className="form-label">
                        Username:
                    </label>
                    <input type="text" name="username"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.updateUsername}
                    >
                    </input>
                    <h3>Select Fruits</h3>
                    <div className="form-check">
                        <input type="radio" name="fruits"
                            className="form-check-input"
                            value="apple"
                            onChange={this.updateFruits}
                            checked={this.state.fruits === "apple"}
                        ></input>
                        <label for="fruits" className="form-check-label">
                            Apple   
                        </label>
                    </div>
                    <div className="form-check">    
                        <input type="radio" name="fruits"
                            className="form-check-input"
                            value="banana"
                            onChange={this.updateFruits}
                            checked={this.state.fruits === "banana"}
                        ></input>
                        <label for="fruits" className="form-check-label">
                            Banana
                        </label>
                    </div>
                    <div className="form-check">    
                        <input type="radio" name="fruits"
                            className="form-check-input"
                            value="cherry"
                            onChange={this.updateFruits}
                            checked={this.state.fruits === "cherry"}
                        ></input>
                        <label for="fruits" className="form-check-label">
                            Cherry
                        </label>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}