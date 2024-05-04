import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CreateArt from "./components/home/CreateArt";
import ShowArt from "./components/ShowArt";
import EditArt from "./components/EditArt";
import DeleteArt from "./components/DeleteArt";
import SignUp from "./pages/Signup";
import Login from "./pages/LogIn";
import CreateOrder from "./components/CreateOrder";
import OrderInbox from "./pages/OrderInbox";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import FAQPage from "./pages/FAQPage";

const App = () => {
  const location = useLocation(); // Get the current route location

  // Paths that should exclude the navbar
  const excludeNavbarPaths = ["/register", "/login", "/art/details/:id"];

  // Determine if the navbar should be rendered
  const shouldRenderNavbar = !excludeNavbarPaths.includes(location.pathname);

  return (
    <>
      {/* Render navbar if necessary */}
      {shouldRenderNavbar && <Navbar />}
      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/art/create" element={<CreateArt />} />
        <Route path="/art/details/:id" element={<ShowArt />} />
        <Route path="/art/edit/:id" element={<EditArt />} />
        <Route path="/art/delete/:id" element={<DeleteArt />} />
        <Route path="/order" element={<CreateOrder />} />
        <Route path="/orderInbox" element={<OrderInbox />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </>
  );
};

export default App;
