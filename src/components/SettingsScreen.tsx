import React from "react";
import i18n from "i18n-js";
import { ScreenTitle, ScreenBackground, Text, Section } from "./common";
import { styled, theme } from "theme";
import * as actions from "actions";
import { connect } from "react-redux";

interface Props {
  navigation: { navigate: (screen: string) => void };
  signOut: () => void;
}

class SettingsScreen extends React.Component<Props> {
  signOut = async () => {
    this.props.signOut();
    this.props.navigation.navigate("Auth");
  };

  render(): JSX.Element {
    return (
      <ScreenBackground>
        <ScreenTitle title={i18n.t("settingsTitle")} />
        <ScrollWrapper>
          <SectionsWrapper>
            <Section topPart bottomPart touchable onPress={this.signOut}>
              <SectionTitle>{i18n.t("signOut")}</SectionTitle>
            </Section>
          </SectionsWrapper>
          <Credits>{i18n.t("credits")}</Credits>
        </ScrollWrapper>
      </ScreenBackground>
    );
  }
}

export default connect(
  null,
  actions
)(SettingsScreen as React.ComponentClass<Props>);

const ScrollWrapper = styled.ScrollView`
  padding: 0 20px;
`;

const SectionsWrapper = styled.View`
  margin: 20px 0;
`;

interface SectionTitleProps {
  danger?: boolean;
}

const SectionTitle = styled(Text)<SectionTitleProps>`
  color: ${({ danger }) => (danger ? theme.danger : theme.activeTint)};
  font-weight: ${({ danger }) => (danger ? "bold" : "normal")};
`;

const Credits = styled(Text)`
  color: ${({ theme }) => theme.inactiveTint};
  text-align: center;
  margin-bottom: 22px;
`;
