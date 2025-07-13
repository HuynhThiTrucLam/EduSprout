import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Homepage from "../pages/Homepage/Homepage";
import Productdetail from "../components/ProductDetail/ProductDetail";
import MyCourse from "../pages/MyCourse/MyCourse";
import Auth from "../pages/Auth/Auth";
import MyFavorite from "../pages/MyFavorite/MyFavorite";

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
      <Route path="/auth" element={<Auth />} />
      <Route element={<CommonLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/product/:typeofProduct/:id"
          element={<ProductDetailWrapper />}
        />
        <Route path="/my-course" element={<MyCourse />} />
        <Route path="/my-favorite" element={<MyFavorite />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
