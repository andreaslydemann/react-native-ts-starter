import React from "react";
import i18n from "i18n-js";
import { ScreenTitle, ScreenBackground } from "components/common";

interface Props {
  navigation: { navigate: (screen: string) => void };
}

export default class SecondScreen extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <ScreenBackground>
        <ScreenTitle title={i18n.t("screen2Title")} />
      </ScreenBackground>
    );
  }
}
