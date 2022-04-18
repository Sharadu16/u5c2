import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">  
         Add House
      </button>
      <AddHouse name="Sharad" />
       <Rentals/>
      <br />
    </div>
  );
}

export default App;
