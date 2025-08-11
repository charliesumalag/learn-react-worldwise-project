import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Hompage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="product" element={ <Product /> } ></Route>
        <Route path="pricing" element={ <Pricing /> } ></Route>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
