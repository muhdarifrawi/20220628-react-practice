import React from "react"

export default class BudgetTracker extends React.Component{
    
    state = {
        category:[
            {
                display:"Transport",
                value:"transport"
            },
            {
                display:"Entertainment",
                value:"entertainment"
            },
            {
                display:"Food",
                value:"food"
            },
            {
                display:"Bills",
                value:"bills"
            },
            {
                display:"Loans",
                value:"loans"
            },
            {
                display:"Others",
                value:"others"
            }
        ],
        reconcile:[
            {
                display:"Reconciled",
                value:true
            },
            {
                display:"Differed",
                value:false
            }
        ],
        expense:[
            {
                _id:1,
                date:"11/02/2022",
                description:"this is an example",
                category:"transport",
                amount:100,
                reconciled:false
            },
            {
                _id:2,
                date:"23/02/2022",
                description:"this is second",
                category:"food",
                amount:1500,
                reconciled:false
            },
            {
                _id:3,
                date:"3/03/2022",
                description:"thirdsies",
                category:"bills",
                amount:20000,
                reconciled:false
            },
        ],
        newDate:"",
        newDescription:"",
        newCategory:"",
        newAmount:"",
        newReconcile:""
    }
    
    displayForm = () =>{
        return(
            <div className="form-check">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="text" id="date" name="date"
                    className="form-control"
                    value={this.state.newDate} 
                    onChange={this.displayFormUpdate}
                ></input>
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea id="description" name="description"
                    className="form-control" style={{
                        resize:"none"
                    }}
                    value={this.state.newDescription} 
                    onChange={this.displayFormUpdate}
                >
                </textarea>
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select id="category" name="category" className="form-select"
                    value={this.state.newCategory}
                    onChange={this.displayFormUpdate}
                >
                    {this.state.category.map(
                        c => 
                        <option value={c.value} key={c.value}>{c.display}</option>
                    )}
                </select>
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input type="text" id="amount" name="amount" 
                    className="form-control"
                    value={this.state.newAmount}
                    onChange={this.displayFormUpdate}
                >
                </input>
                <label htmlFor="reconcile" className="form-label">
                    Reconciled
                </label>
                <select id="reconcile" name="reconcile" className="form-select"
                    value={this.state.newReconcile}
                    onChange={this.displayFormUpdate}
                >
                    {this.state.reconcile.map(
                        r => 
                        <option value={r.value} key={r.value}>{r.display}</option>
                    )}   
                </select>
                <button className="btn btn-primary my-3">
                    Submit
                </button>
            </div>
        )
    }

    displayFormUpdate = (event) =>{
        let stateVariable = event.target.name
        stateVariable = "new" + stateVariable.charAt(0).toUpperCase() + stateVariable.slice(1); 
        this.setState({
            [stateVariable]:event.target.value
        })
    }

    displayExpenses = (expense) =>{
        return(
        <div className="card-body">
            <h5 className="card-title">{expense.amount}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
                {expense.date}
            </h6>
            <p className="card-text">
                {expense.description}
            </p>
            <p className="card-text">
                <span className="badge bg-secondary">
                    {expense.category}
                </span>
            </p>
            <p className="card-text">
                {
                    expense.reconciled ? 
                    <span className="badge bg-success" role="alert">
                        Reconciled
                    </span>:
                    <span className="badge bg-danger" role="alert">
                        Differed
                    </span>
                }
            </p>
            <a href="#" className="card-link">Edit</a>
            <a href="#" className="card-link">Delete</a>
        </div>
        )
    }

    render(){
        return(
            <React.Fragment>
                {this.displayForm()}
                <h1>Expenses</h1>
                {this.state.expense.map(
                    e => (
                        <div className="card my-3" 
                            style={{width: "18rem"}} 
                            key={e._id}
                        >
                            {this.displayExpenses(e)}
                        </div>
                        )
                )}
            </React.Fragment>
            
        )
    }
}