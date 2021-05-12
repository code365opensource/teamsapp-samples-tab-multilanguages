import React from "react";
import "./App.css";
import * as microsoftTeams from "@microsoft/teams-js";

import { withTranslation } from "react-i18next";

class Tab extends React.Component<any, any> {
  constructor(props: any) {
    super(props);


    this.state = {
      context: {},
    };
  }

  componentDidMount() {
    microsoftTeams.getContext((context: microsoftTeams.Context) => {
      this.setState({
        context: context,
      });
    });
  }

  render() {

    const { t } = this.props;

    const userName =
      Object.keys(this.state.context).length > 0
        ? this.state.context["upn"]
        : "";

    return (
      <div>
        <h1>{t("greeting")},{userName}!</h1>
        <h3>{t("title")}</h3>
        <p>{t("description")}</p>
      </div>
    );
  }
}
export default withTranslation()(Tab);
