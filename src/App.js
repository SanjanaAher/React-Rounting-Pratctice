import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OderPlaced from "./Components/OderPlaced";
import NoMatchRoute from "./Components/NoMatchRoute";
import NestedRoute from "./Components/NestedRoute";
import ChildOneNested from "./Components/ChildOneNested";
import ChildTwoNested from "./Components/ChildTwoNested";
import DynamicRoutes from "./Components/DynamicRoutes";
import UserDetails from "./Components/UserDetails";
import Admin from "./Components/Admin";
import Prof from "./Components/Prof";
import { AuthProvider } from "./Components/Auth";
import Login from "./Components/Login";
import RequireAuth from "./Components/RequireAuth";
const LazyAbout = React.lazy(() => import("./Components/About"));
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="About"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="OrderPlaced" element={<OderPlaced />} />
        <Route path="/products" element={<NestedRoute />}>
          <Route index element={<ChildOneNested />} />
          <Route path="featured" element={<ChildOneNested />} />
          <Route path="New" element={<ChildTwoNested />} />
        </Route>
        <Route path="users" element={<DynamicRoutes />}>
          <Route path=":userid" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Prof />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
