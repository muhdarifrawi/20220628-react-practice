import React from "react";
// you cannot import anything out of SRC without AXIOS
import JSON from "../data/info.json"

export default class SecondExampleForm extends React.Component{
    state={
        username:"yosemite sam",
        fruits:"",
        country:[]
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

    updateCountry = (event) => {
        if(this.state.country.includes(event.target.value)){
            let indexToRemove = this.state.country.indexOf(event.target.value);
            let cloned = [
                ...this.state.country.slice(0,indexToRemove),
                ...this.state.country.slice(indexToRemove + 1)
            ]
            this.setState({
                country:cloned
            })
        }
        else{
            this.setState({
                country:[...this.state.country, event.target.value]
            })
        }
    }

    render(){
        return (
            <React.Fragment>
                <h1>Example Form:</h1>
                <div>
                    {/* USERNAME SECTION */}
                    <label for="username" className="form-label">
                        Username:
                    </label>
                    <input type="text" name="username"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.updateUsername}
                    >
                    </input>
                    {/* FRUITS SECTION */}
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
                    {/* COUNTRY SECTION */}
                    <h3>Countries you've been to</h3>
                    {JSON.countries.map(
                        c => 
                            <div className="form-check" key={c.value}>
                                <input type="checkbox" name={c.value}
                                className="form-check-input"
                                value={c.value}
                                onChange={this.updateCountry}
                                checked={this.state.country.includes(c.value) === true}
                                >
                                </input>
                                <label for={c.value} className="form-check-label">
                                    {c.display}
                                </label>
                            </div>
                    )}


                </div>
            </React.Fragment>
            
        )
    }
}