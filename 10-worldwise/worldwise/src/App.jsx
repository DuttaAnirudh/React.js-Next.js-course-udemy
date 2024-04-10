import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      <Route path="app" element={<AppLayout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
