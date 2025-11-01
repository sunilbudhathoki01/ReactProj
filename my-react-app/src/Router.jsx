import  {BrowserRouter, Route, Routes}  from "react-router";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/"element={<App></App>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<><h2>404 error</h2>Page not found bro</>}></Route>

    </Routes>
    </BrowserRouter>
  );
};

export default Router;
