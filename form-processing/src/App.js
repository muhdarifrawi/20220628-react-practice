// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import './App.css';
// import ExampleForm from './components/ExampleForm';
// import SecondExampleForm from "./components/SecondExampleForm";
import AxiosExampleForm from "./components/AxiosExampleForm";

function App() {
  return (
    <div className="container">
      {/* <ExampleForm/> */}
      {/* <SecondExampleForm/> */}
      <AxiosExampleForm/>
    </div>
  );
}

export default App;
