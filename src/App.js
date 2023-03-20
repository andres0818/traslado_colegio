import { Route, Routes } from "react-router-dom";
import DocPdf from "./DocPdf";
import Navbar from "./Navbar";
import ViewWeb from "./ViewWeb";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<ViewWeb />} />
          <Route path="/listado" element={<DocPdf />} />
          <Route path="*" element={<ViewWeb />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
