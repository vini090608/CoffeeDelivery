import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";
import { Conclusion } from "./pages/Conclusion";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/conclusion" element={<Conclusion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
