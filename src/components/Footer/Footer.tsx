import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} TruLem. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
