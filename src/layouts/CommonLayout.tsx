import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const CommonLayout = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <main style={{ flex: 1, padding: "2rem 0" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
