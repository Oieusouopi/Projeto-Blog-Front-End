import { Routes, Route } from "react-router-dom";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";

function App() {
  return (
    <Routes>
      <Route path="/register" element={ <Register/> } />
      <Route path="/login" element={ <Login/> } />
    </Routes>
  );
}

export default App;
