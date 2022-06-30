import './App.css';
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import BudgetTracker from './components/BudgetTracker';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Budget Tracker</h1>
        <BudgetTracker/>
      </div>
    </React.Fragment>
  );
}

export default App;
