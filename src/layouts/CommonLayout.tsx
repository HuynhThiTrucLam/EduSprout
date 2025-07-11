import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const CommonLayout = () => {
  return (
    <div>
      <Header />
      <div style={{ flex: 1, backgroundColor: "#f9f8f4" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
