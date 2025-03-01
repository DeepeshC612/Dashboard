import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
