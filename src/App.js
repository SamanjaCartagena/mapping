import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
const employees=[
  {
    name:"Anthony",
    id:"ABC"
  },
  {
    name:"George",
    id:"CBA"
  },
  {
    name:"Stephanie",
    id:"CDE"
  }
]
function App() {
  return (
    <div className="App">
      {employees.map((employee)=>(
       <Employee key={employee.id} name={employee.name} id={employee.id}/>
 ) )}
    </div>
  );
}

export default App;
