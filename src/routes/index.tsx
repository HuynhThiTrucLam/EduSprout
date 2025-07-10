import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Homepage from "../pages/Homepage/Homepage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
