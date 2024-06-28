import { lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
const Grocery = lazy(() => import("./components/Test"));
function App() {
  return (
    <Routes>
      <Route element={<Grocery />} path="/"  />
      <Route element={<Error />} path="*" />
    </Routes>
  );
}

export default App;
