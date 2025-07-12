import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Homepage from "../pages/Homepage/Homepage";
import Productdetail from "../components/ProductDetail/ProductDetail";

// Wrapper component to access route parameters
const ProductDetailWrapper = () => {
  const { typeofProduct, id } = useParams();
  return (
    <Productdetail
      typeofProduct={typeofProduct?.toLowerCase() || ""}
      productId={id || ""}
    />
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/product/:typeofProduct/:id"
          element={<ProductDetailWrapper />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
