import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/Spinner";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";

const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// BEFORE
// dist/assets/index-qnqS6WSY.css   29.98 kB │ gzip:   5.04 kB
// dist/assets/index-Djl5yhB6.js   513.62 kB │ gzip: 147.68 kB

// AFTER
// dist/assets/Product.module-DpVUF5Lu.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-mMR3kpEq.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-BSF4s0Hr.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-ucBWKrfY.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-BRX2jiLF.js           0.65 kB │ gzip:   0.42 kB
// dist/assets/Homepage-Ddh59Lpf.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-D5eHygZ5.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-CQfhE4Pp.js             1.01 kB │ gzip:   0.54 kB
// dist/assets/AppLayout-Cz-uoVm-.js       157.05 kB │ gzip:  46.17 kB
// dist/assets/index-GHe28KT-.js           354.93 kB │ gzip: 101.19 kB

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={SpinnerFullPage}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
