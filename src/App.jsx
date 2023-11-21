import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HeadPhones from "./routes/HeadPhones";
import Speakers from "./routes/Speakers";
import Earphones from "./routes/Earphones";
import HeadPhone from "./routes/HeadPhone";
import Earphone from "./routes/Earphone";
import Speaker from "./routes/Speaker";
import Checkout from "./routes/Checkout";
import "react-toastify/dist/ReactToastify.css";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<HeadPhones />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/earphones" element={<Earphones />} />
      <Route path="/headphone/:id" element={<HeadPhone />} />
      <Route path="/earphone/:id" element={<Earphone />} />
      <Route path="/speaker/:id" element={<Speaker />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
