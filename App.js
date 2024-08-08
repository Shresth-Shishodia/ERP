import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Status from "./pages/Status";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Status/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update" element={<Update/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
