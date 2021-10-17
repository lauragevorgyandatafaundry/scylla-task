import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoreBlogDetails from "./components/MoreBlogDetails";
import ManContainer from "./components/ManContainer";
import NavBar from "./components/NavBar";

function App() {
  const { i18n } = useTranslation();
  const localeLang = "en";

  useEffect(() => {
    i18n.changeLanguage(localeLang);
  }, [localeLang]);

  return (
    <ChakraProvider>
      <Router>
      <NavBar />
        <Switch>
          <Route path="/" exact render={() => <ManContainer />} />
          <Route path="/blog" render={() => <MoreBlogDetails />} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
