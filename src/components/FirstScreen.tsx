import React from "react";
import i18n from "i18n-js";
import { ScreenTitle, ScreenBackground } from "components/common";

interface Props {
  navigation: { navigate: (screen: string) => void };
}

export default class FirstScreen extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <ScreenBackground>
        <ScreenTitle title={i18n.t("screen1Title")} />
      </ScreenBackground>
    );
  }
}
