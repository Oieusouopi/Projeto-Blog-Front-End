import { Routes, Route } from "react-router-dom";
import Register from "./pages/user/Register";
function App() {
  return (
    <Routes>
      <Route path="/register" element={ <Register/> } />
    </Routes>
  );
}

export default App;
