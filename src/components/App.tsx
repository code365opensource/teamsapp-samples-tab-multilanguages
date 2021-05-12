import * as microsoftTeams from "@microsoft/teams-js";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Privacy from "./Privacy";
import Tab from "./Tab";
import TabConfig from "./TabConfig";
import TermsOfUse from "./TermsOfUse";

function App() {
  const { t, i18n } = useTranslation();
  microsoftTeams.initialize();

  microsoftTeams.getContext((context) => {
    i18n.changeLanguage(context.locale);
  })

  return (
    <Router>
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/termsofuse" component={TermsOfUse} />
      <Route exact path="/tab" component={Tab} />
      <Route exact path="/config" component={TabConfig} />
    </Router>
  );
}

export default App;
