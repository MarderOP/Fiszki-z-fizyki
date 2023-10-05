import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hub from "./Hub";
import NoPage from "./NoPage";
import Wzory from "./Wzory";
import Kalkulator from "./Kalkulator";
import Informations from "./information";
import Create from "./Create";
import Edit from "./Edit";
import New from "./New";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hub" element={<Hub />} />
        <Route path="/" element={<Hub />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/wzory/:id" element={<Wzory />} />
        <Route path="/kalkulator" element={<Kalkulator />} />
        <Route path="/info" element={<Informations />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/new" element={<New/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
