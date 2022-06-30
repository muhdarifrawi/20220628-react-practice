import React from "react"
import axios from "axios"

export default class AxiosExampleForm extends React.Component{
    state ={
        country:[]
    }

    async componentDidMount(){
        console.log("component mounted");
        let JSON = await axios.get("/data/infoAx.json")
        this.setState({
            country:JSON.data.countries
        })
    }

    render(){
        return (
            <React.Fragment>
                <h1>Countries</h1>
                {
                    this.state. country.map(
                        c=> 
                        <div key={c.value}>
                            <label>{c.display}</label>
                        </div>
                        
                    )
                }
            </React.Fragment>
        )
    }
}