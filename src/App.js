import { Route, Routes } from "react-router-dom";
import CreateDoc from "./CreateDoc";
import ListStudents from "./ListStudents";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<CreateDoc />} />
          <Route path="/listado" element={<ListStudents />} />
          <Route path="*" element={<CreateDoc />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
