import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">
         <a href="#">Add House</a>
      </button>
       <Rentals/>
      <br />
    </div>
  );
}

export default App;
