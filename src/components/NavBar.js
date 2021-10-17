import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DrawerLeft from "./DrawerLeft";
import { Button } from "@chakra-ui/react";
import "./NavBar.css";

function Navbar() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.48)");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1095) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  document.addEventListener("scroll", () => {
    const backgroundcolor =
      window.scrollY < 100 ? "rgba(0, 0, 0, 0.48)" : "rgba(0, 0, 0, 0.92)";

    setBackgroundColor(backgroundcolor);
  });
  return (
    <>
      <nav className="navbar" style={{ backgroundColor }}>
        <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img
                  style={{ opacity: 1 }}
                  src="https://www.scylla.ai/static/7c2c2d6dccf829dae2225bdee0d513fa/61ca6/logo-light.webp"
                  alt="scyllaLogo"
                />
              </Link>
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/solutions" className="nav-links">
                    {t("solutions")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/industries"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("industries")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/case-studies"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("case_studies")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/company"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("company")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("resources")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("contact_us")}
                  </Link>
                </li>
              </ul>
              <Button colorScheme="blue" onClick={() => {}} borderRadius="none">
                {t("book_a_demo")}
              </Button>
              {button && (
                <DrawerLeft
                  isOpen={click}
                  onOpen={handleClick}
                  onClose={handleClick}
                />
              )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
