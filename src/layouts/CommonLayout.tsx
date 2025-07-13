import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Toaster } from "../components/ui/sonner";

const CommonLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          backgroundColor: "#f9f8f4",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default CommonLayout;
