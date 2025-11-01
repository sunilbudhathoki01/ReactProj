import  {BrowserRouter,Route, Routes}  from "react-router";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './index.css'
import MainLayouts from "./layouts/MainLayouts";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import Login from "./pages/Login";
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<MainLayouts/>}>
         <Route path="/"element={<App></App>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
         <Route path="features" element={<Features></Features>}></Route>
        <Route path="Pricing" element={<Pricing></Pricing>}></Route>
       </Route>
       <Route path="/auth" element={<MainLayouts></MainLayouts>}>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>

       </Route>
         <Route>
            <Route path="*" element={<><h2>404 error</h2>Page not found bro</>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default Router;
